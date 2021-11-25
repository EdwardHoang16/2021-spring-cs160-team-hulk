package com.hulk.organicfarm.repositories;

import com.hulk.organicfarm.models.Farm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FarmRepository extends JpaRepository<Farm, String> {
//    @Query(value = String.valueOf("Select from Farm where city = %s ;", city))
//    public List<Farm> getFarmsNearACity(String city);
    @Query(value = "SELECT id, farm_name FROM farm WHERE email = :email ;", nativeQuery=true)
    List<Farm> getFarmsByEmail(String email);
}

