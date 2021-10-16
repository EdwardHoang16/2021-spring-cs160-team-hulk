package com.hulk.organicfarm.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "farm")
public class Farm {
    @Id
    @Column(name = "farm_name")
    private String farmName;
    @Column(name = "img_url")
    private String imgUrl;
    @Column(name = "contact_id")
    private String contactId;
}
