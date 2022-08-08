



const country = "Bangladesh";
const age = 36;
const independent = true;
const student = { id: 121, class: 12, name: "Arjun" };
const friendsAge = [23, 34, 32, 41, 25, 29, 27];
const friendsName = ["Sachin", "Dheman", "Rahul", "Peyus"];
const newFriendsName = ["Rashid", "Babor", "Akram", "Babul"];
// console.log(typeof country);
// console.log(typeof student);
// const typeOfFriends = Array.isArray(friends);
// console.log(typeOfFriends);
// console.log(friendsName.includes("Sachin"));
// console.log(friendsName.indexOf("Shuvra"));
// if (friendsName.indexOf("Shuvra") !== -1) {
//     console.log("He is Working not at home now.");
// } else {
//     console.log("He at home now.");
// }
const conArray = friendsName.concat(newFriendsName);
console.log(conArray);