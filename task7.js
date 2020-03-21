import users from './users.js';
('use strict');

const calculateTotalBalance = users => {
    return users.reduce((accum,user)=>{
        return accum += user.balance;
    },0);
};

console.log(calculateTotalBalance(users)); // 20916