//Define 10 students JSON
//Store it in Array
let student = [
{regno:'01', name:'James', gender:'Male', gpa:3.8, course:'IT'},
{regno:'02', name:'Rosy', gender:'Female', gpa:3.2, course:'Stat'},
{regno:'03', name:'Kumar', gender:'Male', gpa:3.6, course:'Maths'},
{regno:'04', name:'Alice', gender:'Female', gpa:3.4, course:'IT'},
{regno:'05', name:'Luuna', gender:'Female', gpa:3.9, course:'IT'},
{regno:'06', name:'Jack', gender:'Male', gpa:3.1, course:'CS'},
{regno:'07', name:'Emma', gender:'Female', gpa:3.7, course:'CS'},
{regno:'08', name:'Paul', gender:'Male', gpa:3.0, course:'IT'},
{regno:'09', name:'David', gender:'Male', gpa:3.5, course:'Maths'},
{regno:'10', name:'Ravi', gender:'Male', gpa:3.3, course:'IT'}
]
console.log(student)

//Find the female students
let Female = []
for(let i = 0; i < student.length; i++){
	if(student[i].gender == "Female"){
		Female.push(student[i])
	}
}
console.log("Female students: ", Female)

//Find the students who are following IT course
let Course = []
for(let i = 0; i < student.length; i++){
	if(student[i].course == "IT"){
		Course.push(student[i])
	}
}
console.log("Course: ", Course)

//Find the Max and average GPA among the students

let totalGPA = 0;
let maxGPA = student[0].gpa;

for (let k=0;k<student.length;k++) {
    totalGPA += student[k].gpa;
    if (student[k].gpa>maxGPA) {
        maxGPA = student[k].gpa;
    }
}

let avgGPA = totalGPA / student.length;
console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));
