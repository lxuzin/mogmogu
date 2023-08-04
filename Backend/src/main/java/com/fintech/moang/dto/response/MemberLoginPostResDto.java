package com.fintech.moang.dto.response;

import com.fintech.moang.common.response.BaseResponseBody;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class MemberLoginPostResDto  extends BaseResponseBody {
    @ApiModelProperty(name="JWT access 인증 토큰")
    private String accessToken;

    public static MemberLoginPostResDto of(Integer statusCode, String message, String accessToken) {
        MemberLoginPostResDto res = new MemberLoginPostResDto();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setAccessToken(accessToken);
        return res;
    }
}
