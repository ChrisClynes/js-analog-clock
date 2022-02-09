setInterval(()=>{calcTime()},1000);

positionNumbers=() => {
    for(let i = 1; i <= 12; i++){
        const clockNumbers = document.getElementById("clock-numbers-container");
        const createNumberDiv = document.createElement('div');
            createNumberDiv.setAttribute('id', 'clock-number'+ i);
            createNumberDiv.classList.add('clock-numbers');
            createNumberDiv.innerText= i;
            clockNumbers.appendChild(createNumberDiv);
            console.log("clock " + i);
    }
}

scaleFontSize=() => {
    let clockWidth = document.getElementById("clock-container").clientWidth;
    let numbers = document.getElementsByClassName("clock-numbers");
    let signature = document.getElementById("signature")
    let font = Math.floor(clockWidth / 15);
    for (let i = 0; i < numbers.length; i++) {
        let hour = numbers[i];
        hour.style.fontSize = font + "px";
      }
    signature.style.fontSize = font/1.5 + "px";
}

function calcTime() {
    let time = new Date();
    let hours = (time.toLocaleString(navigator.language, {hour: 'numeric'}).match(/\d+/)[0]);//extracts hour in 12hr format
    let secondsDeg = time.getSeconds() * 6;//converts seconds to degrees
    let minutesDeg = ((time.getMinutes() * 6) + (secondsDeg / 60));//minutes * 6 gives base degree then add secondsDeg / 60 
    let hoursDeg = ((hours * 30) + (minutesDeg / 12));
    const secondHand = document.getElementById("second-hand");
    const minuteHand = document.getElementById("minute-hand");
    const hourHand = document.getElementById("hour-hand");
    secondHand.style.transform = "rotate(" + secondsDeg + "deg)"; 
    minuteHand.style.transform = "rotate(" + minutesDeg + "deg)";
    hourHand.style.transform = "rotate(" + hoursDeg + "deg)";
    console.log(hoursDeg)
}

window.onload = positionNumbers();
window.onload = scaleFontSize();
window.onload = calcTime()
window.onresize = scaleFontSize;

