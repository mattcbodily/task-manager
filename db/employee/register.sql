insert into employees (
    full_name,
    email,
    password,
    admin
) values (
    ${fullName},
    ${email},
    ${password},
    ${isAdmin}
);