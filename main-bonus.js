//Collects victim information and then asks if they want to add another

var victimArray = [];

function victims(){
	do {
		var victimName = prompt("What is the Victim's name?");
		var victimNumber = prompt("What is the Victim's phone number?");
		var victimStreet = prompt("What is the Victim's street address?");
		victimArray.push([victimName,victimNumber,victimStreet]);
		var moreVictims = confirm("Would you like to enter another victim?");
	}
	while(moreVictims === true);
};

console.log(victims());

//Asking for number of volunteers and their information

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


var victimInNeed = prompt("What is the name of the victim in need?");

var victimStreet = "";

for(var i=0 ; i<victimArray.length ; i++){

	if(victimArray[i][0] === victimInNeed){
		victimStreet = victimArray[i][2];
		break;
	}

};

var availableVolunteers = [];

for(var i=0 ; i<volunteerArray.length ; i++){
	if(victimStreet === volunteerArray[i]['street']){
		availableVolunteers.push(volunteerArray[i]['name'])
		
	}
}

alert("The following volunteers can be found on the same street as " + victimInNeed + ":\n" + 
	availableVolunteers);


console.log(availableVolunteers);
