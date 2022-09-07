package ru.aleksey.grizly.services;


import ru.aleksey.grizly.dto.request.AuthRequestDto;
import ru.aleksey.grizly.dto.response.JwtResponseDto;

public interface UserService {
    JwtResponseDto generateToken(AuthRequestDto dto);
}
