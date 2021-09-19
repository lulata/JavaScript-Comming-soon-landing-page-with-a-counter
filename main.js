const countdown = document.querySelector('.countdown');

//Set the watch date (ms)
const launchDate = new Date('May 30,2022 10:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  //Get todays date and time (ms)
  const now = new Date().getTime();

  //Distance from now to launch date in (ms)
  const distance = launchDate - now;

  //Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  //Display result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${secs}<span>Secods</span></div>
  `;

  //If launch date passed
  if (distance < 0) {
    //Stop count down
    clearInterval(intvl);
    //Style and output text
    countDown.style.color = '#17a2b8';
    countDown.innerHTML = 'Launched';
  }
}, 1000)
