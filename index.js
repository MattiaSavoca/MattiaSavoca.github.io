let clock = document.getElementById("clock");

function update(){
    timeEvent=document.getElementById("timeEvent")
    currentTime=new Date();
    hours = currentTime.getHours();
    hours=Number(hours)
    if(hours>12){
        hours-=12
        meridian="PM"
    }
    else{
        meridian="AM"
    }
    mins = currentTime.getMinutes();
    secs = currentTime.getSeconds();
    hours=pad(hours);
    mins=pad(mins);
    secs=pad(secs);
    clock.innerHTML=`${hours}:${mins}:${secs}${meridian}`
    hours=Number(hours);
    
lolcatImg=document.getElementById("lolcatImg");

selectBtn1=document.getElementById("selectBtn1");
selectBtn2=document.getElementById("selectBtn2");
selectBtn3=document.getElementById("selectBtn3");

wakeUp=selectBtn1.options[selectBtn1.selectedIndex].text;
lunchTime=selectBtn2.options[selectBtn2.selectedIndex].text;
napTime=selectBtn3.options[selectBtn3.selectedIndex].text;
checkTime=`${hours}-${hours+=1} ${meridian}`
if(party){
    lolcatImg.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg"
    timeEvent.style.visibility="visible"
    timeEvent.textContent="Let's Party!"

}
else if(wakeUp==checkTime){
lolcatImg.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg"
lolcatImg.style.objectFit="contain"
timeEvent.style.visibility="visible"
timeEvent.textContent="Good Morning!"

}
else if(lunchTime==checkTime){

    lolcatImg.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    lolcatImg.style.objectFit="contain"
    timeEvent.style.visibility="visible"
    timeEvent.textContent="Good Lunch!"


}
else if(napTime==checkTime){
    lolcatImg.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    lolcatImg.style.objectFit="contain"
    timeEvent.style.visibility="visible"
    timeEvent.textContent="Let's Sleep Zzzz!"


}
else{
        lolcatImg.src="tokyo manji cats.jpg"
        timeEvent.style.visibility="hidden"

    }

}

 function pad(unit){
    return (("0")+unit).length > 2 ? unit :"0"+ unit
}


let currentTime=new Date();
let hours= currentTime.getHours();
if(hours>12){
    hours-=12
    meridian="PM"
}
else{
    meridian="AM"
}

 let interval=setInterval(update,1000)
 let partyBtn=document.getElementById("partyBtn")
 let party=false;
 partyBtn.addEventListener("click",partyActivation);

function partyActivation(){
    if(party==false){
        party=true
        partyBtn.style.backgroundColor= "blue";

    }
    else if(party){
        party=false;
        partyBtn.style.backgroundColor= "#222";
    }

}





 