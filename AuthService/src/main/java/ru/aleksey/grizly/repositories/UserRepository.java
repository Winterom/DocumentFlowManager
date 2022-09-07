package ru.aleksey.grizly.repositories;



import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.aleksey.grizly.models.AppUser;

import java.util.Optional;


@Repository
public interface UserRepository extends CrudRepository<AppUser,Long> {
    @Query("SELECT * from app_users where email = :email;")
    Optional<AppUser> findUserByEmail(@Param("email") String email);
}
