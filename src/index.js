import add from "./chunk1.js";
import commonJs from "./common";
import "./style.css";
import "./assets/cat.jpeg";

add(1, 2);
commonJs();
function filter() {
  return add(1, 3);
}

const b = filter();

[1, 2, 3].map((n) => n + 1);
