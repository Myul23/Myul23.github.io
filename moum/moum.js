// xsl 1.0이 이전 파일에 대한 '..'을 읽지 못하므로 새롭게 파일을 만들어둠.
function crossWalls(str) {
  var parent = str.parentElement;
  parent = parent.parentElement;
  parent = parent.nextElementSibling;
  child = parent.childNodes[1];
  if (parent.style.display === "none" || parent.style.display === "") {
    parent.style.display = "table-row";
    child.style.display = "table-cell";
  } else {
    parent.style.display = "none";
    child.style.display = "none";
  }
}
