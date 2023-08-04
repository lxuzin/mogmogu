package com.fintech.moang.contorller;

import com.fintech.moang.common.response.BaseResponseBody;
import com.fintech.moang.config.jwt.JwtTokenUtil;
import com.fintech.moang.domain.AuthRefreshToken.AuthRefreshToken;
import com.fintech.moang.domain.AuthRefreshToken.AuthRefreshTokenRepository;
import com.fintech.moang.domain.member.Member;
import com.fintech.moang.domain.member.MemberRepository;
import com.fintech.moang.dto.request.MemberJoinPostReqDto;
import com.fintech.moang.dto.request.MemberLoginPostReqDto;
import com.fintech.moang.dto.response.MemberJoinPostResDto;
import com.fintech.moang.dto.response.MemberLoginPostResDto;
import com.fintech.moang.service.MemberService;
import io.swagger.annotations.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@AllArgsConstructor
@Api(value = "인증 API", tags = {"Auth"})
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;

    private final AuthRefreshTokenRepository authRefreshTokenRepository;

    @PostMapping()
    @ApiOperation(value="회원 가입", notes = "아이디와 패스워드를 통해 회원가입 한다")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "가입 실패"),
            @ApiResponse(code = 404, message = "반환값 없음"),
            @ApiResponse(code = 500, message = "서버 오류"),
    })
    public ResponseEntity<MemberJoinPostResDto> register(@RequestBody @ApiParam(value="회원가입 정보", required = true) MemberJoinPostReqDto joinInfo) {
        if(memberService.createMember(joinInfo)) {
            // 가입 성공시 성공 리턴
            return ResponseEntity.status(200).body(MemberJoinPostResDto.of(200, "Success", true));
        }
        // 가입 실패시 실패 리턴
        return ResponseEntity.status(401).body(MemberJoinPostResDto.of(401, "Failure", false));
    }

    @PostMapping("/login")
    @ApiOperation(value = "로그인", notes = "아이디와 패스워드를 통해 로그인 한다")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = MemberLoginPostResDto.class),
            @ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
            @ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
            @ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
    })
    public ResponseEntity<MemberLoginPostResDto> login(@RequestBody @ApiParam(value="로그인 정보", required = true) MemberLoginPostReqDto loginInfo, HttpServletResponse response) {
        String name = loginInfo.getName();
        String password = loginInfo.getPassword();
        Member member = memberService.getMemberByName(name);

        // 로그인 요청한 아이디가 DB에 존재하지 않으면 사용자없음 에러
        if(member==null) {
            return ResponseEntity.status(404).body(MemberLoginPostResDto.of(404, "Not Exist", null));
        }

        // 로그인 요청시 입력한 패스와드와 DB의 패스워드가 같은지 확인
        if(passwordEncoder.matches(password, member.getPassword())) {
            // 같으면 로그인 성공
            String refreshToken = JwtTokenUtil.getRefreshToken(name);
            AuthRefreshToken authRefreshToken = new AuthRefreshToken();
            authRefreshToken.setRefreshToken((refreshToken));
            authRefreshTokenRepository.save(authRefreshToken);

            Cookie cookie=new Cookie("refreshToken", refreshToken); // refresh 담긴 쿠키 생성
            cookie.setMaxAge(JwtTokenUtil.refreshExpirationTime); // 쿠키의 유효시간을 refresh 유효시간만큼 설정
//            cookie.setSecure(true); // 클라이언트가 HTTPS가 아닌 통신에서는 해당 쿠키를 전송하지 않도록 하는 설정
            cookie.setHttpOnly(true); // 브라우저에서 쿠키에 접근할 수 없도록 하는 설정
            cookie.setPath("/");

            response.addCookie(cookie);
            return ResponseEntity.ok(MemberLoginPostResDto.of(200, "Success", JwtTokenUtil.getAccessToken(name)));
        }

        // 패스워드가 일치하지 않으면 로그인 실패 응답
        return ResponseEntity.status(401).body(MemberLoginPostResDto.of(401, "Invalid Password", null));
    }
}
