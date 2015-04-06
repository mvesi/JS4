var numVictims = prompt("How many disaster victims would you like to declare?");

var victimArray = [];

for (var i=0 ; i<numVictims ; i++){
	var victimName = prompt("Victim " + (i+1) + "'s Name?");
	var victimNumber = prompt("Victim " + (i+1) + "'s  Phone Number?");
	var victimStreet = prompt("Victim " + (i+1) + "'s  Street?");

	victimArray.push([victimName,victimNumber,victimStreet]);

}

console.log(victimArray);

var numVolunteers = prompt("How many disaster volunteers would you like to declare?");

var volunteerArray = [];

for (var i=0 ; i<numVolunteers ; i++){
	var volunteerName = prompt("Volunteer " + (i+1) + "'s Name?");
	var volunteerNumber = prompt("Volunteer " + (i+1) + "'s  Phone Number?");
	var volunteerStreet = prompt("Volunteer " + (i+1) + "'s  Street?");

	volunteerArray.push({
		name: volunteerName,
		number: volunteerNumber,
		street: volunteerStreet
		});
}

console.log(volunteerArray);

var tempVictimNames = [];
for(var i=0 ; i<victimArray.length ; i++){
	tempVictimNames.push(victimArray[i][0]);
}

var tempVolunteerNames = [];
for(var i=0 ; i<volunteerArray.length ; i++){
	tempVolunteerNames.push(volunteerArray[i].name);
}



alert("There are " + victimArray.length + " disaster victims and " + volunteerArray.length + " volunteers.\nVictims: " + tempVictimNames + "\nVolunteers: " + tempVolunteerNames);


// [prompt("Victim " + i + "'s Name?"), prompt("Victim " + i + "'s  Phone Number?"), prompt("Victim " + i + "'s  Street?")];


	// victimArray[i].name = prompt("Victim " + Number(i)+1 + "'s Name?");
	// victimArray[i].phoneNumber = prompt("Victim " + Number(i)+1 + "'s  Phone Number?");
	// victimArray[i].street = prompt("Victim " + Number(i)+1 + "'s  Street?");


	// victimName: "",
	// phoneNumber: "",
	// street: ""

	// victimArray[i].victimName = victimName;
	// victimArray[i].phoneNumber = victimNumber;
	// victimArray[i].street = victimStreet;