const birthDate = '17 Apr 2025';

function countdown(){
    const birthdayDate = new Date(birthDate);
    const currentDate = new Date();
    
    const difference = (birthdayDate - currentDate)/1000;

    const days = Math.floor(difference / 86400);
    const hours = Math.floor((difference % 86400) / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = Math.floor(difference % 60);

    document.getElementById('days-value').textContent = formatTime(days);
    document.getElementById('hours-value').textContent = formatTime(hours);
    document.getElementById('minutes-value').textContent = formatTime(minutes);
    document.getElementById('seconds-value').textContent = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
countdown();

function colorChange(){
    const daysValue = document.getElementById('days-value').textContent;

    if (parseInt(daysValue) < 100){
        document.getElementById('days-value').style.color = 'azure';
    } else {
        document.getElementById('days-value').style.color = 'aquamarine';
    }
}

setInterval(() => {
    countdown();
    colorChange();
}, 1000);


