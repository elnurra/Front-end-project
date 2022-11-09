const firstNumber = document.querySelector(
  "#statistics .project-template .title strong"
);
const secondNumber = document.querySelector(
  "#statistics .happy-customer .title strong"
);
const thirdNumber = document.querySelector(
  "#statistics .experienced-staff .title strong"
);
const fourthNumber = document.querySelector(
  "#statistics .ongoing-project .title strong"
);
export function increasingNumbers() {
  let i = 0;
  let m = 0;
  let k = 0;
  setInterval(() => {
    if (i < 97) {
      firstNumber.innerHTML = `${i}`;
      i++;
    }
    if (i < 191) {
      secondNumber.innerHTML = `${i}`;
      i = i + 1;
    }
    if (k < 47) {
      fourthNumber.innerHTML = `${k}`;
      k++;
    }
  }, 10);
  setInterval(() => {
    if (m < 13) {
      thirdNumber.innerHTML = `${m}`;
      m++;
    }
  }, 100);
}
