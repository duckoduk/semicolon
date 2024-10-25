const gradeList = document.querySelector('.gradebox');
const yearList = document.querySelector('.yearbox');
const monthList = document.querySelector('.monthbox');
const subjectList = document.querySelector('.subjectbox');

const searchBtn = document.querySelector('.search');

let gradeN; //몇학년?
let grade; //선택한 박스(->CSS)
let gradeOn; //다른거 눌렀을때 빼기 위해, 기억해놓을 변수 하나 만들기

let yearN; //몇월?
let year; 
let yearOn; 

let monthN; //몇월?
let month; 
let monthOn; 

let subjectN; //무슨과목?
let subject; 
let subjectOn; 

let nameCode;

gradeList.addEventListener('click', (e)=> {

    grade = e.target;
    gradeN = e.target.dataset.grade;
    gradeOn ? gradeOn.style.backgroundColor = "#fff" : '' //gradeOn != null 이면 배경색 초기화
    if (gradeN) { //grade != null 이면
        console.log(gradeN)
        grade.style.backgroundColor = "#888"; //색 바꾸기
        gradeOn = grade; //선택해놓은거 기억하기
        // grade.classList.add();
    }
    

})

yearList.addEventListener('click', (e)=> {

    year = e.target;
    yearN = e.target.dataset.year;
    yearOn ? yearOn.style.backgroundColor = "#fff" : '' //좀 더럽긴 함
    if (yearN) {
        console.log(yearN)
        year.style.backgroundColor = "#888";
        yearOn = year; 
        // grade.classList.add();
    }
    

})

monthList.addEventListener('click', (e)=> {

    month = e.target;
    monthN = e.target.dataset.month;
    monthOn ? monthOn.style.backgroundColor = "#fff" : '' //좀 더럽긴 함
    if (monthN) {
        console.log(monthN)
        month.style.backgroundColor = "#888";
        monthOn = month; 
        // grade.classList.add();
    }
    

})

subjectList.addEventListener('click', (e)=> {

    subject = e.target;
    subjectN = e.target.dataset.subject;
    subjectOn ? subjectOn.style.backgroundColor = "#fff" : '' //좀 더럽긴 함
    if (subjectN) {
        console.log(subjectN)
        subject.style.backgroundColor = "#888";
        subjectOn = subject; 
        // grade.classList.add();
    }
    

})

searchBtn.addEventListener('click', (e)=> {
    nameCode = gradeN + yearN + monthN + subjectN
    if (nameCode.length != 10) {
        alert("모든 옵션을 선택해주세요.")
        return
    }
    else {
        console.log(nameCode)
        window.open('./pdfViewer.html','_blank');

        localStorage.setItem("nameCode",nameCode);
    }
})

