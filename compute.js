const animBox = document.getElementById("animation-box");
const animXLabel = document.getElementById("anim-x-label");
const animYLabel = document.getElementById("anim-y-label");
const animRLabel = document.getElementById("anim-rotation-label");
const animDLabel = document.getElementById("anim-duration-label");
const animSLabel = document.getElementById("anim-scale-label");

let x = 0,
  y = 0,
  s = 1,
  r = 180,
  d = 3;
/* animBox.style.transitionDuration = `${d}s`; */
animBox.style.transition = `transform ${d}s`;
animBox.style.transform = `scale(${s}) translate(${x}px, ${y}px) rotate(${r}deg)`;
//console.log("X->" + x, "Y->" + y, "S->" + s, "R->" + r, "D->" + d);

function changeHandler(event) {
  const change = parseFloat(event.target.value);
  if (event.target.name === "anim-x") {
    x = change;
    animXLabel.textContent = `X: ${x}%`;
  } else if (event.target.name === "anim-y") {
    y = change;
    animYLabel.textContent = `Y: ${y}%`;
  } else if (event.target.name === "anim-scale") {
    s = change;
    animSLabel.textContent = `Scale: ${s}`;
  } else if (event.target.id === "anim-rotation") {
    r = change;
    animRLabel.textContent = `Rotation: ${r}deg`;
  } else if (event.target.id === "anim-duration") {
    d = change;
    animDLabel.textContent = `Duration: ${d}s`;
  }
  transformBox();
}

function transformBox() {
  //console.log("X->" + x, "Y->" + y, "S->" + s, "R->" + r, "D->" + d);
  animBox.style.transition = `transform ${d}s`;
  /* animBox.style.transitionDuration = `${d}s`; */
  animBox.style.transform = `scale(${s}) translate(${x}%, ${y}%) rotate(${r}deg)`;
}
