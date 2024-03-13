"use strict";

let imgs = document.querySelectorAll(".taskImg");

imgs.forEach(function (e) {
  e.addEventListener("click", function () {
    e.src = `images/checked.png`;
  });
});
const input_box = document.getElementById("input-box");
const list_container = document.querySelector(".list-container");

document.getElementById("button").addEventListener("click", function () {
  if (input_box.value === "") {
    alert("write something here");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input_box.value;
    list_container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input_box.value = "";
  saveData();
});

list_container.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list_container.innerHTML);
}
function showData() {
  list_container.innerHTML = localStorage.getItem("data");
}
showData();
