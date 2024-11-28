let calculation = '';

function addToCalculation(value) {
    calculation += value;
    document.getElementById('calculation').innerText = calculation;
}

function clearDisplay() {
    calculation = '';
    document.getElementById('calculation').innerText = '';
    document.getElementById('result').innerText = '';
}

function calculateResult() {
    try {
        const result = eval(calculation);
        document.getElementById('result').innerText = result;
    } catch (error) {
        document.getElementById('result').innerText = '오류';
    }
}
