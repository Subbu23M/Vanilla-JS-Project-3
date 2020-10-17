// Array name hexColors

const hexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
console.log(typeof(hexColors));
console.log(hexColors.length);

const span = document.querySelector('.span-color');

const btn = document.getElementById('btn');

// Event Listener

// Ananymous function
btn.addEventListener('click',function(){
    let hexColor = '#';
    for(let i = 0;i<6;i++){

        
        // Callback function

        // hexColor += hexColors[getRandomColor()]
        hexColor = hexColor + hexColors[getRandomColor()];
        
        console.log(hexColor);
    }
    span.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// Ananymous function
function getRandomColor(){
    return Math.floor((Math.random() * hexColors.length));
}