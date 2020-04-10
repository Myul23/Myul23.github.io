"use strict";

// select setting failure
function select(part, str) {
  var adding = "<select>";
  switch (str) {
    case "unit": {
      adding += "<option>px</option><option>pt</option><option>em</option><option>&#37;</option>";
      break;
    }
    case "x": {
      adding += "<option>px</option><option>pt</option><option>em</option><option>vw</option><option>&#37;</option>";
      break;
    }
    case "y": {
      adding += "<option>px</option><option>pt</option><option>em</option><option>vh</option><option>&#37;</option>";
      break;
    }
    case "color": {
      adding += "<option>Color Name</option><option>#00AAFF</option><option>rgb&#40;0&#44; 120&#44; 255&#41;</option><option>rgb&#40;0&#37;&#44; 120&#37;&#44; 255&#37;&#41;</option>";
      break;
    }
    case "border": {
      adding += "<option>none</option><option>dotted</option><option>dashed</option><option>solid</option><option>double</option><option>groove</option><option>ridge</option><option>inset</option><option>outset</option>";
      break;
    }
  }
  adding += "</select>";
  document.write(adding);
}
