package com.oderingdinner.service.impl;

import com.oderingdinner.mapper.customerMapper;
import com.oderingdinner.pojo.Result;
import com.oderingdinner.pojo.users;
import com.oderingdinner.service.customerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class customerServiceImpl implements customerService {

    @Autowired
    private customerMapper customerMapper;

    /*@Override
    public PageBean page(Integer page, Integer pageSize) {
        //1. 获取总记录数
        Long count = empMapper.count();

        //2. 获取分页查询结果列表
        Integer start = (page - 1) * pageSize;
        List<goods> empList = empMapper.page(start, pageSize);

        //3. 封装PageBean对象
        PageBean pageBean = new PageBean(count, empList);
        return pageBean;
    }*/




    @Override
    public int select(Integer name,String password) {
        return customerMapper.select(name,password);
    }
    @Override
    public Result register(Integer name, String username, String imageUrl, String password) {
        try{
            customerMapper.register(name, username, imageUrl, password);
            return Result.success();
        }catch (Exception e){

            return Result.error("账号已存在");
        }

    }

    @Override
    public List<users> apply(Integer id) {
        return customerMapper.apply(id);
    }

    @Override
    public Result update_user_name(Integer name, String username) {
                customerMapper.update_user_name(name, username);
                return Result.success();
    }

    @Override
    public Result update_user_image(Integer name, String imageUrl) {
        customerMapper.update_user_image(name, imageUrl);
        return Result.success();
    }

    @Override
    public int isok_register(Integer name) {
        return customerMapper.isok_register(name);
    }
}
