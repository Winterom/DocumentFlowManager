package ru.aleksey.grizly.services;

import ru.aleksey.grizly.models.AppAuthority;

import java.util.List;

public interface AuthorityService {
    List<AppAuthority> getAuthorityByUserId(Long id);
}
