"use strict";

function explanationS(part, str) {
  switch (str) {
    case "SPSS": {
      var pre = "SPSS";
      var next = "Statistical Package for Social Science";
      break;
    }
    case "SAS": {
      var pre = "SAS";
      var next = "Statistical Analysis System";
      break;
    }
  }
  part.innerHTML = (part.innerHTML === pre) ? next : pre;
}

function explanationW(part, str) {
  switch (str) {
    case "CSS": {
      var pre = "CSS";
      var next = "Cascading Style Sheets";
      break;
    }
  }
  part.innerHTML = (part.innerHTML === pre) ? next : pre;
}

// Download Button Visualization html ondragend
