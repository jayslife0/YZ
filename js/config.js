/**
 * Created by xinzhang on 16/3/26.
 */
"use strict";

angular.module("YZ.config", [])
    .constant("$ionicLoadingConfig", {
        "template": "请求中..."
    })
    .constant("ENV", {
        //"url": "http://9ihf.cn/",
        "url": "http://localhost:6767/",
        //"url": "http://120.27.121.85/",
        "success": "SUCCESS",
        "fail": "FAIL",
        "error": "ERROR",
        "timeout": 40000  //链接超时时间设置
    })
    ;


