// console.log("start");
// console.log("a");
// console.log("b");
// console.log("c");
// console.log("end");

//CODE BLOCK FOR NATURE
// console.log("start");
// console.log("a");
// alert("THIS IS FROM B")
// console.log("c");
// console.log("end");

//SET INTERVEL
// console.log("start");
// console.log("a");
// setInterval(fun,5000)
//     function fun(){
//     console.log("b");
//     alert("b")
// }
// console.log("c");
// console.log("end");

//SET TIMEOUT
// console.log("start");
// console.log("a");
// setTimeout(fun,5000)
// function fun(){
//     console.log("b");
// }

// console.log("c");
// console.log("end");



//task
// console.log("start");
// var temp=0
// setInterval(fun,3000)
// function fun(){
//     console.log(temp++);
// }


// console.log("start");
// var temp=0;
// var time_run=setInterval(fun,1000)
// function fun(){
//     var para=document.getElementById("para")
//     para.textContent=temp++
// }

// function stop(){
//     clearInterval(time_run)
// }
// function start(){
//     if(!timer_on){

//         timer_on=1;
//         timedCount();
    
//     }
    

// }

// var temp=0;
// var start=document.getElementById("start");
// start.addEventListener("click",start);
// var time_on;

// function start(){
//     window.time_on =setInterval(function(){
//         var para=document.getElementById("para");
//         para.textContent=temp++;
//     },1000);
//     start.removeEventListener("click",start);
// }

// var stop=document.getElementById("stop")
// stop.addEventListener("click",stop)
// function stop(){
//  clearInterval(window.time_on)
//  start.addEventListener("click",start)   
// }





//-------------------------TASK----------------------------
setInterval(showtime,1000);
function showtime(){
    var time=new Date();

    var hour=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var am_pm="AM";

    if(hour >= 12){
        am_pm="PM";
        hour=hour-12;
        }
        if(hour==0){
            hour=12;
        }
        var hour=hour < 10 ? "0" +hour :hour;
        var sec=sec < 10 ? "0" +sec :sec;
        var min=min < 10 ? "0" +min :min;
        var para=document.getElementById("para")
        para.textContent=`${hour}:${min}:${sec}:${am_pm}`
}
























