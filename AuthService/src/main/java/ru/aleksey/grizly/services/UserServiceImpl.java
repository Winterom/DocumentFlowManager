package ru.aleksey.grizly.services;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.aleksey.grizly.dto.request.AuthRequestDto;
import ru.aleksey.grizly.dto.response.JwtResponseDto;
import ru.aleksey.grizly.models.AppAuthority;
import ru.aleksey.grizly.models.AppUser;
import ru.aleksey.grizly.repositories.UserRepository;
import ru.aleksey.grizly.utils.JwtTokenUtil;

import java.util.List;


@AllArgsConstructor
@Getter
@Setter
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final AuthorityService authorityService;
    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authenticationManager;

    @Override
    public JwtResponseDto generateToken(AuthRequestDto dto) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(dto.getEmail(),dto.getPassword()));
        AppUser user = userRepository.findUserByEmail(dto.getEmail()).orElseThrow(()->new UsernameNotFoundException("Неверный email"));
        List<AppAuthority> authorities = authorityService.getAuthorityByUserId(user.getId());
        System.out.println(authorities);
        User userDetails = new User(user.getEmail(), user.getPassword(), authorities);
        return new JwtResponseDto(jwtTokenUtil.generateToken(userDetails));
    }


}
