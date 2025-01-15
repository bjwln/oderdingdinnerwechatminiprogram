package com.oderingdinner.controller;

import com.oderingdinner.pojo.PageBean;
import com.oderingdinner.pojo.Result;
import com.oderingdinner.pojo.goods;
import com.oderingdinner.pojo.users;
import com.oderingdinner.service.customerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

/**
 * 员工管理Controller
 */
@Slf4j
@RestController

public class customerController {

    @Autowired
    private customerService customerService;

    /*
    @PathVariable注解，用于从URL路径中提取变量。
    @RequestParam注解用于从data中获得参数
    * */
    @RequestMapping(value = "/login")
    public Result login(@RequestParam Integer name, @RequestParam String password){

        int a=customerService.select(name,password);
        if(a==1)
            return  Result.success(name);
        else return  Result.error("can not found this user");
    }

    @RequestMapping(value = "/apply/{id}")
    public List<users> apply(@PathVariable Integer id){
        List<users> Users=customerService.apply(id);
        System.out.println(Users);

        return  Users;


    }


    @RequestMapping(value = "/register")
    public Result register(@RequestParam Integer name,
                           @RequestParam String username,
                           @RequestParam String imageUrl,
                           @RequestParam String password){
       return customerService.register(name,
               username,
               imageUrl,
               password
       );

    }

    @RequestMapping(value = "/update_user_name")
    public Result update_user_name(@RequestParam Integer name, @RequestParam String username){

        return customerService.update_user_name(name,username);

    }

    @RequestMapping(value = "/update_user_image")
    public Result update_user_image(@RequestParam Integer name, @RequestParam String imageUrl){
        System.out.println(imageUrl);
        return customerService.update_user_image(name,imageUrl);

    }
    @RequestMapping(value = "/isok_register/{name}")
    public Result isok_register(@PathVariable Integer name){

        int a=customerService.isok_register(name);
        if(a==1)
            return  Result.success(name);
        else return  Result.error("can not found this user");
    }

}
