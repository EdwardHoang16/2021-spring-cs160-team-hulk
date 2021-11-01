package com.hulk.organicfarm.controllers;

import com.hulk.organicfarm.models.Farm;
import com.hulk.organicfarm.services.FarmService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class FarmController {

    @Autowired
    private FarmService farmService;

    @Autowired
    public FarmController(FarmService farmService) {
        this.farmService = farmService;
    }

    @GetMapping("/farms")
    public List<Farm> getFarms() {
        return this.farmService.getFarms();
    }
}
