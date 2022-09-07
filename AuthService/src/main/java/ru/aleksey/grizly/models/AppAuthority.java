package ru.aleksey.grizly.models;

import authorities.Authority;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.security.core.GrantedAuthority;
@Data
@Table("authorities")
public class AppAuthority implements GrantedAuthority {
    @Id
    private Long id;
    private String title;
    private String description;
    private Authority authority;
    @Override
    public String getAuthority() {
        return this.authority.name();
    }
}
