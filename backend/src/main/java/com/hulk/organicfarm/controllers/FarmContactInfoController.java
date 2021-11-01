package com.hulk.organicfarm.controllers;

import com.hulk.organicfarm.models.FarmContactInfo;
import com.hulk.organicfarm.services.FarmContactInfoService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class FarmContactInfoController {

    @Autowired
    private FarmContactInfoService farmContactInfoService;

    @Autowired
    public FarmContactInfoController(FarmContactInfoService farmContactInfoService) {
        this.farmContactInfoService = farmContactInfoService;
    }

    @PostMapping("/farmContactInfo")
    public String addFarmContactInfo(@NonNull @RequestBody FarmContactInfo farmContactInfo){
        System.out.println(farmContactInfo);
        return farmContactInfoService.addFarmContactInfo(farmContactInfo);
    }

    @GetMapping("/farmContactInfo/{id}")
    public FarmContactInfo getFarmContactInfo(@PathVariable("id") String id){
        return farmContactInfoService.getFarmContactInfo(id);
    }

    @GetMapping("/farmContactInfo/allFarms")
    public List<FarmContactInfo> getAllFarmsContactInfo(){
        return farmContactInfoService.getAllFarmContactInfo();
    }
}
