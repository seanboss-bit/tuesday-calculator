const clear = document.querySelector("#clear");
const answer = document.querySelector("#answer");
const equalTo = document.querySelector("#equals");
const remove = document.querySelector("#delete");

clear.addEventListener("click", (e) => {
  e.preventDefault();
  answer.value = null;
});

equalTo.addEventListener("click", (e) => {
  e.preventDefault();
  answer.value = eval(answer.value);
});
remove.addEventListener("click", (e) => {
  e.preventDefault();
  answer.value = answer.value.substr(0, answer.value.length - 1);
});
