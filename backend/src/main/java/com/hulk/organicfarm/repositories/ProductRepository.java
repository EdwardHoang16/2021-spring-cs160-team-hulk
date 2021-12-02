package com.hulk.organicfarm.repositories;

import com.hulk.organicfarm.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID> {
    @Query("SELECT p FROM Product p WHERE p.farm.id = :farm_id")
    List<Product> findProductsByFarmId(@Param("farm_id") String farm_id);
}
