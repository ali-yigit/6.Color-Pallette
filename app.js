const btn = document.getElementById("btn");

const body = document.getElementById("body");
const p = document.createElement("p")
btn.appendChild(p)

btn.addEventListener("click", (x) => {
  const color1 = Math.floor(Math.random() * 255);
  const color2 = Math.floor(Math.random() * 255);
  const color3 = Math.floor(Math.random() * 255);
  const colorRgb = `Rgb(${color1},${color2},${color3})`;
  body.style.backgroundColor = colorRgb;
  console.log(colorRgb);
  p.innerText="Color: "+ colorRgb
  p.style.border="none"
});

