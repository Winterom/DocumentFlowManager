package ru.aleksey.grizly.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.aleksey.grizly.models.AppAuthority;
import ru.aleksey.grizly.repositories.AuthorityRepository;

import java.util.List;


@Service
@AllArgsConstructor
public class AuthorityServiceImpl implements AuthorityService{
    private final AuthorityRepository authorityRepository;
    @Override
    public List<AppAuthority> getAuthorityByUserId(Long id) {
        return authorityRepository.getAuthorityByUserId(id);
    }
}
