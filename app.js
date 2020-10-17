// Array name colors

const colors = ['green','red','rgba(133,122,200)','#F15025','teal'];
console.log(typeof(colors));
console.log(colors.length);

const span = document.querySelector('.span-color')

const btn = document.getElementById('btn');

// Event Listener
// Ananymous function

btn.addEventListener('click',function(){

    // Callback function
    const randomNumber =getRandomColor();
    
    console.log(randomNumber);
    
    span.textContent = colors[randomNumber];

    document.body.style.backgroundColor = colors[randomNumber]
});

// Ananymous function
function getRandomColor(){
    return Math.floor((Math.random() * colors.length));
}