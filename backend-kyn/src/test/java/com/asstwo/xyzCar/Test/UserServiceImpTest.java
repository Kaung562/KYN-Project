package com.asstwo.xyzCar.Test;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;

import com.asstwo.xyzCar.entity.User;
import com.asstwo.xyzCar.repo.UserRepo;
import com.asstwo.xyzCar.service.UserServiceImp;

public class UserServiceImpTest {

    @Mock
    private UserRepo userRepoMock;

    @InjectMocks
    private UserServiceImp userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testAddUser() {
        // Given
        User user = new User(); // Create a dummy user
        // When
        userService.addUser(user);
        // Then
        verify(userRepoMock, times(1)).save(user); // Verify that save method was called once with the correct user object
    }
}

