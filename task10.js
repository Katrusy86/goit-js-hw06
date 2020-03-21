import users from './users.js';
('use strict');

const getSortedUniqueSkills = users=> {
    return users.reduce((accum, user) => {
        accum.push(...user.skills);
        return accum
    },[])
    .filter((currentUser, index, array) => array.indexOf(currentUser) === index)
    .sort()

}

console.log(getSortedUniqueSkills(users))
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]