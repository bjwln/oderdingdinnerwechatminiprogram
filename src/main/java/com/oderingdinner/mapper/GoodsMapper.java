package com.oderingdinner.mapper;

import com.oderingdinner.pojo.goods;
import com.oderingdinner.pojo.home;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * 部门管理
 */
@Mapper

public interface GoodsMapper {


    /**
     * 根据ID查询商品
     * 根据id查询商品的话需要一个抽象方法，如果不用传参就直接定义一个List数组就可以了
     * List<goods> list();
     */
    @Select("SELECT * FROM goods WHERE id = #{id}")
    List<goods> selectById(Integer id);







    /**
     * 新增部门
     * @param home
     */
    @Insert("insert into home(name, create_time, update_time) values(#{name},#{createTime},#{updateTime})")
    void insert(home home);
}
