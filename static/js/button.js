var editor = document.querySelector(".editor");
var stdin_area = document.querySelector(".stdin_area");
var stdout_area = document.querySelector(".stdout_area");

var filename1 = document.querySelector(".filename1");
var filename2 = document.querySelector(".filename2");
var filename3 = document.querySelector(".filename3");



function media_size(x) {
    if (x.matches) { // If media query matches
        // console.log("Matches")


    } else {
        // console.log("sorry");
        filename1.style.cssText = "background-color:var(--dracula); border-left:1px solid var(--border-color) ;border-right: 1px solid var(--border-color);border-top:1px solid var(--border-color);z-index:10";
        filename2.style.cssText = "background-color: black; border-left:none ;border-right: none;border-top:none;z-index:9";
        filename3.style.cssText = "background-color: black; border-left:none ;border-right: none;border-top:none;z-index:9";
        editor.style.zIndex = "9";
        stdin_area.style.zIndex = "8";
        stdout_area.style.zIndex = "8";
    }
}

var x = window.matchMedia("(max-width: 1000px)")
media_size(x) // Call listener function at run time
x.addListener(media_size) // Attach listener function on state changes


filename1.addEventListener("click", () => {
    // console.log("file1");
    if (x.matches) {

        filename1.style.cssText = "background-color:var(--dracula); border-left:1px solid var(--border-color) ;border-right: 1px solid var(--border-color);border-top:1px solid var(--border-color);z-index:10";
        filename2.style.cssText = "background-color: black; border-left:none ;border-right: none;border-top:none;z-index:9";
        filename3.style.cssText = "background-color: black; border-left:none ;border-right: none;border-top:none;z-index:9";
        editor.style.zIndex = "9";
        stdin_area.style.zIndex = "8";
        stdout_area.style.zIndex = "8";
    
    }

});

filename2.addEventListener("click", () => {
    // console.log("file2");
    if (x.matches) {
        filename1.style.cssText = "background-color: black; border-left:none ;border-right: none;border-top:none;z-index:9";
        filename2.style.cssText = "background-color:var(--dracula); border-left:1px solid var(--border-color) ;border-right: 1px solid var(--border-color);border-top:1px solid var(--border-color);z-index:10";
        filename3.style.cssText = "background-color: black; border-left:none ;border-right: none;border-top:none;z-index:9";
        editor.style.zIndex = "8";
        stdin_area.style.zIndex = "9";
        stdout_area.style.zIndex = "8";
    }

});

filename3.addEventListener("click", () => {
    // console.log("file3");
    if (x.matches) {
        filename1.style.cssText = "background-color: black; border-left:none ;border-right: none;border-top:none;z-index:9";
        filename2.style.cssText = "background-color: black; border-left:none ;border-right: none;border-top:none;z-index:9";
        filename3.style.cssText = "background-color:var(--dracula); border-left:1px solid var(--border-color) ;border-right: 1px solid var(--border-color);border-top:1px solid var(--border-color);z-index:10";
        editor.style.zIndex = "8";
        stdin_area.style.zIndex = "8";
        stdout_area.style.zIndex = "9";
    }
});