package com.fintech.moang.config.auth;


import com.fintech.moang.domain.member.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class MemberDetails implements UserDetails {
    @Autowired
    Member member;
    boolean accountNonExpired;
    boolean accountNonLocked;
    boolean credentialNonExpired;
    boolean enabled = false;
    List<GrantedAuthority> roles = new ArrayList<>();

    public MemberDetails(Member member) {
        super();
        this.member = member;
    }

    public Member getMember() {
        return this.member;
    }
    @Override
    public String getPassword() {
        return this.member.getPassword();
    }
    @Override
    public String getUsername() {
        return this.member.getName();
    }
    @Override
    public boolean isAccountNonExpired() {
        return this.accountNonExpired;
    }
    @Override
    public boolean isAccountNonLocked() {
        return this.accountNonLocked;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return this.credentialNonExpired;
    }
    @Override
    public boolean isEnabled() {
        return this.enabled;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        member.getRoleList().forEach(r -> {
            authorities.add(()->{ return r;});
        });
        return authorities;
    }
    public void setAuthorities(List<GrantedAuthority> roles) {
        this.roles = roles;
    }

}



