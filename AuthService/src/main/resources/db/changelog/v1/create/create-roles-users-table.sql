CREATE TABLE users_roles(
    user_id BIGINT NOT NULL,
    role_id BIGINT NOT NULL
);
ALTER TABLE users_roles ADD CONSTRAINT pk_users_roles PRIMARY KEY (user_id,role_id);
ALTER TABLE users_roles ADD CONSTRAINT fk_roles_u FOREIGN KEY (role_id) REFERENCES app_roles (id);
ALTER TABLE users_roles ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES app_users (id);

