/*
	Get the right team:
	---------------------------------------
	You are a technical founder of the best new technology and 
	design company. You need to hire some new team members to
	deal with all the contracts you have been getting.

	You have decided your management team has spent too much
	time dealing with interviewing your applicatants just to
	find out they haven't even taken a BrainStation course and
	therefore don't have the skills needed for the job.

	In order to help out your team, you decided to write an
	awesome JavaScript program that will take in an array
	of applicants and an array of positions. The program will
	then use two functions to find the best applicants for
	your team:

		1. rankApplicants(applicants, positions)
			- Give a person two more attributes. One being 
			  their developer rank and another being their
			  designer rank. For each skill that matches
			  increase their points accordingly.
		2. matchApplicants(applicants)
			- Give each person a new attibute which says either
			  designer or developer to match them to a team.

	NOTE: It may be helpful to write a 3rd function to handle
	the printing of your new ranking program. If you are using
	Sublime Text to write your code, remeber to use debug() 
	instead of console.log() to print your values.
*/
//using a for loop w/in a for loop, arrays, objects, 

//	Write your code here between the lines:
function rankApplicants (applicants, positions) {
// compare a person's skills to the requiredSkills of a dev team
	var applicantList = getApplicants();
	//console.log(applicantList);
	var positionList = getPositions();

	var position = positionList[0]; // Creative Team
	var devPosition = positionList[1]; //Dev Team

	//console.log("Designer Position Requirement: " + position.requiredSkills);
	//console.log("Dev Position Requirement: " + devPosition.requiredSkills);
	

	for (var i = 0; i < applicantList.length; i++) {
		var currApplicant= applicantList[i]
		//console.log("Current Applicant: " + currApplicant.name)

		currApplicant.DesignRank = 0;
		currApplicant.DevRank = 0;
		// console.log(currApplicant.DesignRank);

		for (var j = 0; j < currApplicant.skills.length; j++) {
			var currSkill= currApplicant.skills[j]
				//console.log("current skills: " + currSkill);
		
			for (var k = 0; k < position.requiredSkills.length; k++) {
					if (position.requiredSkills[k] == currSkill) {
						// console.log("match at: " + currSkill)
					currApplicant.DesignRank += 1;
					}
					if (devPosition.requiredSkills[k] == currSkill) {
						// console.log("match at: " + currSkill)
					currApplicant.DevRank +=1;
					}		
			};	

		};
		//console.log("Design Rank: " + currApplicant.DesignRank);
		//console.log("Dev Rank: " + currApplicant.DevRank);
	};
	return applicantList;
};	

// Give each person a new attibute which says either
// designer or developer to match them to a team.
function matchApplicants (rankedApplicants, teams) {

	var devTeam = teams[0];
	var designTeam = teams[1];

	devTeam.applicants = [];
	designTeam.applicants = [];

	for (var i = 0; i < rankedApplicants.length; i++) {
		var currApplicant = rankedApplicants[i]
	
		if (currApplicant.DesignRank > currApplicant.DevRank) {
			designTeam.applicants.push(currApplicant);
		} else  {
			devTeam.applicants.push(currApplicant);
		};
	};

	return teams;
};

var rankedApplicants = rankApplicants();
var matchedApplicants = matchApplicants(rankedApplicants, getPositions());
console.log(matchedApplicants);
//console.log(matchedApplicants[0].applicants[0].skills);
//  ---------------------------------------


// 	Provided Code:
// 	---------------------------------------

// 	Returns an array of person objects.
function getApplicants() {
	var person1 = {
		"name" : "Bill Riley",
		"DOB" : "August 4, 1991",
		"address" : "123 Street Road",
		"skills" : ["HTML", "CSS", "Illustrator", "Published"] 
	};

	var person2 = {
		"name" : "Jess Jillenger",
		"DOB" : "June 21, 1988",
		"address" : "456 Fake Road",
		"skills" : ["HTML", "PhotoShop", "CSS", "Ruby on Rails"]
	};

	var person3 = {
		"name" : "Rebecca Simmons",
		"DOB" : "December 1, 1994",
		"address" : "1324 West Street",
		"skills" : ["HTML", "PhotoShop", "CSS", "JavaScript", "Angular"]
	};

	var person4 = {
		"name" : "Jim Matthews",
		"DOB" : "January 14, 1990",
		"address" : "1324 East Street",
		"skills" : ["HTML", "PhotoShop", "CSS", "Cognitive Psychology", "Published", "UI/UX"]
	};

	var person5 = {
		"name" : "Samantha Monico",
		"DOB" : "February 7, 1990",
		"address" : "1992 Johnson Street",
		"skills" : ["HTML", "CSS", "Cognitive Psychology", "UI/UX", "PhotoShop"]
	};

	var person6 = {
		"name" : "Cindy Liu",
		"DOB" : "May 7, 1979",
		"address" : "18 Marr Road",
		"skills" : ["HTML", "CSS", "Published", "Angular", "JavaScript", "Node"]
	};

	return [person1, person2, person3, person4, person5, person6];
};

//	Returns an array of position objects.
function getPositions() {
	var designTeam = {
		"teamName" : "Creative Team",
		"requiredSkills" : ["PhotoShop", "UI/UX", "Illustrator", "Cognitive Psychology", "Published"]
	};

	var devTeam = {
		"teamName" : "Dev Team",
		"requiredSkills" : ["HTML", "CSS", "JavaScript", "Angular", "Ruby on Rails", "Node"]
	};

	return [designTeam, devTeam];
};