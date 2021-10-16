package com.hulk.organicfarm.services;

import com.hulk.organicfarm.models.UserCredentials;
import com.hulk.organicfarm.repositories.UserCredentialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

//Logic
@Service
public class UserCredentialService {

    private UserCredentialsRepository userCredentialsRepository;

    @Autowired
    public boolean passwordVerification(String email, String enteredPassword) throws Exception {
        UserCredentials userCredentials = userCredentialsRepository.getUserCredential(email);
        String salt = userCredentials.getSalt();
        String password = userCredentials.getPassword();

        String encrypted = enteredPassword + salt;
        MessageDigest md = MessageDigest.getInstance("SHA3-256");
        byte[] result = md.digest(encrypted.getBytes());
        String currentPassword = new String(result);

        return currentPassword.equals(password);
    }
}
