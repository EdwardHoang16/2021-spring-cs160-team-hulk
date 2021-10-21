package com.hulk.organicfarm.services;

import com.hulk.organicfarm.models.UserCredentials;
import com.hulk.organicfarm.repositories.UserCredentialsRepository;
import lombok.NonNull;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;
import java.util.Random;

@Service
public class UserCredentialsService {
    private UserCredentialsRepository userCredentialsRepository;
    private Random random;
    @Autowired
    public UserCredentialsService(UserCredentialsRepository userCredentialsRepository) {
        this.userCredentialsRepository = userCredentialsRepository;
        random = new Random();
    }

    public UserCredentials getUserCredentialsByEmail(String email) {
        Optional<UserCredentials> res = userCredentialsRepository.findById(email);
        if (!res.isPresent()) {
            return new UserCredentials("Email","Salt","Password");
        }
        return res.get();
    }

    private String getSalt() {
        return String.valueOf(random.nextInt(Integer.MAX_VALUE));
    }

    private String getEncryptedPassword(String password, String salt) throws NoSuchAlgorithmException {
        String passwordAndSalt = password + salt;

        MessageDigest md = MessageDigest.getInstance("SHA3-256");
        byte[] result = md.digest(passwordAndSalt.getBytes());

        String encryptedPassword = new String(result);

        return encryptedPassword;
    }

    public String addNewUserCredentialsRecord(UserCredentials userCredentials){
        try {
            String email = userCredentials.getEmail();
            String salt = getSalt();
            String password = userCredentials.getPassword();
            String encryptedPassword = getEncryptedPassword(password,salt);
            UserCredentials record = new UserCredentials(email,salt,encryptedPassword);

            userCredentialsRepository.save(record);
        } catch (Exception e) {
            return "Error! Could not add new Record";
        }
        return "Record Successfully Added!";
    }

    public boolean isValidCredentials(@NonNull UserCredentials userCredentials) throws NoSuchAlgorithmException {
        String email = userCredentials.getEmail();
        String password = userCredentials.getPassword();

        UserCredentials validCredentials = getUserCredentialsByEmail(email);
        if(validCredentials.getEmail().equals("Email")) {
            return false;//email not found
        }
        String currentPassword = getEncryptedPassword(password,validCredentials.getSalt());

        return currentPassword.equals(validCredentials.getPassword());

    }

}
