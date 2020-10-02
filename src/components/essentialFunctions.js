import React, { useState, useEffect, useRef } from 'react';

// const startTimer = (min, sec) => {
//   let displayTime = '';
//   // const displayTime = document.querySelector('.display-time');
//   // console.log(displayTime);
//   if (min > 0 || sec > 0) {
//     runningTimer = setInterval(() => {
//       if (min !== 0 && sec === 0) {
//         //   reset second if minute not finished
//         sec = 60;
//         min--;
//       }

//       sec--;

//       // console.log(sec);

//       //   Format second to 2 digit
//       let formattedSecond = ('0' + sec).slice(-2);
//       //   change content of displayTime

//       // displayTime.innerText = `${min}:${formattedSecond}`;
//       displayTime = `${min}:${formattedSecond}`;
//       updateTimer(displayTime);
//       setRemainingTime(min, sec);
//       console.log(paused, 'wtf');
//       if (min === 0 && sec === 0) {
//         console.log(paused);
//         //   Check if timer finished
//         clearInterval(runningTimer);
//         // something equals to true
//       }

//       // setTimeout(() => {
//       //   clearInterval(runningTimer);
//       // }, 5000);
//     }, 1000);
//   }
// };

// Copied From Intenret For The FUCKING TIMER
