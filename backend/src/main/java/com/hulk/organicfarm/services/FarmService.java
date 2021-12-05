package com.hulk.organicfarm.services;

import com.hulk.organicfarm.models.Farm;
import com.hulk.organicfarm.models.UserCredentials;
import com.hulk.organicfarm.repositories.FarmRepository;
import com.hulk.organicfarm.repositories.UserCredentialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class FarmService {

    private final FarmRepository farmRepository;
    private final UserCredentialsRepository userCredentialsRepository;

    @Autowired
    public FarmService(FarmRepository farmRepository, UserCredentialsRepository userCredentialsRepository) {
        this.farmRepository = farmRepository;
        this.userCredentialsRepository = userCredentialsRepository;
    }

    public List<Farm> getFarms() {
        List<Farm> res = this.farmRepository.findAll();
        if (res.isEmpty()) {
            System.out.println("Zero Farms found");
            return res;
        }
        return res;
    }

    public List<Farm> getFarmsByCity(String city) {
        List<Farm> res = this.farmRepository.findAll();//find all farms by city, not done yet
        if (res.isEmpty()) {
            System.out.println("Zero Farms found");
            return res;
        }
        return res;
    }

    @Transactional
    public Farm getFarmById(String farmId) {
        Optional<Farm> farmOptional = farmRepository.findById(farmId);
        return farmOptional.orElse(null);
    }

    @Transactional
    public Farm addFarm(Farm farm, String email) {
        Optional<UserCredentials> byEmail = userCredentialsRepository.findById(email);
        UserCredentials userCredentials = byEmail.orElseThrow(() -> new IllegalArgumentException("Could not fetch the user"));
        farm.setUserCredentials(userCredentials);
        Farm savedFarm = farmRepository.save(farm);
        return savedFarm;
    }

    public List<Farm> getFarmsByEmail(String email) {
        return farmRepository.getFarmsByEmail(email);
    }

}

