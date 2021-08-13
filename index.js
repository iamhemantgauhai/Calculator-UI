let num1=12
let num2=34
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
let sumEl=document.getElementById("sum-el")
function add(){
    let result=num1+num2
    sumEl.textContent="Value: "+result
}
function subtract(){
    let result=num1-num2
    sumEl.textContent="Value: "+result
}
function divide(){
    let result=num1/num2
    sumEl.textContent="Value: "+result
}
function multiply(){
    let result=num1*num2
    sumEl.textContent="Value: "+result
}