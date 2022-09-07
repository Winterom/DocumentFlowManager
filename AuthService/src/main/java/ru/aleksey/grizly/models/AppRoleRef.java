package ru.aleksey.grizly.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.relational.core.mapping.Table;
@Data
@AllArgsConstructor
@Table("users_roles")
public class AppRoleRef {
    private Long roleId;
}
