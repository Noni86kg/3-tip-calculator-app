const bill = document.querySelector(".bill");
const numOfPeople = document.querySelector(".num-of-people");
const btnGreen = document.querySelectorAll(".btn-green");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const restartBtn = document.querySelector(".btn-darkGreen");
const custom = document.querySelector(".btn-gray");
const hidenMess1 = document.querySelector(".mess1");
const hidenMess2 = document.querySelector(".mess2");

custom.addEventListener("click", function() {
    custom.addEventListener('keydown', (event) => {
        if ( event.key === "Enter") {
            const percent = custom.value ;
            calc(percent)
        }
    })
  })

btnGreen.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        const percent = e.target.value;
        calc(percent)
        e.target.style.background = "var(--strongCyan)"; 
        e.target.style.color = "var(--veryDarkCyan)"; 
    })
})

restartBtn.addEventListener('click', function() {
    tipAmount.textContent = `$ 0.00`;
    total.textContent = `$ 0.00`;
    bill.value = "";
    numOfPeople.value = "";
    custom.value = "";
    hidenMess2.classList.remove("active")
    hidenMess1.classList.remove("active")
    restartBtn.style.background = "rgb(13, 104, 109)"; 
    btnGreen.forEach((btn) => {
        btn.style.background = "var(--veryDarkCyan)"; 
        btn.style.color = "var(--white)"; 
    })
})

function calc(percent) {

    if (bill.value === "0" || bill.value === "") {
        hidenMess1.classList.add("active")
    } 
    if (numOfPeople.value === "0" || numOfPeople.value === "") {
        hidenMess2.classList.add("active")
    } else {
        btnGreen.forEach((btn) => {
            btn.style.background = "var(--veryDarkCyan)"; 
            btn.style.color = "var(--white)"; 
        })
        hidenMess2.classList.remove("active")
        hidenMess1.classList.remove("active")
        const tipPerPerson = bill.value/100  * percent / numOfPeople.value;
        const totalPerPerson =  bill.value / numOfPeople.value +tipPerPerson;
        const tipPerPersonFix = tipPerPerson.toFixed(2);
        const totalPerPersonFix = totalPerPerson.toFixed(2);
    
        tipAmount.textContent = `$ ${tipPerPersonFix}`
        total.textContent = `$ ${totalPerPersonFix}`
        restartBtn.style.background = "var(--strongCyan)"; 
    }
} 