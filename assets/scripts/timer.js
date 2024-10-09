const T1countdownDate = new Date("November 1, 2024 00:00:00").getTime();
const T2countdownDate = new Date("October 20, 2024 00:00:00").getTime();

const x = setInterval(function() {

    const now = new Date().getTime();

    const diff1 = T1countdownDate - now;
    const diff2 = T2countdownDate - now;

    const days1 = Math.floor(diff1 / (1000 * 60 * 60 * 24));
    const hours1 = Math.floor(diff1 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes1 = Math.floor((diff1 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds1 = Math.floor((diff1 % (1000 * 60)) / 1000);

    const days2 = Math.floor(diff2 / (1000 * 60 * 60 * 24));
    const hours2 = Math.floor(diff2 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes2 = Math.floor((diff2 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds2 = Math.floor((diff2 % (1000 * 60)) / 1000);

    document.getElementById("timer1").innerHTML = days1 + "d " + hours1 + "h " + minutes1 + "m " + seconds1 + "s ";
    document.getElementById("timer2").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";

}, 1000)