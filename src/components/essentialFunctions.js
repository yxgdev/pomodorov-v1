export const startTimer = (min, sec) => {
  const displayTime = document.querySelector('.display-time');
  console.log(displayTime);
  if (min > 0 || sec > 0) {
    let timer = setInterval(() => {
      if (min !== 0 && sec === 0) {
        //   reset second if minute not finished
        sec = 60;
        min--;
      }

      sec--;

      console.log(sec);

      //   Format second to 2 digit
      let formattedSecond = ('0' + sec).slice(-2);
      //   change content of displayTime
      displayTime.innerText = `${min}:${formattedSecond}`;

      if (min === 0 && sec === 0) {
        //   Check if timer finished
        clearInterval(timer);
        // something equals to true
      }
    }, 1000);
  }
};

export default { startTimer };
