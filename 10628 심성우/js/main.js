const gradeList = document.querySelector('.gradebox');
const yearList = document.querySelector('.yearbox');
const monthList = document.querySelector('.monthbox');
const subjectList = document.querySelector('.subjectbox');

const pdfList = document.querySelector('.mogo-list');

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

function sub_to_str(text) {
    switch (text) {
        case "kor": return "국어"
        case "mat": return "수학"
        case "eng": return "영어"
        case "soc": return "사회"
        case "sci": return "과학"
        case "his": return "한국사"
    }
}

function del_zero(num) {
    switch (num) {
        case "03": return "3"
        case "06": return "6"
        case "09": return "9"
    }
}

function download_file(name) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data/' + name + '.pdf');
    element.setAttribute('download', name + '.pdf');
    element.click();
    // element.remove();  //element 를 삭제해야 하는지 확인 필요
    console.log(element)
}

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
        //안에 요소 초기화
        while (pdfList.firstChild) {
            pdfList.removeChild(pdfList.firstChild);
        }

        //초기화 후 요소 추가
        console.log(nameCode)
        var rightMogo = document.createElement('div');
        rightMogo.className = "pdf-file";
        
        var mogo_button_con = document.createElement('div');
        mogo_button_con.className = "mogo-btn-container";

        var mogo_title = document.createElement('div');
        mogo_title.textContent = yearN + "년 " + del_zero(monthN) + "월 고" + gradeN + " 모의고사 - " + sub_to_str(subjectN) + " 영역"; // 예) 2023년 9월 고1 모의고사 - 국어 영역
        rightMogo.appendChild(mogo_title);
        
        var mogo_open = document.createElement('div');
        mogo_open.textContent = "문제보기";
        mogo_open.className = "mogo-open-btn"; // CSS 클래스 추가 (선택 사항)
        mogo_button_con.appendChild(mogo_open);

        var mogo_download = document.createElement('div');
        mogo_download.textContent = "다운로드";
        mogo_download.className = "mogo-download-btn"; // CSS 클래스 추가 (선택 사항)
        mogo_button_con.appendChild(mogo_download);

        rightMogo.appendChild(mogo_button_con);

        pdfList.appendChild(rightMogo)
    }
})

pdfList.addEventListener('click', (e)=> {
    
    if (e.target.matches('.mogo-open-btn')) {
        window.open('./pdfViewer.html','_blank');
        localStorage.setItem("nameCode", nameCode);
    }

    if (e.target.matches('.mogo-download-btn')) {
        download_file(nameCode);
    }   
})