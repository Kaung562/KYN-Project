package com.asstwo.xyzCar.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asstwo.xyzCar.entity.User;

@Repository
public interface UserRepo extends JpaRepository <User, Long>{
	User findByUsername(String username);
  
}
