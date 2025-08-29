function checkclock(){
    const date=new Date();
    let h=date.getHours().toString().padStart(2,0);
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let af=h>=12 ? 'PM ': 'AM'
    h=h%12;
    h=h%12 ||12;
    const time =`${h}:${minutes}:${seconds} ${af}`;

    document.getElementById("clock").textContent=time;


}
checkclock();
setInterval(checkclock,1000)