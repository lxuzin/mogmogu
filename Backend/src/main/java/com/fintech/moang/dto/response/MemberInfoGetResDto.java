package com.fintech.moang.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class MemberInfoGetResDto {
    private String name;
    private String password;
    private Boolean enabled;
    private String roles;

}
