CREATE TABLE roles_authorities(
   authority_id BIGINT NOT NULL,
   role_id BIGINT NOT NULL
);
ALTER TABLE roles_authorities ADD CONSTRAINT pk_roles_authorities PRIMARY KEY (authority_id,role_id);
ALTER TABLE roles_authorities ADD CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES app_roles (id);
ALTER TABLE roles_authorities ADD CONSTRAINT fk_auth FOREIGN KEY (authority_id) REFERENCES authorities (id);

