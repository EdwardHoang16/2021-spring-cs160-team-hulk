package com.hulk.organicfarm.controllers;

import com.hulk.organicfarm.models.Farm;
import com.hulk.organicfarm.models.UserCredentials;
import com.hulk.organicfarm.services.FarmService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class FarmController {

    private FarmService farmService;

    @Autowired
    public FarmController(FarmService farmService) {
        this.farmService = farmService;
    }

    @GetMapping("/farms")
    public List<Farm> getFarms() {
        return this.farmService.getFarms();
    }

    @PostMapping("/farms")
    public void addFarms(@NonNull @RequestBody Farm farm){
        UserCredentials userCredentials = new UserCredentials("trido@sjsu.edu", "1234");
        farm.setUserCredentials(userCredentials);
        farmService.addFarm(farm);
        System.out.println("save successfully");
    }
}
