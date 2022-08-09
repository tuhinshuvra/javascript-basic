


const age = [21, 23, 34, 25, 19, 28, 27, 12, 55, 23, 16, 37, 27];
function playerTeam(playerAge) {
    if ((playerAge > 12) && (playerAge < 15)) {
        console.log("The person is a under 15 team player");
    }
    else if ((playerAge >= 15) && (playerAge < 18)) {
        console.log("The person is a a under 18 team player");
    }
    else if ((playerAge >= 18) && (playerAge < 21)) {
        console.log("The person is a under 21 team player");
    }
    else if ((playerAge >= 21) && (playerAge < 45)) {
        console.log("The person is a National Team player");
    }
    else {
        console.log("The person age is disqualified");
    }

}
const selectedTeam = playerTeam(11);
// console.log(selectedTeam);
