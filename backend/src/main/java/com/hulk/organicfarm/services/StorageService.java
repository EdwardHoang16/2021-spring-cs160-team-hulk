package com.hulk.organicfarm.services;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.core.io.FileSystemResource;

import java.io.File;

import org.springframework.stereotype.Service;

@Service
public class StorageService {

    public final String path;

    public StorageService() {
        path = "/mnt/data/";
    }

    public void store(MultipartFile file) {
        // FIXME should generate file names for each upload

        file.transferTo(new File(path + file.getName()));
    }

    public Resource loadAsResource(String filename) {
        return new FileSystemResource(path + filename);
    }
}
