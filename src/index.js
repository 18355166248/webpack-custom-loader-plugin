import add from "./chunk1.js";
import commonJs from "./common";
import "./style/style.css";
import "./assets/cat.jpeg";

add(1, 2);
commonJs();
function filter(bool) {
  if (bool) {
    import("./utils/index.js");
  }
  return add(1, 3);
}

filter(1);

[1, 2, 3].map((n) => n + 1);
