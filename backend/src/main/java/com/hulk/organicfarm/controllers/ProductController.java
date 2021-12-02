package com.hulk.organicfarm.controllers;

import com.hulk.organicfarm.models.Product;
import com.hulk.organicfarm.services.ProductService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // Add a product to a specific farm
    @PostMapping("/farms/{farmId}/products")
    public ResponseEntity<Product> addProducts(@NonNull @RequestBody Product product, @PathVariable String farmId){

        Product createdProduct = productService.addProduct(product, farmId);
        if(createdProduct == null){
            throw new RuntimeException("farm id not found!!!");
        }
        return ResponseEntity.ok(createdProduct);   
    }

    // Fetch all products
    @GetMapping("/products")
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    // Fetch products of a specific farm
    @GetMapping("/farms/{farmId}/products")
    public List<Product> getProductsByFarmId(@PathVariable String farmId) {
        return productService.getProductsByFarmId(farmId);
    }
}
