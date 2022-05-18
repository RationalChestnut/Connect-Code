const rangeInput = document.querySelectorAll(".rangeInput input");
const numInput = document.querySelectorAll(".inputs .input");
const progress = document.querySelector(".slider .progress");
const gap = 0;

rangeInput.forEach((input) => {
  console.log("ran");

  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[0].value);
    if (maxVal - minVal <= gap) {
      if (e.target.className === "rangeMin") {
        rangeInput[0].value = maxVal - gap;
      } else {
        rangeInput[1].value = minVal + gap;
      }
      console.log("Run");
    } else {
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = (maxVal / rangeInput[0].max) * 100 + "%";
    }
  });
});
