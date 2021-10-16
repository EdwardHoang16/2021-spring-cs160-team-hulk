package com.hulk.organicfarm.controllers;

import com.hulk.organicfarm.services.UserCredentialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//Endpoints
@RestController
@RequestMapping("/login")
public class UserCredentialController {

    private UserCredentialService userCredentialService;

    @Autowired
    public UserCredentialController(UserCredentialService userCredentialService) {
        this.userCredentialService = userCredentialService;
    }

    @GetMapping("/usercredentials")
    public boolean verifyCredentials(String email, String password) throws Exception {
        try {
            boolean res = userCredentialService.passwordVerification(email,password);
            if (!res) {
                System.out.println("Wrong password or email");
                return false;
            }
        } catch (Exception e) {
            System.out.println("Wrong password or email");
            return false;
        }
        return true;
    }

}
