package com.asstwo.xyzCar.Test;

import com.asstwo.xyzCar.entity.User;
import org.junit.jupiter.api.Test;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;
import java.lang.reflect.Field;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class UserEntityTest {

    @Test
    public void testEntityAnnotations() {
        Class<?> clazz = User.class;

        // Test @Entity annotation
        assertTrue(clazz.isAnnotationPresent(Entity.class), "@Entity annotation is missing");

        // Test @Id annotation
        Field idField = getFieldByName(clazz, "id");
        assertTrue(idField.isAnnotationPresent(Id.class), "@Id annotation is missing");
        assertTrue(idField.isAnnotationPresent(GeneratedValue.class), "@GeneratedValue annotation is missing");
        assertEquals(GenerationType.IDENTITY, idField.getAnnotation(GeneratedValue.class).strategy(), "@GeneratedValue strategy should be IDENTITY");

        // Test @Column annotation
        Field usernameField = getFieldByName(clazz, "username");
        assertTrue(usernameField.isAnnotationPresent(Column.class), "@Column annotation is missing on field username");
        assertTrue(usernameField.getAnnotation(Column.class).unique(), "@Column(unique=true) annotation is missing on field username");

        // Test @Size annotations
        assertFieldSizeAnnotation(clazz, "username", 8, 20);
        assertFieldSizeAnnotation(clazz, "password", 8, 20);
    }

    private Field getFieldByName(Class<?> clazz, String fieldName) {
        try {
            return clazz.getDeclaredField(fieldName);
        } catch (NoSuchFieldException e) {
            throw new IllegalArgumentException("Field " + fieldName + " not found in class " + clazz.getSimpleName());
        }
    }

    private void assertFieldSizeAnnotation(Class<?> clazz, String fieldName, int min, int max) {
        Field field = getFieldByName(clazz, fieldName);
        assertTrue(field.isAnnotationPresent(Size.class), "@Size annotation is missing on field " + fieldName);
        assertEquals(min, field.getAnnotation(Size.class).min(), "Minimum size does not match for field " + fieldName);
        assertEquals(max, field.getAnnotation(Size.class).max(), "Maximum size does not match for field " + fieldName);
    }
}

