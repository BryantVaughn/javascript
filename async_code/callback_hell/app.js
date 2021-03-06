const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = "translateX(100px)";
//   setTimeout(() => {
//     btn.style.transform = "translateX(200px)";
//     setTimeout(() => {
//       btn.style.transform = "translateX(300px)";
//       setTimeout(() => {
//         btn.style.transform = "translateX(400px)";
//         setTimeout(() => {
//           btn.style.transform = "translateX(500px)";
//         }), 5000;
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;
//   if(elRight + amount > bodyBoundary) {
//     onFailure();
//   }
//   else {
//     setTimeout(() => {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       onSuccess();
//     }, delay);
//   }
// };

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   setTimeout(() => {
//     const bodyBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left;
//     if(elRight + amount > bodyBoundary) {
//       onFailure();
//     }
//     else {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       onSuccess();
//     }
//   }, delay);
// };

// original before adding success and failure callbacks
// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 1000, 1000);
//       });
//     });
//   });
// });

// showing issue with multi-level callbacks
// moveX(btn, 100, 1000, () => {
//   // success
//   moveX(btn, 100, 1000, () => {
//     // success
//     moveX(btn, 100, 1000, () => {
//       // success
//       moveX(btn, 100, 1000, () => {
//         // success
//         moveX(btn, 1000, 1000, () => {
//           // success
//           alert("All moves complete");
//         }, () => {
//           // fail
//           failure();
//         });
//       }, () => {
//         // fail
//         failure();
//       });
//     }, () => {
//       // fail
//       failure();
//     });
//   }, () => {
//     // fail
//     failure();
//   });
// }, () => {
//   // fail
//   failure();
// });

// const failure = () => {
//   alert("CANNOT MOVE FURTHER");
// };

// rewrite moveX and callbacks using promises
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

moveX(btn, 250, 1000)
  .then(() => moveX(btn, 250, 1000))
  .then(() => moveX(btn, 250, 1000))
  .then(() => moveX(btn, 250, 1000))
  .then(() => console.log("DONE MOVING!"))
  .catch(({ bodyBoundary, elRight, amount }) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
  });