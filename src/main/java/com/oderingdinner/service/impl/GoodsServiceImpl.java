package com.oderingdinner.service.impl;

import com.oderingdinner.mapper.GoodsMapper;
import com.oderingdinner.pojo.goods;
import com.oderingdinner.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsServiceImpl implements GoodsService {

    @Autowired
    private GoodsMapper goodsMapper;



    /**
     * 查询商品id的信息
     * @return
     */
    @Override
    public List<goods> select(Integer id) {
        return  goodsMapper.selectById(id);
    }
}
