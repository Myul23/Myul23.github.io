function LoginCheck() {
    var point = document.getElementById("pass").value;
    point = point.toLowerCase();
    if ((point === "study") || (point === "lesson")) {
        var change = "<a href='Review Lessons\\Total.html' target='_self'>Playground</a>";
        document.getElementsByTagName("strong")[0].innerHTML = change;
    } else if (point === "덕질") {
        var change = "<a href='A.G.O.S\\Entrance.html' target='_self'>Playground</a>";
        document.getElementsByTagName("strong")[0].innerHTML = change;
    }
}
