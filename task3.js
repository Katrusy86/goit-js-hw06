import users from './users.js';
('use strict');

const getUsersWithGender = (users, gender) => {
    return users.filter(user => {
        return user.gender === gender;
    })
    .map(user=>user.name);
};

  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]