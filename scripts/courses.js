const courses = [
        {
        "type": "WDD",
        "code": 130,
        "Name" : "Web-Fundamentals",
        "Completed" : true
        },
        {
        "type": "WDD",
        "code": 131,
        "Name" : "Dynamic-Web-Fundamentals",
        "Completed" : true
        },
        {
        "type": "WDD",
        "code": 231,
        "Name" : "Web Frontend Development",
        "Completed" : false
        },
        {
        "type": "CSE",
        "code": 111,
        "Name" : "Programming with Functions",
        "Completed" : true
        },
        {
        "type": "CSE",
        "code": 210,
        "Name" : "Programming with Classes",
        "Completed" : true
        },
        {
        "type": "CSE",
        "code": 110,
        "Name" : "Introduction to Programming",
        "Completed" : true
        }
    ]
   
const coursesContainer = document.querySelector('.courses');
const allButton = document.querySelector(".all-button");
const cseButton = document.querySelector(".cse-button");
const wddButton = document.querySelector(".wdd-button");
const creditsMessage = document.querySelector(".credits-indicator")
let credits;

function getCourses(coursesArray) {
    coursesArray.forEach(course => {
        const courseBox = document.createElement("div");
        courseBox.textContent = `${course.type}-${course.code}`;
        coursesContainer.appendChild(courseBox)
        credits+= 2;
    });
    showCredits();
}

function showCredits() {
    creditsMessage.textContent = `The numer of credits listed above is ${credits}`;
}

function clearCourses() {
    coursesContainer.innerHTML = "";
    credits = 0;
}

function getAllCourses(coursesArray) {
    clearCourses();
    getCourses(coursesArray);
}

function GetCSECourses(coursesArray) {
    clearCourses();
    let newArray = coursesArray.filter(courses => courses.type === "CSE");
    getCourses(newArray);
}

function GetWDDCourses(coursesArray) {
    clearCourses();
    let newArray = coursesArray.filter(courses => courses.type === "WDD");
    getCourses(newArray);
}

allButton.addEventListener("click", () => getAllCourses(courses));
cseButton.addEventListener("click", () => GetCSECourses(courses));
wddButton.addEventListener("click", () => 
GetWDDCourses(courses));
document.addEventListener("DOMContentLoaded", () =>{
    getAllCourses(courses)
})