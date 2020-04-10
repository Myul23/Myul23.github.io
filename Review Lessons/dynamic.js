"use strict";

// 화살표 방향 바꾸기
function change(part) {
  spreadNext(part);
  part.innerHTML = (part.innerHTML === "&gt;") ? "&lt;" : "&gt;";
}

// Core 전용 메뉴(버튼) 닫기
function changeButton() {
  var part = document.getElementsByTagName("button")[0];
  change(part);
  // Event.keyCode = 116;
}

// js로 구현한 귀찮은 문자 연속기
function repeat(str, num) {
  if (str === "tap") {
    str = "&nbsp;";
    num *= 4;
  }
  for (var i = 0; i < num; i++) document.write(str);
}

function spreadBefore(str, num) {
  var part = str.previousElementSibling;
  if (num > 1) spreadBefore(part, num - 1);
  else spreadOrFold(part);
}

function spreadNext(str, num) {
  var part = str.nextElementSibling;
  if (num > 1) spreadNext(part, num - 1);
  else spreadOrFold(part);
}

// HTML5 Element spread or fold
function spreadOrFold(part) {
  if (part === '[object HTMLSpanElement]')
    part.style.visibility = (part.style.visibility === "hidden") ? "visible" : "hidden";
  else
    part.style.display = ((part.style.display === "none") || (part.style.display === '')) ? "block" : "none";
}

/*function display(str) {
  document.getElementById("free").write(str.innerHTML);
}

function arrange(str) {
  str.previousElementSibling.style.height = str.style.height;
}*/