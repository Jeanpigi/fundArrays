const elements = ["fire", "air", "water", "wind"];
const union = elements.join("--");
console.log(union);

const title = "curso de manipulación de arrays";
// tenerlo como un array
console.log(title.split(" "));
const titleFinal = title.split(" ").join("-").toLowerCase();
console.log(titleFinal)