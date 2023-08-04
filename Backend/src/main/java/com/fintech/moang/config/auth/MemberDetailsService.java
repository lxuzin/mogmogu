package com.fintech.moang.config.auth;

import com.fintech.moang.domain.member.Member;
import com.fintech.moang.domain.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;


    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        Member member = memberRepository.findByName(name);
        if(member!=null) {
            MemberDetails memberDetails = new MemberDetails(member);
            return memberDetails;
        }
        return null;
    }
}
