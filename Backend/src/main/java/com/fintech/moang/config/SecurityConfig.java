package com.fintech.moang.config;

import com.fintech.moang.config.jwt.JwtAuthenticationFilter;
import com.fintech.moang.domain.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private CorsConfig corsConfig;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)// JWT 토큰 기반 인증 설정
                .and() // JWT를 사용하면 UserDetailsService를 호출하지 않는다.
                .formLogin().disable() // http 기본 로그인 html을 안쓴다.
                .httpBasic().disable() // auth : ID, PW 안쓴다는 의미
                .apply(new MyCustomDsl()) // 커스텀 필터 등록
                .and() // 인증 인가
                .authorizeRequests()
                .antMatchers("/api/v1/member/**")
                .access("hasRole('ROLE_MEMBER') or hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
                .anyRequest().permitAll();

        return http.build();
    }

    public class MyCustomDsl extends AbstractHttpConfigurer<MyCustomDsl, HttpSecurity> {
        @Override
        public void configure(HttpSecurity http) throws Exception {
            AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
            http
                    .addFilter(corsConfig.corsFilter()) // @CrossOrigin는 인증작업을 못함, 시큐리티 필터에 등록해 인증하는 것.
                    .addFilter(new JwtAuthenticationFilter(authenticationManager, memberRepository));
        }
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
