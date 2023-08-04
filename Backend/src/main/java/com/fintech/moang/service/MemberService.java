package com.fintech.moang.service;

import com.fintech.moang.domain.member.Member;
import com.fintech.moang.domain.member.MemberRepository;
import com.fintech.moang.dto.request.MemberJoinPostReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public boolean createMember(MemberJoinPostReqDto joinInfo) {
        if (memberRepository.findByName(joinInfo.getName()) != null) {
            return false;
        }
        Member member = new Member();
        member.setName(joinInfo.getName());
        member.setPassword(passwordEncoder.encode(joinInfo.getPassword()));
        memberRepository.save(member);
        return true;
    }

    public Member getMemberByName(String name) {
        Member member = memberRepository.findByName(name);
        return member;
    }
}
