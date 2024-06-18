const btn = document.querySelector(".dice");

const head = document.querySelector(".head");
const advice = document.querySelector(".advice");

window.addEventListener("DOMContentLoaded", () => {
  fetchAdvice();
});

btn.addEventListener("click", () => {
  fetchAdvice();
});

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  head.textContent = `Advice #${data.slip.id}`;
  advice.innerHTML = `&ldquo;${data.slip.advice}&rdquo;`;
};
