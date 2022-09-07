package ru.aleksey.grizly.models;

import lombok.Data;
import org.springframework.data.relational.core.mapping.Table;
@Data
@Table("roles_authorities")
public class AppAuthorityRef {
    private Long authorityId;
}
