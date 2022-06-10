 function digiclock(){
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let timeFormat = 'AM';

    if(hours === 0){
        hours === 12;
    }
    if(hours > 12){
        hours = hours - 12;
        timeFormat = 'PM';
    }

    hours = hours < 10 ? '0'+ hours : hours;
    min = min < 10 ? '0'+ min : min;
    sec = sec < 10 ? '0'+ sec : sec;
    
    let finaltime = `${hours}:${min}:${sec}`;


    document.getElementById('time').innerText = finaltime;
    document.querySelector('small').innerText = timeFormat;

    setInterval(digiclock, 1000);
 }

digiclock();