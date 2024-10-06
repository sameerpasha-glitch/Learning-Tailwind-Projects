/** @format */

const username = document.getElementById("mail");
const password = document.getElementById("pass");
const submit = document.getElementById("submit");

function valid() {
  let mail = username.value;
  let pass = password.value;

  if (mail === "sameertam008@gmail.com" || pass === "12345678") {
    alert("Login Successful");
    window.location.href = "file:///C:/project/Tailwind-Css/spotify.html";
  } else {
    alert("Wrong Password & username");
  }
}

submit.addEventListener("click", valid);
/*
let google = document.getElementById("g1");

google.addEventListener("click", function () {
  window.location.href = "https://www.google.com";
});
test("Container1 has extra large text size", () => {
  const container = document.querySelector(".container1");
  expect(container.classList.contains("text-xl")).toBe(true);
});
test("Container1 has bold font weight", () => {
  const container1 = document.querySelector(".container1");
  expect(window.getComputedStyle(container1).fontWeight).toBe("700");
});
test("container1 has centered text", () => {
  const container = document.querySelector(".container1");
  expect(container).toBeTruthy();
  expect(container.classList.contains("text-center")).toBeTruthy();
});*/
