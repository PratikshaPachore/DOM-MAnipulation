function add() {
    let num1,num2,resultadd; 
    num1 = document.querySelector('.num1').value;
    num2 = document.querySelector('.num2').value;
    resultadd = parseInt(num1) + parseInt(num2);
    document.querySelector('.resultadd').innerHTML = resultadd;

}
function sub() {
    let num1,num2,resultsub; 
    num1 = document.querySelector('.num3').value;
    num2 = document.querySelector('.num4').value;
    resultsub = parseInt(num1) - parseInt(num2);
    document.querySelector('.resultsub').innerHTML = resultsub;

}
function mul() {
    let num1,num2,resultmul; 
    num1 = document.querySelector('.num5').value;
    num2 = document.querySelector('.num6').value;
    resultmul = parseInt(num1) * parseInt(num2);
    document.querySelector('.resultmul').innerHTML = resultmul;

}
function divi() {
    let num1,num2,resultdivi; 
    num1 = document.querySelector('.num7').value;
    num2 = document.querySelector('.num8').value;
    resultdivi = parseInt(num1) / parseInt(num2);
    document.querySelector('.resultdivi').innerHTML = resultdivi;

}
