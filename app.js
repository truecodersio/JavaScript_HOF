console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus (number){
    return function (plusNumber) {
        return number+plusNumber ; 
    };

}
plus(10);
let add10=plus(10);
let add2=plus(2)
 console.log(add10(100));
 console.log(add2(100));



console.log("EXERCISE 2:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
// console.log(Object.entries(users));
// console.log(Object.keys(users));
// console.log(Object.values(users));
  function logName(user)
  {
    console.log(user.name);
  }

users.forEach(logName);
// inline arroe
// users.forEach((user)=> )
console.log("EXERCISE 3:\n==========\n");
function trimUser(user)
{
    return {
        name:user.name,
        score:user.score,
    };
}
let userScore=users.map(trimUser);
console.log(userScore);

console.log("EXERCISE 4 :\n==========\n");

function active(user){
  return user.isActive===true;
}

let activeUsers=users.filter(active);
console.log(activeUsers);

// let filteredUsers =users.filter((user)=>user.isActive);

console.log("EXERCISE 5:\n==========\n");
function sortDesc(userA,userB)
{
  if (userA.score <userB.score){
    return 1;
  }else {
    return -1;
  }
}
users.sort(sortDesc);
console.log(users);               
console.log("EXERCISE 6:\n==========\n");
function reduceSum(sum, user) {
  return sum + user.score;
}

let sumScores = users.reduce(reduceSum, 0);

console.log(`Avg user score: ${sumScores / users.length}`);
