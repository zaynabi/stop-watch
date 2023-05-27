const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
var second = 0;
var msecond = 0;
var min = 0;
var hr = 0;
let myInterval;
const secondElt = document.getElementById("second");
const msecondElt = document.getElementById("msecond");
const minElt = document.getElementById("min");
const hrElt = document.getElementById("hr");

startBtn.addEventListener("click",()=>{
  console.log("hello");
  myInterval = setInterval(startTimer,10);
  
});
function startTimer(){
  msecond += 1
  if(msecond<10){
    msecondElt.innerHTML = "0"+ msecond ;
  }
  if(msecond>9){
    msecondElt.innerHTML = msecond;
  }
  if(msecond>99){
    second += 1;
    secondElt.innerHTML = "0" + second ;
    msecond = 0;
    msecondElt.innerHTML = "0" +msecond ;
  }
  if(second>9){
    secondElt.innerHTML = second;
  }
  if(second>=60){
    min +=1;
    minElt.innerHTML = "0" + min ;
    second = 0;
    secondElt.innerHTML = "0"+ second ;
  }
  if(min>=60){
    hr +=1;
    hrElt.innerHTML = "0" +hr ;
    min = 0;
    minElt.innerHTML = "0" + min ;
  }
}
stopBtn.addEventListener("click",()=>{
  console.log("Hello");
  clearInterval(myInterval);
})
resetBtn.addEventListener("click",()=>{
  
  clearInterval(myInterval);
  console.log("hello");
  second = 0;
  msecond=0;
  min = 0;
  hr = 0;
  msecondElt.innerHTML="0"+msecond;
  secondElt.innerHTML ="0"+second;
  minElt.innerHTML = "0"+min;
  hrElt.innerHTML="0"+hr;
})
