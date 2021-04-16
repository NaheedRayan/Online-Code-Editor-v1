// for rescaling the divs

var line1 = document.querySelector(".line1")

var options_menu = document.getElementById("options_menu")
var editor = document.getElementById("editor")
var stdin_area = document.getElementById("stdin_area")

// for identifying mouse drag
var isDragging = false;


// for reference position
var oldx = 0;
var oldy = 0;

var rounded_value = 0;

// for getting the top value of line1 in percentage
rounded_value = Math.round(getComputedStyle(line1).top.replace('px','') / getComputedStyle(line1.parentElement).height.replace('px','') * 100 );

console.log(rounded_value);


line1.addEventListener('mousedown', function (e) {
    // If mousedown event is fired from .options_menu, toggle flag to true
    if (e.target === line1) {
        isDragging = true;
    }
});

document.addEventListener('mousemove', function (e) {
    // Don't do anything if dragging flag is false
    if (isDragging == false) {
        return false;
    }

    // console.log('mouse is moving')
    else if(isDragging == true){

        console.log('Dragging')

        if (e.pageX == oldx && e.pageY < oldy && rounded_value >= 50) {
            // console.log('UP')
            // changing the css values
            
            rounded_value-= 1;
            options_menu.style.top = `${rounded_value}%` ;
            line1.style.top = `${rounded_value}%` ;
            editor.style.height = `${rounded_value}%` ;
            stdin_area.style.height = `${100-rounded_value-5}%` ;


        } else if (e.pageX == oldx && e.pageY > oldy && rounded_value <= 80) {
            // console.log('Down')
            // changing the css values
            
            
            rounded_value+= 1;
            options_menu.style.top = `${rounded_value}%` ;
            line1.style.top = `${rounded_value}%` ;
            editor.style.height = `${rounded_value}%` ;
            stdin_area.style.height = `${100-rounded_value-5}%` ;

        }

        oldx = e.pageX;
        oldy = e.pageY;
    }
});

document.addEventListener('mouseup', function (e) {
    // Turn off dragging flag when user mouse is up
    isDragging = false;
});