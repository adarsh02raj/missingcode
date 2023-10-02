const resDOM = document.querySelector('.Result')
const btnDOM = document.querySelector('.btn')

btnDOM.addEventListener('click', ()=>{
        const randomNumber = rollDice();
        resDOM.textContent = `Result : ${randomNumber}`
})

function rollDice(){
    const randomNumber = (Math.floor(Math.random() * 6))+1;
    return randomNumber;
}

