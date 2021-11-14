package com.hulk.organicfarm.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name= "UserCredentials")
@Table(
        name= "user_credentials"
)
public class UserCredentials {
    @Id
    @Column(
            name = "email",
            updatable = false
    )
    private String email;

    @Column(
            name = "salt",
            updatable = false
    )
    private String salt;

    @Column(
            name = "password",
            updatable = false,
            nullable = false
    )
    private String password;

    public UserCredentials(String email, String salt, String password) {
        this.email = email;
        this.salt = salt;
        this.password = password;
    }

    public UserCredentials(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public UserCredentials() {}


    public String getEmail() {
        return email;
    }

    public String getSalt() {
        return salt;
    }

    public String getPassword() {
        return password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserCredentials{" +
                "email='" + email + '\'' +
                ", salt='" + salt + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

