package ru.aleksey.grizly.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.aleksey.grizly.models.AppRole;

@Repository
public interface RoleRepository extends CrudRepository<AppRole,Long> {
}
