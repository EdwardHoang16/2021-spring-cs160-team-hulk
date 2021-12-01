package com.hulk.organicfarm.services;

import com.hulk.organicfarm.models.Farm;
import com.hulk.organicfarm.models.Product;
import com.hulk.organicfarm.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class ProductService {
    private ProductRepository productRepository;
    private final FarmService farmService;

    @Autowired
    public ProductService(ProductRepository productRepository, FarmService farmService) {
        this.productRepository = productRepository;
        this.farmService = farmService;
    }

    @Transactional
    public Product addProduct(Product product, String farmId){
        Farm farmById = farmService.getFarmById(farmId);
        if (farmById == null) {
            throw new RuntimeException("Farm id " + farmId + " does not exist. Please try again");
        }
        product.setFarm(farmById);
        return this.productRepository.save(product);
    }


//    public List<Product> getProducts(String farmId){
//        return productRepository.find();
//    }
}
