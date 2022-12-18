
const d = document;

export const countdown = (id, referenceDate, message) => {
    const $countdown = d.getElementById(id);
    const countdownDate = new Date(referenceDate).getTime();

    let countdownTime = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
            minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
            seconds = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

        if (limitTime < 0) {
            clearInterval(countdownTime);
            $countdown.innerHTML = `<h3>${message}</h3>`
        }

        $countdown.innerHTML = `
                <h3>we are launching soon</h3>
                <div id = "targets">
                    <div class="target"><span>${days}</span></div>
                    <div class="target"><span>${hours}</span></div>   
                    <div class="target"><span>${minutes}</span></div>   
                    <div class="target"><span>${seconds}</span></div>
                </div>   
                <div id = "legends">
                    <div class="legend"><span>days</span></div>
                    <div class="legend"><span>hours</span></div>   
                    <div class="legend"><span>minutes</span></div>   
                    <div class="legend"><span>seconds</span></div>
                </div>   
        `
        console.log(countdownDate, now, limitTime);
    }, 1000);
}