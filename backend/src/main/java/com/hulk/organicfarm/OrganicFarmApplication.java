package com.hulk.organicfarm;

import com.hulk.organicfarm.models.Farm;
import com.hulk.organicfarm.models.UserCredentials;
import com.hulk.organicfarm.repositories.FarmRepository;
import com.hulk.organicfarm.services.UserCredentialsService;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import java.util.UUID;

@SpringBootApplication
public class OrganicFarmApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrganicFarmApplication.class, args);
	}

	@Component
	public class DataLoader implements ApplicationRunner {


		private final UserCredentialsService userCredentialsService;
		private final FarmRepository farmRepository;

		public DataLoader(UserCredentialsService userCredentialsService, FarmRepository farmRepository) {
			this.userCredentialsService = userCredentialsService;
			this.farmRepository = farmRepository;
		}

		public void run(ApplicationArguments args) {
			String email = "terry@yahoo.com";
			UserCredentials newUser = new UserCredentials(email, "12345");
//			userCredentialsService.addNewUserCredentialsRecord(newUser);
//			farmRepository.save(new Farm(UUID.randomUUID().toString(), "My Homestead", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://media.istockphoto.com/photos/summer-view-of-farm-fields-in-rural-baltimore-county-maryland-picture-id1284235717?b=1&k=20&m=1284235717&s=170667a&w=0&h=1b2X8ooDJJtTjnqWW7g41a2jPGap5FKmMQ8lp3F3IEU=", "5285 Snell Ave San Jose, CA 95136", "111-222-3333", newUser));
//			farmRepository.save(new Farm(UUID.randomUUID().toString(), "August Family Farm", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://media.istockphoto.com/photos/whats-that-one-doing-picture-id904559406?b=1&k=20&m=904559406&s=170667a&w=0&h=GgoqMQ4cvsv7sN50dWudqGY5Y7-EUoliKxjDchcYyUM=", "21450 Chona Ct San Jose, CA 95120", "415-222-1414", newUser));
//			farmRepository.save(new Farm(UUID.randomUUID().toString(), "Swanton Berry Farm", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", "25 Swanton Rd Davenport, CA 95017", "408-231-4231", newUser));
		}
	}
}
