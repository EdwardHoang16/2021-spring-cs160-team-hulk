package com.hulk.organicfarm;

import com.hulk.organicfarm.models.UserCredentials;
import com.hulk.organicfarm.repositories.UserCredentialsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class OrganicFarmApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrganicFarmApplication.class, args);
	}

}
