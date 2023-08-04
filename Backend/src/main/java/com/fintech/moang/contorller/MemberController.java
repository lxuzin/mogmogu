package com.fintech.moang.contorller;

import com.fintech.moang.common.response.BaseResponseBody;
import com.fintech.moang.config.auth.MemberDetails;
import com.fintech.moang.domain.member.Member;
import com.fintech.moang.dto.request.MemberJoinPostReqDto;
import com.fintech.moang.dto.response.MemberInfoGetResDto;
import com.fintech.moang.dto.response.MemberJoinPostResDto;
import com.fintech.moang.service.MemberService;
import io.swagger.annotations.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

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



    @GetMapping("/{name}")
    @ApiOperation(value="회원 정보 조회", notes = "아이디로 회원 정보를 조회한다.")
    public ResponseEntity<Member> getMemberInfo(@PathVariable String name) {
        Member member = memberService.getMemberByName(name);
        return ResponseEntity.ok(member);
    }
}
