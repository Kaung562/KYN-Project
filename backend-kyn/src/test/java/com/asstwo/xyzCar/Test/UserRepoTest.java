package com.asstwo.xyzCar.Test;

import com.asstwo.xyzCar.entity.User;
import com.asstwo.xyzCar.repo.UserRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class UserRepoTest {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testUserRepoIsCorrectlyConfigured() {
        // Verify that the UserRepo interface is properly configured and available
        assertThat(userRepo).isNotNull();

        // Verify that the repository can save and retrieve entities
        User user = new User();
        user.setUsername("testuser");
        user.setPassword("testpassword");
        user.setRole("ROLE_USER");
        entityManager.persistAndFlush(user);

        User foundUser = userRepo.findByUsername("testuser");

        assertThat(foundUser).isNotNull();
        assertThat(foundUser.getUsername()).isEqualTo("testuser");
    }
}


