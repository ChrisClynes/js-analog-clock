setInterval(()=>{calcTime()},1000);

positionNumbers=() => {
    for(let i = 1; i <= 12; i++){
        const clockNumbers = document.getElementById("clock-numbers-container");
        const createNumberDiv = document.createElement('div');
            createNumberDiv.setAttribute('id', 'clock-number'+ i);
            createNumberDiv.classList.add('clock-numbers');
            createNumberDiv.innerText= i;
            clockNumbers.appendChild(createNumberDiv);
            //loops through 1-12 to create divs and set id and class, may remove to speed up onload performance
    }
}

scaleFontSize=() => {
    let clockWidth = document.getElementById("clock-container").clientWidth;
    let numbers = document.getElementsByClassName("clock-numbers");
    let signature = document.getElementById("signature");
    let font = Math.floor(clockWidth / 15);
    for (let i = 0; i < numbers.length; i++) {
        let hour = numbers[i];
        hour.style.fontSize = font + "px";// loop through all clock numbers and set font size based off clock width
      }
    signature.style.fontSize = font/1.5 + "px";// use font ration from above for signature text too 
}

function calcTime() {
    let time = new Date();
    let hours = (time.toLocaleString('en-US', {hour: 'numeric'}).match(/\d+/)[0]);//extracts hour in 12hr format
    let secondsDeg = time.getSeconds() * 6;//converts seconds to degrees
    let minutesDeg = ((time.getMinutes() * 6) + (secondsDeg / 60));//minutes * 6 gives base degree then add secondsDeg / 60 
    let hoursDeg = ((hours * 30) + (minutesDeg / 12));// hours * 30 degrees plus minutes /12 to get 1 hour ratio
    const secondHand = document.getElementById("second-hand");
    const minuteHand = document.getElementById("minute-hand");
    const hourHand = document.getElementById("hour-hand");
        secondHand.style.transform = "rotate(" + secondsDeg + "deg)"; //sets rotation angle for clock hands
        minuteHand.style.transform = "rotate(" + minutesDeg + "deg)";
        hourHand.style.transform = "rotate(" + hoursDeg + "deg)";
    }

window.onload = positionNumbers(),
                scaleFontSize(),
                calcTime();
                
window.onresize = scaleFontSize;

