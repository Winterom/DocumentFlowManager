package ru.aleksey.grizly.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
@Data
@Table("app_users")
public class AppUser {
    @Id
    private Long id;
    private String firstName;
    private String middleName;
    private String surname;
    private String email;
    private String password;
    private LocalDateTime credentialExpired;
    private Status status;
    @MappedCollection(idColumn = "user_id")
    private Set<AppRoleRef> roles = new HashSet<>();
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public void addRole(AppRole role){
        roles.add(new AppRoleRef(role.getId()));
    }

}
