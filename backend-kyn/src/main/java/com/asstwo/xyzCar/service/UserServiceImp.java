package com.asstwo.xyzCar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asstwo.xyzCar.entity.User;
import com.asstwo.xyzCar.repo.UserRepo;

@Service("UserService")
public class UserServiceImp implements UserService{
	
	@Autowired
	UserRepo userrepo;

	@Override
	public void addUser(User us) {
		userrepo.save(us);
		
	}

}
