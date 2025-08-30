function checkclock(){
    const date=new Date();
    let h=date.getHours();
    let minutes=date.getMinutes().toString().padStart(2,0);
    let seconds=date.getSeconds().toString().padStart(2,0);
    let af=h>=12 ? 'PM ': 'AM'
    h=h%12;
    h=h%12 ||12;
    h=h.toString().padStart(2,0);
    const time =`${h}:${minutes}:${seconds} ${af}`;

    document.getElementById("clock").textContent=time;


}
checkclock();

setInterval(checkclock,1000)
