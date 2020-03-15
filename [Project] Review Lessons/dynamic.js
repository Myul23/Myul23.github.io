function repeat(str, num) {
    if (str === "tap") {
        str = "&nbsp;";
        num *= 4;
    }
    for (var i = 0; i < num; i++)
        document.write(str);
}

function spreadOrFold(str) {
    var part = str.nextElementSibling;
    if (part == '[object HTMLSpanElement]') {
        if (part.style.visibility == 'hidden')
            part.style.visibility = 'visible';
        else
            part.style.visibility = 'hidden';
    } else {
        if (part.style.display == 'none')
            part.style.display = 'block';
        else
            part.style.display = 'none';
    }
}

function spreadOrFold2(str) {
    str = str.nextElementSibling;
    spreadOrFold(str);
}

function change(str) {
    spreadOrFold(str);
    str.innerHTML = (str.innerHTML == "&gt;") ? "&lt;" : "&gt;";
}


function display(str) {
    document.getElementById("free").write(str.innerHTML);
}

function arrange(str) {
    str.previousElementSibling.style.height = str.style.height;
}