package com.asstwo.xyzCar.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class User {
       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
	   private Long id;

	    @Column(unique = true)
	    @Size(max=20,min=8,message="Username should be between 8 to 20 characters")
	    private String username;
	    @Size(max=20,min=8,message="Password should be between 8 to 20 characters")
	    private String password;
	    private String role;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getRole() {
			return role;
		}
		public void setRole(String role) {
			this.role = role;
		}
	    
	    
}
