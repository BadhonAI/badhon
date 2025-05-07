const lod = document.getElementById("lod")
const m = document.getElementById("menu");
const c = document.getElementById("close");
const p = document.getElementById("pages");

// Disable scroll when loading
document.body.classList.add("no-scroll");

window.onload = function () {
  lod.style.display = "none";
  // Enable scroll after loading
  document.body.classList.remove("no-scroll");
};

c.style.display = "none";
m.onclick  = open;
c.onclick  = close;

function open() {
  m.style.display = "none";
  c.style.display = "flex";
  p.style.display = "flex";
}

function close() {
  m.style.display = "flex";
  c.style.display = "none";
  p.style.display = "none";
}
