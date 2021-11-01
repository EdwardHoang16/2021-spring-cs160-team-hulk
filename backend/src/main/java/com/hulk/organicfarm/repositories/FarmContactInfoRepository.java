package com.hulk.organicfarm.repositories;

import com.hulk.organicfarm.models.FarmContactInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FarmContactInfoRepository extends JpaRepository<FarmContactInfo, String> {

}

