package com.hulk.organicfarm.repositories;

import com.hulk.organicfarm.models.UserCredentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserCredentialsRepository extends JpaRepository<UserCredentials,String> {

}
