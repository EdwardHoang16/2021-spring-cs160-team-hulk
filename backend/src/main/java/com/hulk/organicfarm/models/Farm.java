package com.hulk.organicfarm.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity(name= "Farm")
@Table(
        name= "farm"
)

public class Farm {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "uuid2")
    @Column(name = "id")
    private String id;

    @Column(name = "farm_name", nullable = false)
    private String farmName;

    @Column(name = "img_url", nullable = false)
    private String imgUrl;

    @Column(name = "contact_id", nullable=false)
    private String contactID;

    @Column(name = "city")
    private String city;

    public Farm(String farmName, String imgUrl, String farmContactInfo, String city) {
        this.farmName = farmName;
        this.imgUrl = imgUrl;
        this.contactID = farmContactInfo;
        this.city = city;
    }

    public Farm(){ }

    public String getId() {
        return id;
    }

    public String getFarmName() {
        return farmName;
    }

    public void setFarmName(String farmName) {
        this.farmName = farmName;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getContactID() {
        return contactID;
    }

    public void setContactID(String contactID) {
        this.contactID = contactID;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
