const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if(elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      }
      else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

const btn = document.querySelector("button");
async function animateRight(el) {
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  moveX(el, 100, 1000);
}
animateRight(btn).catch(({ bodyBoundary, elRight, amount }) => {
  console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
  console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
});

// const btn = document.querySelector("button");
// moveX(btn, 250, 1000)
//   .then(() => moveX(btn, 250, 1000))
//   .then(() => moveX(btn, 250, 1000))
//   .then(() => moveX(btn, 250, 1000))
//   .then(() => moveX(btn, 250, 1000))
//   .then(() => moveX(btn, 250, 1000))
//   .then(() => moveX(btn, 250, 1000))
//   .catch(({ bodyBoundary, elRight, amount }) => {
//     console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
//     console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
//   });