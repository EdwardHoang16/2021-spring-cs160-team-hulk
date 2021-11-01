package com.hulk.organicfarm.services;

import com.hulk.organicfarm.models.FarmContactInfo;
import com.hulk.organicfarm.repositories.FarmContactInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class FarmContactInfoService {

    private FarmContactInfoRepository farmContactInfoRepository;

    @Autowired
    public FarmContactInfoService(FarmContactInfoRepository farmContactInfoRepository) {
        this.farmContactInfoRepository = farmContactInfoRepository;
    }

    public List<FarmContactInfo> getAllFarmContactInfo() {
        List<FarmContactInfo> farms = farmContactInfoRepository.findAll();
        if (farms.isEmpty()) {
            System.out.println("Found not found");
            return null;
        }
        return farms;
    }

    public FarmContactInfo getFarmContactInfo(String id) {
        Optional<FarmContactInfo> farm = farmContactInfoRepository.findById(id);
        if (farm.isEmpty()) {
            System.out.println("Found not found");
            return null;
        }
        return farm.get();
    }

    public String addFarmContactInfo(FarmContactInfo farmContactInfo){
        System.out.println(farmContactInfo.getAddress());
        System.out.println(farmContactInfo.getEmail());
        System.out.println(farmContactInfo.getPhoneNumber());
        try {
            farmContactInfoRepository.save(farmContactInfo);
        } catch (Exception e) {
            System.out.println(e);
            return "Error! Could not add new Record";
        }
        return "Record Successfully Added!";
    }

}

