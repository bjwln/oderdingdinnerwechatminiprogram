package com.oderingdinner.service;

import com.oderingdinner.pojo.PageBean;
import com.oderingdinner.pojo.Result;
import com.oderingdinner.pojo.users;

import java.time.LocalDate;
import java.util.List;

/**
 * 员工管理
 */
public interface customerService {

    int select(Integer name,String password);

    Result register(Integer name, String username, String imageUrl, String password);

    List<users> apply(Integer id);

    Result update_user_name(Integer name, String username);

    Result update_user_image(Integer name, String imageUrl);

    int isok_register(Integer name);
}
