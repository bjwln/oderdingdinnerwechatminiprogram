package com.oderingdinner.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 员工实体类
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class goods {
    private Integer id; //ID
    private String name; //名称
    private LocalDateTime time; //时间
    private Integer price; //姓名
    private String comment; //评论

}
