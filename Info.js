




function infoDisplay(e) {


    if (e == document.getElementById("info")) {


        document.getElementById("infoHover").style.display = "block";
        console.log("success");

    }

    else if (e == document.getElementById("how")) {

        document.getElementById("howHover").style.display = "block";
        console.log("success");


    }

    else if (e == document.getElementById("other")) {

        document.getElementById("otherHover").style.display = "block";
        console.log("success");



    }
}


function infoDisplayRemove(e) {


    if (e == document.getElementById("info")) {


        document.getElementById("infoHover").style.display = "none";
        console.log("success");

    }

    else if (e == document.getElementById("how")) {

        document.getElementById("howHover").style.display = "none";
        console.log("success");

    }

    else if (e == document.getElementById("other")) {

        document.getElementById("otherHover").style.display = "none";
        console.log("success");

    }
}





var btn = document.getElementById("btn");
var testspan = document.getElementsByClassName("close")[0];
var modal = document.getElementById("popup");

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}