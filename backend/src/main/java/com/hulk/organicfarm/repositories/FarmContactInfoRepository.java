package com.hulk.organicfarm.repositories;

import com.hulk.organicfarm.models.FarmContactInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FarmContactInfoRepository extends JpaRepository<FarmContactInfo, String> {

}

