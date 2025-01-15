package com.oderingdinner.service;

import com.oderingdinner.pojo.goods;

import java.util.List;

/**
 * 部门管理
 */
public interface GoodsService {
    /**
     * 删除部门
     *
     * @param id
     * @return
     */
    List<goods> select(Integer id);
}
