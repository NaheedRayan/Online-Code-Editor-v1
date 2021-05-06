// for rescaling the divs

var line1 = document.querySelector(".line1")
var line2 = document.querySelector(".line2")
var stdout_area = document.querySelector(".stdout_area")


var options_menu = document.getElementById("options_menu")
var editor = document.querySelector(".editor")
var stdin_area = document.getElementById("stdin_area")

var hide_stdin = document.querySelector(".hide_stdin");


// for identifying mouse drag
var isDragging = false;


// for reference position
var oldx = 0;
var oldy = 0;

var rounded_value = 0;
var rounded_value2 = 0;

// for getting the top value of line1 in percentage
rounded_value = Math.round(getComputedStyle(line1).top.replace('px', '') / getComputedStyle(line1.parentElement).height.replace('px', '') * 100);
rounded_value2 = Math.round(getComputedStyle(line2).right.replace('px', '') / getComputedStyle(line2.parentElement).width.replace('px', '') * 100);

console.log(rounded_value);
console.log(rounded_value2);


line1.addEventListener('mousedown', function (e) {
    // If mousedown event is fired from .options_menu, toggle flag to true
    if (e.target === line1) {
        isDragging = true;
    }
});

line2.addEventListener('mousedown', function (e) {
    // If mousedown event is fired from .options_menu, toggle flag to true
    if (e.target === line2) {
        isDragging = true;
    }
});

document.addEventListener('mousemove', function (e) {
    // Don't do anything if dragging flag is false
    if (isDragging == false) {
        return false;
    }

    // console.log('mouse is moving')
    else if (isDragging == true) {

        console.log('Dragging')

        if (e.pageX == oldx && e.pageY < oldy && rounded_value >= 50) {
            // console.log('UP')
            // changing the css values

            rounded_value -= 1;
            options_menu.style.top = `${rounded_value}%`;
            line1.style.top = `${rounded_value}%`;
            editor.style.height = `${rounded_value}%`;
            stdin_area.style.height = `${100-rounded_value-5}%`;


        } else if (e.pageX == oldx && e.pageY > oldy && rounded_value <= 80) {
            // console.log('Down')
            // changing the css values


            rounded_value += 1;
            options_menu.style.top = `${rounded_value}%`;
            line1.style.top = `${rounded_value}%`;
            editor.style.height = `${rounded_value}%`;
            stdin_area.style.height = `${100-rounded_value-5}%`;

        } else if (e.pageY == oldy && e.pageX < oldx && rounded_value2 >= 45) {
            // console.log('Left')

            rounded_value2 -= 1;
            options_menu.style.width = `${rounded_value2}%`;
            line1.style.width = `${rounded_value2}%`;
            editor.style.width = `${rounded_value2}%`;
            stdin_area.style.width = `${rounded_value2}%`;
            stdout_area.style.width = `${100-rounded_value2}%`;
            line2.style.right = `${100-rounded_value2}%`;


        } else if (e.pageY == oldy && e.pageX > oldx && rounded_value2 <= 75) {
            // console.log('Right')

            rounded_value2 += 1;
            options_menu.style.width = `${rounded_value2}%`;
            line1.style.width = `${rounded_value2}%`;
            editor.style.width = `${rounded_value2}%`;
            stdin_area.style.width = `${rounded_value2}%`;
            stdout_area.style.width = `${100-rounded_value2}%`;
            line2.style.right = `${100-rounded_value2}%`;

        }
        oldx = e.pageX;
        oldy = e.pageY;
    }
});

document.addEventListener('mouseup', function (e) {
    // Turn off dragging flag when user mouse is up
    isDragging = false;
});



let z = 1;

hide_stdin.addEventListener("click", () => {
    if (z == 1) {


        editor.style.height = "95%";
        editor.style.width = `${rounded_value2}`;

        line1.style.top = "95%";
        line1.style.width = `${rounded_value2}`;

        options_menu.style.top = "95%";
        options_menu.style.width = `${rounded_value2}`;

        stdin_area.style.height = "0%";
        stdin_area.style.width = `${rounded_value2}`;
        $(".hide_stdin").html("Show Stdin");

        z = !z ;
    }

    else{
        editor.style.height = "70%";
        editor.style.width = `${rounded_value2}`;

        line1.style.top = "70%";
        line1.style.width = `${rounded_value2}`;

        options_menu.style.top = "70%";
        options_menu.style.width = `${rounded_value2}`;

        stdin_area.style.height = "25%";
        stdin_area.style.width = `${rounded_value2}`;

        $(".hide_stdin").html("Hide Stdin");

        z = !z ;


    }


})