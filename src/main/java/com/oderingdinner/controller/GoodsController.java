package com.oderingdinner.controller;

import com.oderingdinner.pojo.Result;
import com.oderingdinner.pojo.goods;
import com.oderingdinner.service.GoodsService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 管理Controller
 */
@Slf4j

@RestController
public class GoodsController {

    @Autowired
    private GoodsService goodsService;

    /**
     * 查询商品id的信息
     */
    @RequestMapping(value = "/goods/{id}")
    public Result select(@PathVariable Integer id){
        log.info("根据id查询商品:{}",id);
        List<goods> GoodsList=goodsService.select(id);
        return  Result.success(GoodsList);
    }






    /**
     * 新增部门
     * @return
     */
}
