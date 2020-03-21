import users from './users.js';
('use strict');

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName))
    .map(user=>user.name)
};
console.log(getUsersWithFriend(users, 'Briana Deckerrr')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]