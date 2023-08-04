package com.fintech.moang.contorller;

import com.fintech.moang.common.response.BaseResponseBody;
import com.fintech.moang.dto.request.MemberJoinPostReqDto;
import com.fintech.moang.dto.response.MemberJoinPostResDto;
import com.fintech.moang.service.MemberService;
import io.swagger.annotations.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 멤버 관련 API 요청 처리를 위한 컨트롤러
 */

@Api(value = "유저 API", tags = {"Member"})
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/member")
public class MemberController {
    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;

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

}
