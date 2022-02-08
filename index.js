

positionNumbers=() => {
    
    for(let i = 1; i <= 12; i++){
        const clockNumbers = document.getElementById("clock-numbers");
        const createNumberDiv = document.createElement('div');
            createNumberDiv.setAttribute('id', 'clock-number'+ i);
            createNumberDiv.classList.add('clock-numbers');
            createNumberDiv.innerText= `${i}`;
            clockNumbers.appendChild(createNumberDiv);
            console.log("clock " + i);
    }
}
positionNumbers();