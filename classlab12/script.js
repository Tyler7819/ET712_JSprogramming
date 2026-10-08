// get the elements with class name 'description'
// querySelector only selects the first element
let desc = document.querySelector('.description')

// querySelectorAll selects all the elements
let descs = document.querySelectorAll('.description')

// get the element by id 'title'
let title = document.getElementById('title')

// get the elements by a tag name 'li'

let list_item = document.querySelectorAll('li')

// example 1
// select the elements
let shape = document.querySelector(".shape")
let btnsquare = document.querySelector(".btnSquare")
let btnrectangle = document.querySelector(".btnRectangle")
let btncircle = document.querySelector(".btnCircle")

btncircle.addEventListener("click", function(){
    shape.textContent = "circle".toUpperCase()
    shape.className = "circle"
})

btnsquare.addEventListener("click", function(){
    shape.textContent = "square".toUpperCase()
    shape.className = "square"
})

btnrectangle.addEventListener("click", function(){
    shape.textContent = 'rectangle'.toUpperCase()
    shape.className = "rectangle"
})