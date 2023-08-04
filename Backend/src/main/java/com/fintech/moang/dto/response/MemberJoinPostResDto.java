package com.fintech.moang.dto.response;

import com.fintech.moang.common.response.BaseResponseBody;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class MemberJoinPostResDto extends BaseResponseBody {
    @ApiModelProperty(name = "성공유무", example = "true or false")
    private boolean result;

    public static MemberJoinPostResDto of(Integer statusCode, String message, boolean result) {
        MemberJoinPostResDto res = new MemberJoinPostResDto();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setResult(result);
        return res;
    }
}
