package com.hulk.organicfarm.controllers;

import com.hulk.organicfarm.models.Farm;
import com.hulk.organicfarm.services.FarmService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @PostMapping("/farms/{email}")
    public Farm addFarms(@NonNull @RequestBody Farm farm, @PathVariable String email){
        return farmService.addFarm(farm, email);
    }

    @GetMapping("/farms/{farmId}")
    public Farm getFarmById(@PathVariable String farmId) {
        System.out.println(farmId);
        return this.farmService.getFarmById(farmId);
    }

    @GetMapping("/farms/")
    public List<Farm> getFarmsByEmail(@RequestParam String email){
        return farmService.getFarmsByEmail(email);
    }
}
