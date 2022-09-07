package ru.aleksey.grizly.controllers;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ru.aleksey.grizly.dto.request.AuthRequestDto;
import ru.aleksey.grizly.dto.response.JwtResponseDto;
import ru.aleksey.grizly.services.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("api/v1/auth")
@AllArgsConstructor
@Slf4j
public class AuthController {
    private final UserService userService;

    @PostMapping("/login")
    public JwtResponseDto createAuthToken(@Valid @RequestBody AuthRequestDto authRequestDto) {
        System.out.println("Запрос авторизации "+authRequestDto.getEmail());
        return userService.generateToken(authRequestDto);
    }
}

