// // finding an instance
var ed = ace.edit("editor");
var ed2 = ace.edit("stdin_area");


var output = document.querySelector(".output");

var language = ""
var lang = ""

function change_language(event) {
    console.log(event.target.value)
    
    var e = document.querySelector(".language");
    lang = e.options[e.selectedIndex].text; // get selected option text

    language = event.target.value;
    // lang = event.target.value;
    if (language == "cpp" | language == "c")
        ed.getSession().setMode("ace/mode/c_cpp");
    else if (language == "python3")
        ed.getSession().setMode("ace/mode/python");
    else if (language == "openJDK")
        ed.getSession().setMode("ace/mode/java");
    else if (language == "javascript")
        ed.getSession().setMode("ace/mode/javascript");

}

// console.log(language)

document.querySelector(".run_button").addEventListener("click", (e) => {
    console.log("run button is clicked");

    $(".loader").show();
    $(".status").show();
    $(".status").css("background-color", "rgb(139, 139, 139)")
    $(".success").html("");


    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    $(".time").html(dateTime);
    $(".language_info").html(lang);


    console.log(dateTime);

    let code = ed.getValue();
    let input = ed2.getValue();

    // console.log(stdin);

    var data = {
        src: `${code}`,
        stdin: `${input}`,
        lang: `${language}`,
        timeout: "5"
    }

    console.log(data)

    // var myJson = JSON.stringify(data)
    // console.log(myJson)

    fetch("http://localhost:8080/submit", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        console.log(res)
        return res.text()
    }).then(data => {
        // console.log(data)
        output_link(data)
    })


})

// when the link is available
function output_link(data_link) {
    console.log(data_link)


    let myvar = setInterval(function checklink() {
        fetch(data_link)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {

                if (data.output) {
                    console.log(data);
                    clearInterval(myvar);
                    output.innerHTML = data.output;
                    $(".success").html(data.status);
                    $(".loader").hide();
                    if(data.status == "Successful")
                        $(".status").css("background-color", "rgb(119, 199, 0)");
                    else
                        $(".status").css("background-color", "rgb(235, 75, 75)");

                } else if (data.status != "") {
                    // console.log(data);
                    // output.innerHTML = data.status;
                    $(".success").html(data.status);
                } else {
                    clearInterval(myvar);
                    output.innerHTML = "Something went wrong";
                }

            })
    }, 1000)



}