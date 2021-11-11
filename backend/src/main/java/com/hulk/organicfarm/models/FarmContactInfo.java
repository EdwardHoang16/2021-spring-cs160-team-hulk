package com.hulk.organicfarm.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;


@Entity(name= "FarmContactInfo")
@Table(
        name= "farm_contact_info"
)
public class FarmContactInfo {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "uuid2")
    @Column(name = "id")
    private String id;

    @Column(name = "address")
    private String address;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email", nullable=false)
    private String email;

    public FarmContactInfo(String address, String phoneNumber, String email) {
        //this.id = UUID.randomUUID();
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    public FarmContactInfo(String id) {
        this.id = id;
    }
    public FarmContactInfo() {
    }

    public String getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

