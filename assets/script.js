var counter = 60;
var timer = document.querySelector("#timer");
var start = document.querySelector("#start");



// var countdown = function(){
//     timer.textContent = counter;
//     counter--;
//     if(counter === 0){
//         counter = "0";
//         clearInterval(startCountdown);
//     };
// };

// var startCountdown = setInterval(countdown, 1000);

start.onclick = function(){
    var countdown = function(){
        timer.textContent = counter;
        counter--;
        if(counter === 0){
            counter = "0";
            clearInterval(startCountdown);
        };
    };
    
    var startCountdown = setInterval(countdown, 1000);
}



