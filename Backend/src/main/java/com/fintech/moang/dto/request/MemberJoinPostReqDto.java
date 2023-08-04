package com.fintech.moang.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@ApiModel("MemberJoinPostRequest")
public class MemberJoinPostReqDto {
    @ApiModelProperty(name="멤버 이름", example = "김동희")
    private String name;
    private String password;
    private Boolean enabled;
//    private String code;
//    private String bank;
//    private String account;
}
