package com.hulk.organicfarm.controllers;

//import com.hulk.organicfarm.models.FarmContactInfo;
//import com.hulk.organicfarm.services.FarmContactInfoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;

//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("/api")
//public class FarmContactInfoController {

//    private FarmContactInfoService farmContactInfoService;
//
//    @Autowired
//    public FarmContactInfoController(FarmContactInfoService farmContactInfoService) {
//        this.farmContactInfoService = farmContactInfoService;
//    }
//
//    @PostMapping("/farmContactInfos")
//    public void addFarmContactInfo(@RequestBody FarmContactInfo farmContactInfo){
//        System.out.println(farmContactInfo);
//        farmContactInfoService.addFarmContactInfo(farmContactInfo);
//    }
//
//    @GetMapping("/farmContactInfos")
//    public List<FarmContactInfo> addFarmContactInfo(){
//        return farmContactInfoService.getFarmContactInfo();
//    }
//}
