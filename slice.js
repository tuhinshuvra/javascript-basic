



// const student = { id: 121, class: 12, name: "Arjun" };
// const friendsAge = [23, 34, 32, 41, 25, 29, 27];
// const friendsName = ["Sachin", , "Shourav", "Dheman", "Rahul", "Dheman", "Peyus", "Shourav", "Rahul", "Dheman", "Peyus",];
// const newFriendsName = ["Rashid", "Babor", "Akram", "Babul", "Shahid"];
// const newName = friendsName.slice(2, 5);
// const newSplice = friendsName.splice(2, 5, "Bahadur", "Bikram");
// console.log(newSplice);
// console.log(friendsName);

const friendsName = ["Sachin", "Shourav", "Dheman", "Rahul", "Dheman", "Peyus", "Shourav", "Rahul", "Dheman", "Peyus"];
function removeDuplicate(friendsName) {
    const unique = [];
    for (let i = 0; i < friendsName.length; i++) {
        const name = friendsName[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueName = removeDuplicate(friendsName);
console.log(uniqueName);
