package ru.aleksey.grizly.services;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.aleksey.grizly.models.AppUser;
import ru.aleksey.grizly.repositories.UserRepository;

import java.util.Collections;
@AllArgsConstructor
@Getter
@Setter
@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
    private final UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        AppUser user = userRepository.findUserByEmail(email).orElseThrow(()->new UsernameNotFoundException(""));
        return new User(user.getEmail(), user.getPassword(), Collections.emptyList());
    }
}
