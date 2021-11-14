package com.hulk.organicfarm.controllers;

import com.hulk.organicfarm.models.Farm;
import com.hulk.organicfarm.models.Product;
import com.hulk.organicfarm.services.FarmService;
import com.hulk.organicfarm.services.ProductService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/farms")
public class ProductController {
    private final ProductService productService;


    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/{farmId}/products")
    public Product addProducts(@NonNull @RequestBody Product product, @PathVariable String farmId){
        return productService.addProduct(product, farmId);
    }
}
