package com.hulk.organicfarm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import com.hulk.organicfarm.services.StorageService;

@Controller
public class FileUploadController {

	private final StorageService storageService;

	@Autowired
	public FileUploadController(StorageService storageService) {
		this.storageService = storageService;
	}

	@GetMapping("/user_images/{filename:.+}")
	@ResponseBody
	public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
		Resource file = storageService.loadAsResource(filename);
		if (file == null)
			return new ResponseEntity <Resource> (HttpStatus.NOT_FOUND);
		return ResponseEntity.ok().header("Content-Type", "image/jpeg").body(file);
	}

	@PostMapping("/user_images/")
	@ResponseBody
	public ResponseEntity <Map <String, String>> handleFileUpload(@RequestParam("file") MultipartFile file) {

		String filename = storageService.store(file, 320, 320);
		HashMap <String, String> result = new HashMap <String, String> ();
		result.put("filename", filename);
		return new ResponseEntity <Map <String, String>> (result, HttpStatus.OK);
	}
}
