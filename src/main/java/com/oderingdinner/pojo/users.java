package com.oderingdinner.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class users {
        private Integer name; //用户账号
        private String username;//用户名
        private String imageUrl;//用户头像地址
        private String password; //密码
    }
