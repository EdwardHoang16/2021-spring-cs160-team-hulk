package com.hulk.organicfarm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

import com.hulk.organicfarm.services.StorageService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class FileUploadController {

	private final StorageService storageService;
	@Value("${user-images.max-width}")
	private int maxWidth;
	@Value("${user-images.max-height}")
	private int maxHeight;

	@Autowired
	public FileUploadController(StorageService storageService) {
		this.storageService = storageService;
	}

	@GetMapping("/user_images/{filename:.+}")
	public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
		Resource file = storageService.loadAsResource(filename);
		if (file == null)
			return new ResponseEntity <Resource> (HttpStatus.NOT_FOUND);
		return ResponseEntity.ok().header("Content-Type", "image/jpeg").body(file);
	}

	@PostMapping("/user_images/")
	public ResponseEntity <Map <String, String>> handleFileUpload(@RequestParam("file") MultipartFile file) {

		String filename = storageService.store(file, maxWidth, maxHeight);
		HashMap <String, String> result = new HashMap <String, String> ();
		result.put("filename", filename);
		return new ResponseEntity <Map <String, String>> (result, HttpStatus.OK);
	}
}
