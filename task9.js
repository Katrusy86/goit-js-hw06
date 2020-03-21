import users from './users.js';
('use strict');


const getNamesSortedByFriendsCount = users => {
    return users.sort((friendsA,friendsB) => {
    return friendsA.lenght - friendsB.lenght;
    })
    .map(user=>user.name)
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]