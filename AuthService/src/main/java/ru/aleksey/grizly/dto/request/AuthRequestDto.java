package ru.aleksey.grizly.dto.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
@Data
public class AuthRequestDto {
    @Email
    private String email;
    @NotBlank
    private String password;

}
