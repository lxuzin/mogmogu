package com.fintech.moang.dto.request;

import lombok.Data;

@Data
public class MemberLoginPostReqDto {
    private String name;
    private String password;
}
