//  SHOW SECTIONS
function showSection(id){
    var sections=document.getElementsByClassName("page-section");
    for(var i=0;i<sections.length;i++){sections[i].classList.remove("active");}
    document.getElementById(id).classList.add("active");
}

//  MENU 
function Menu(){
    var nav=document.querySelector(".nav-links");
    nav.style.display=(nav.style.display==="flex")?"none":"flex";
}

//  LOGIN 
function loginUser(){
    var type=document.getElementById("userType").value;
    var pass=document.getElementById("loginPassword").value;
    if(type==="student" && pass==="student123"){showSection("studentDashboard");}
    else if(type==="teacher" && pass==="teacher123"){showSection("teacherDashboard");}
    else if(type==="rep" && pass==="rep123"){showSection("repDashboard");}
    else{alert("Invalid login details");}
}

// GRADES PASSWORD 
function requestGradePassword(){
    var pass=prompt("Enter grade password:");
    alert((pass==="grade123")?"Grades loaded ":"Wrong password");
}

// STUDENT ATTENDANCE 
function saveAttendance(){alert("Student attendance saved ");}

//  TEACHER ATTENDANCE 
function saveTeacherAttendance(){alert("Teacher attendance saved ");}

//  FEEDBACK 
function submitFeedback(){alert("Thank you for your feedback.");}

//  LOAD COURSES 
function showCourses(dept){
    var list=document.getElementById("courseList");
    var courses={
        cs:["Intro to Programming","Software Engineering","Data Structures"],
        accounting:["Financial Accounting","Cost Accounting"],
        economics:["Microeconomics","Macroeconomics"],
        tourism:["Tourism Management","Travel Operations"],
        hospitality:["Hotel Management","Customer Service"]
    };
    var html="<h3>Courses:</h3><ul>";
    for(var i=0;i<courses[dept].length;i++){html+="<li>"+courses[dept][i]+"</li>";}
    html+="</ul>"; list.innerHTML=html;
}

//  LOAD TEACHERS FOR REP 
function loadTeachers(){
    var dept=document.getElementById("repDept").value;
    var teachers={
        cs:["Programming Instructor","Software Instructor","IP Instructor"],
        accounting:["Financial Instructor","Cost Instructor"],
        economics:["Micro Instructor","Macro Instructor"],
        tourism:["Tourism Instructor","Travel Instructor"],
        hospitality:["Hotel Instructor","Customer Service Instructor"]
    };
    var container=document.getElementById("repTeachers"); container.innerHTML="";
    if(dept && teachers[dept]){
        for(var i=0;i<teachers[dept].length;i++){
            var label=document.createElement("label");
            label.innerHTML='<input type="checkbox"> '+teachers[dept][i];
            container.appendChild(label);
        }
    }
}

//  LOAD TEACHERS FOR FEEDBACK 
function loadDeptTeachers(){
    var dept=document.getElementById("feedbackDept").value;
    var feedbackTeachers={
        cs:["Programming Instructor","Software Instructor","IP Instructor"],
        accounting:["Financial Instructor","Cost Instructor"],
        economics:["Micro Instructor","Macro Instructor"],
        tourism:["Tourism Instructor","Travel Instructor"],
        hospitality:["Hotel Instructor","Customer Service Instructor"]
    };
   var select=document.getElementById("feedbackTeacher");
    select.innerHTML='<option value="">Select Teacher</option>';
    if(dept && feedbackTeachers[dept]){
        for(var i=0;i<feedbackTeachers[dept].length;i++){
            var option=document.createElement("option");
            option.value=feedbackTeachers[dept][i]; 
           option.textContent=feedbackTeachers[dept][i];
            select.appendChild(option);
        }
    }
}

//  ATTACH EVENT LISTENERS

// Header navigationvar 
navItems=["Home","Departments","About","Feedback","Login"];
var sectionIds=["home","departments","about","feedback","login"];
for(var i=0;i<navItems.length;i++){
    document.getElementById("nav"+navItems[i]).addEventListener("click",(function(index){
        return function(){showSection(sectionIds[index]);};
    })(i));
}

// Hamburger
document.getElementById("hamburger").addEventListener("click",Menu);

// Login
document.getElementById("loginBtn").addEventListener("click",loginUser);

// Student dashboard
document.getElementById("viewAttendanceBtn").addEventListener("click",function(){showSection("studentAttendance");});
document.getElementById("viewGradesBtn").addEventListener("click",requestGradePassword);

// Teacher dashboard
document.getElementById("markAttendanceBtn").addEventListener("click",function(){showSection("markStudentAttendance");});

// Rep dashboard
document.getElementById("markTeacherBtn").addEventListener("click",function(){showSection("teacherAttendance");});

// Attendance save
document.getElementById("saveAttendanceBtn").addEventListener("click",saveAttendance);
document.getElementById("saveTeacherAttendanceBtn").addEventListener("click",saveTeacherAttendance);

// Feedback submit
document.getElementById("submitFeedbackBtn").addEventListener("click",submitFeedback);

// Department cards
var depts=["CS","Accounting","Economics","Tourism","Hospitality"];
var deptIds=["cs","accounting","economics","tourism","hospitality"];
for(var i=0;i<depts.length;i++){
    document.getElementById("dept"+depts[i]).addEventListener("click",(function(index){
        return function(){showCourses(deptIds[index]);};
    })(i));
}

// REP & Feedback dropdowns
document.getElementById("repDept").addEventListener("change",loadTeachers);
document.getElementById("feedbackDept").addEventListener("change",loadDeptTeachers);