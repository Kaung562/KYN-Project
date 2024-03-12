package com.asstwo.xyzCar.Test;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

import com.asstwo.xyzCar.entity.User;
import com.asstwo.xyzCar.service.UserService;

public class UserServiceTest {

    @Test
    public void testAddUser() {
        // Create a mock implementation of UserService
        UserService userService = mock(UserService.class);

        // Create a user object to add
        User user = new User();
        user.setId(1L);
        user.setUsername("testUsername");
        user.setPassword("testPassword");
        user.setRole("testRole");

        // Call the addUser method on the mock UserService
        userService.addUser(user);

        // Verify that the addUser method was called with the correct user object
        verify(userService, times(1)).addUser(user);
    }
}
