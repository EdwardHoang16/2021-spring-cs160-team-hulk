package com.hulk.organicfarm.controllers;


import com.hulk.organicfarm.models.UserCredentials;
import com.hulk.organicfarm.services.UserCredentialsService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UserCredentialsController {

     private final UserCredentialsService userCredentialsService;

     @Autowired
     public UserCredentialsController(UserCredentialsService userCredentialsService) {
        this.userCredentialsService = userCredentialsService;
     }

     @PostMapping("/userCredentials")
     public String addNewUserCredentials(@NonNull @RequestBody UserCredentials userCredentials) {
         return userCredentialsService.addNewUserCredentialsRecord(userCredentials);
     }

//     @GetMapping("/userCredentials/{email}")
//     public UserCredentials getUserCredentialByEmail(@PathVariable("email") String email){
//         return userCredentialsService.getUserCredentialsByEmail(email);
//     }

    @GetMapping("/userCredentials/verify")
    public boolean verifyUserCredentials(@NonNull @RequestBody UserCredentials userCredentials) throws NoSuchAlgorithmException {
        System.out.println(userCredentials);
        return userCredentialsService.isValidCredentials(userCredentials);
    }

     @GetMapping("/userCredentials/verifyCredentials/{email}/{password}")
     public boolean verifyUserCredentials(@PathVariable("email") String email, @PathVariable("password") String password) throws NoSuchAlgorithmException {
         return userCredentialsService.isValidCredentials(new UserCredentials(email,password));
     }


}
