const pdfBox = document.querySelector('.pdf-box')

let nameCode;
let myWidth = screen.width * 0.99;
let myHeight = screen.height;

init();

function init() {

    nameCode = localStorage.getItem('nameCode');
    console.log(myWidth, myHeight)
    pdfBox.innerHTML = `<embed src="data/${nameCode}.pdf" width="${myWidth}", height="${myHeight}">`
}