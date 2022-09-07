package ru.aleksey.grizly.repositories;



import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ru.aleksey.grizly.models.AppAuthority;

import java.util.List;

@Repository
public interface AuthorityRepository extends CrudRepository<AppAuthority,Long> {
    @Query("SELECT au.id,au.title,au.authority FROM app_users LEFT JOIN users_roles on app_users.id = users_roles.user_id" +
            " LEFT JOIN app_roles on app_roles.id = users_roles.role_id" +
            " LEFT JOIN roles_authorities on app_roles.id = roles_authorities.role_id" +
            " LEFT JOIN authorities as au on au.id = roles_authorities.authority_id where app_users.id= :userId")
    List<AppAuthority> getAuthorityByUserId(@Param("userId")Long userId);
}
