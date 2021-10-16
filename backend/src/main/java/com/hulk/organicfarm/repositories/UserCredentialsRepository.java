package com.hulk.organicfarm.repositories;

import com.hulk.organicfarm.models.UserCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.ResultSet;
import java.util.List;
import java.util.Random;

//Communicate with DB
//I think we need a library to enter queries and get data
@Repository
public class UserCredentialsRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserCredentialsRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public UserCredentials getUserCredential(String email) throws Exception {
        //
        final String sql = String.format("SELECT * FROM user_credentials WHERE email = %s",email);
        List<UserCredentials> res = jdbcTemplate.query(sql,(resultSet, i)-> {
            return new UserCredentials(
                    resultSet.getString("email"),
                    resultSet.getString("salt"),
                    resultSet.getString("password")
            );
        });
        if (res.isEmpty()) {
            throw new Exception("Could not find email");
        }
        return res.get(0);
    }

    public void createUserCredential(String email, String password) throws NoSuchAlgorithmException {
        Random rand = new Random();
        int upperbound = Integer.MAX_VALUE;
        int intRandom = rand.nextInt(upperbound);
        String encrypted = password + intRandom;
        MessageDigest md = MessageDigest.getInstance("SHA3-256");
        byte[] result = md.digest(encrypted .getBytes());
        String newP = new String(result);

        UserCredentials uc = new UserCredentials(email,String.valueOf(intRandom),newP);
        final String sql = String.format("INSERT INTO user_credentials (email,salt,password) VALUES (%s,%s,%s)",email, intRandom,newP);
        int res = jdbcTemplate.update(sql);
        //submit UC
        //if succes
            //console log success
        //else
            //console log failed
    }
}
