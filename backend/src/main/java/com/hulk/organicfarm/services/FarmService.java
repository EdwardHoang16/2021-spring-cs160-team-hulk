package com.hulk.organicfarm.services;

import com.hulk.organicfarm.models.Farm;
import com.hulk.organicfarm.repositories.FarmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class FarmService {

    private final FarmRepository farmRepository;

    @Autowired
    public FarmService(FarmRepository farmRepository) {
        this.farmRepository = farmRepository;
    }

    public List<Farm> getFarms() {
        List<Farm>  res = this.farmRepository.findAll();
        if (res.isEmpty()) {
            System.out.println("Zero Farms found");
            return res;
        }
        return res;
    }

    public List<Farm> getFarmsByCity(String city) {
        List<Farm>  res = this.farmRepository.findAll();//find all farms by city, not done yet
        if (res.isEmpty()) {
            System.out.println("Zero Farms found");
            return res;
        }
        return res;
    }

    @Transactional
    public Farm getFarmById(String farmId){
        Optional<Farm> farmOptional = farmRepository.findById(farmId);
        return farmOptional.orElse(null);
    }

    @Transactional
    public String addFarm(Farm farm) {
        System.out.println(farm);
        try {
            System.out.println("INSIDE");
            farmRepository.save(farm);
        } catch (Exception e) {
            return "Error! Could not add new Record";
        }
        return "Record Successfully Added!";
    }

}

