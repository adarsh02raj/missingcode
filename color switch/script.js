const gray = document.getElementById('gray')
let black = document.getElementById('Black')
const blue = document.getElementById('Blue')
const purple = document.getElementById('Purple')


gray.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "gray"
    document.body.style.color = "white"
})

black.addEventListener('click', function (){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
})

blue.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "blue"
    document.body.style.color = "white"
})

purple.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "purple"
    document.body.style.color = "white"
})
