package com.hulk.organicfarm.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "user_credentials")
public class UserCredentials {
    @Id
    @Column(name = "email")
    private String email;
    @Column(name = "salt")
    private String salt;
    @Column(name = "password")
    private String password;
}
