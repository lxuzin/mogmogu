package com.fintech.moang.common.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("BaseResponseBody")
public class BaseResponseBody {
    @ApiModelProperty(name="응답 메시지", example = "정상")
    String message = null;
    @ApiModelProperty(name="응답 코드", example = "200")
    Integer statusCode = null;

    public BaseResponseBody() {}

    public BaseResponseBody(Integer statusCode) {
        this.statusCode = statusCode;
    }

    public BaseResponseBody(String message, Integer statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }

    public static BaseResponseBody of(Integer statusCode, String message) {
        BaseResponseBody body = new BaseResponseBody();
        body.message = message;
        body.statusCode = statusCode;
        return body;
    }
}
