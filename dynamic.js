"use strict";

// 화살표 방향 바꾸기
function change(part) {
  spreadNext(part);
  part.innerHTML = part.innerHTML === "&gt;" ? "&lt;" : "&gt;";
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

function crossWalls(str, num1, num2, direction = "next") {
  var part = str.parentElement;
  for (; num1 > 1; num1--) part = part.parentElement;
  if (direction === "next") spreadNext(part, num2);
  else spreadBefore(part, num2);
}

function spreadBefore(str, num) {
  var part = str.previousElementSibling;
  if (num > 1) spreadBefore(part, num - 1);
  else spreadOrFold(part);
}

// 더 폭 넓게 쓸 수 있는 함수가 된 거야. 좋게 생각하자.
function spreadNext(str, num) {
  if (str.nextElementSibling === null || str.nodeName === "option") {
    var part = str.parentElement;
    part = part.nextElementSibling;
  } else var part = str.nextElementSibling;
  for (; num > 1; num--) part = part.nextElementSibling;
  spreadOrFold(part);
}

// HTML5 Element spread or fold
function spreadOrFold(part) {
  if (part === "[object HTMLSpanElement]") {
    part.style.visibility =
      part.style.visibility === "hidden" ? "visible" : "hidden";
  } else {
    part.style.display =
      part.style.display === "none" || part.style.display === ""
        ? "block"
        : "none";
  }
}

/*function display(str) {
  document.getElementById("free").write(str.innerHTML);
}

function arrange(str) {
  str.previousElementSibling.style.height = str.style.height;
}*/
