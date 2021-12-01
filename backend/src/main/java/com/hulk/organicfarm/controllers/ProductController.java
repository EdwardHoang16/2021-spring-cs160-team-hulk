package com.hulk.organicfarm.controllers;

import com.hulk.organicfarm.models.Product;
import com.hulk.organicfarm.services.ProductService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Product> addProducts(@NonNull @RequestBody Product product, @PathVariable String farmId){

        Product createdProduct = productService.addProduct(product, farmId);
        if(createdProduct == null){
            throw new RuntimeException("farm id not found!!!");
        }
        return ResponseEntity.ok(createdProduct);
    }

//    @GetMapping("/{farmId}/products")
//    public List<Product> getProducts(@PathVariable String farmId) {
//        return productService.getProducts(farmId);
//    }
}
