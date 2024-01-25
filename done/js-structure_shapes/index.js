console.clear();

import { createCircle } from "./components/Circle/Circle.js";
import { createSquare } from "./components/Square/Square.js";
import { createPentagon } from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");

const circle = createCircle();

const square = createSquare();

const pentagon = createPentagon();

root.append(circle, square, pentagon);
