package com.asstwo.xyzCar.Test;

import static org.junit.jupiter.api.Assertions.*;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;

import com.asstwo.xyzCar.entity.User;

@SpringJUnitConfig
@DataJpaTest
@Transactional // Ensure transactions are properly managed
public class UserTest {

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    public void testUserEntityMapping() {
        // Given
        User user = new User();
        user.setUsername("testUsername");
        user.setPassword("testPassword");
        user.setRole("testRole");

    
        entityManager.flush(); // Flush changes to the database
        assertEquals("testUsername", user.getUsername(), "Username should be set correctly");
        assertEquals("testPassword", user.getPassword(), "Password should be set correctly");
        assertEquals("testRole", user.getRole(), "Role should be set correctly");
    }
}
