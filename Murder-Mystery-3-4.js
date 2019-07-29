var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;


if (room == "ballroom" && suspect == "Mr. Kalehoff") {
solved = true;
weapon = "poison";
} else if (room == "gallery" && suspect == "Ms. Van Cleve") {
solved = true;
weapon = "trophy";

} else if (room == "billiards room" && suspect == "Mrs. Sparr") {
    solved = true;
weapon = "pool stick";

} else if (room == "dining room" && suspect == "Mr. Parkes") {
    solved = true;
weapon = "knife";

}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} 
