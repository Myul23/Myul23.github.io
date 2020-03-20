function LoginCheck() {
    var point = document.getElementById("pass").value;
    point = point.toLowerCase();

    var change = "<a href='";
    if (point === "sample") change += "0. Sample\\"; // 이거 생각보다 좋은데?
    else if (point === "덕질") change += "A.G.O.S\\Entrance.html";
    else if (point === "interesting") change += "Interesting\\";
    else if ((point === "lesson") || (point === "lessons"))
        change += "Review Lessons\\Core.html";
    else change += "index.html";
    change += "' target='_self'>Playground</a>";

    document.getElementsByTagName("strong")[0].innerHTML = change;
}

