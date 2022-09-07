package ru.aleksey.grizly.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.HashSet;
import java.util.Set;
@Data
@Table("app_roles")
public class AppRole {
    @Id
    private Long id;
    private String title;
    private String description;
    private Set<AppAuthorityRef> authority = new HashSet<>();
}
