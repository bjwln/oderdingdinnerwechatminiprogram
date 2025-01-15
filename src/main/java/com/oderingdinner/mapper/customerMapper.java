package com.oderingdinner.mapper;

import com.oderingdinner.pojo.goods;
import com.oderingdinner.pojo.users;
import org.apache.ibatis.annotations.*;

import java.time.LocalDate;
import java.util.List;

/**
 * 员工管理
 */
@Mapper
public interface customerMapper {


    @Select("SELECT COUNT(*) FROM users WHERE name = #{name} AND password = #{password}")
    int select( Integer name, String password);

    @Insert("INSERT INTO users (name, username,imageUrl,password) " +
            "VALUES (#{name}, #{username},#{imageUrl},#{password})")
    void register(Integer name, String username, String imageUrl, String password);
    @Select("SELECT  * From users WHERE name=#{id}")
    List<users> apply(Integer id);

    @Update("UPDATE users SET username = #{username} WHERE name = #{name}")
    void update_user_name(Integer name, String username);
    @Update("UPDATE users SET imageUrl = #{imageUrl} WHERE name = #{name}")
    void update_user_image (Integer name, String imageUrl);


    @Select("SELECT COUNT(*) FROM users WHERE name = #{name} ")
    int isok_register(Integer name);

}

