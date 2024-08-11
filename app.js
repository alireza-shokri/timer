const $=document;

let  time_elm=$.querySelector('.time')
let time;
let secend;
let minut;
let hour;

let fragment=$.createDocumentFragment();
let time_sanj=false;
let btn=$.querySelector('.btn');



function lop_time(){
    time=new Date();
    secend=time.getSeconds();
    minut=time.getMinutes();
    hour=time.getHours();
    if(secend<10)
        secend='0'+secend;
    if(minut<10)
        minut='0'+minut;
    if(hour<10)
        hour='0'+hour;

    time_elm.innerHTML=hour +':'+ minut +':'+secend;

    if(time_sanj)
            sound()
    }
setInterval(lop_time,1000);

// frist click statart 
function click_start_clear(){
   if( btn.getAttribute('work')=='start'){
       time_sanj=true;
       btn.innerHTML='clear';
       $.getElementById('hour').disabled=true;
       $.getElementById('minut').disabled=true;
       btn.setAttribute('work','clear');
   }
   else clear()
   
}
function clear(){
    time_sanj=false;
    btn.innerHTML='start';
    $.getElementById('hour').disabled=false;
    $.getElementById('minut').disabled=false;
    btn.setAttribute('work','start');
    $.getElementById('hour').value='00'
    $.getElementById('minut').value='00'
}


function sound(){
    if($.getElementById('minut').value==minut && $.getElementById('hour').value==hour){
        $.getElementById('sound').play();
        clear()
    }

}

function create(tadad){
    let new_option;
    for(let i=0;i<=tadad;i++){
        new_option=$.createElement('option');
        if(i<10){
            new_option.value='0'+i;
            new_option.innerHTML='0'+i;
        }
        if(new_option.value=='00'){
            new_option.hidden=true;
            new_option.selected=true;
        }
            
        else{
            new_option.value=i;
            new_option.innerHTML=i;
        }
        fragment.append(new_option)
    }
    return fragment;
}



$.getElementById('hour').appendChild(create(23))
$.getElementById('minut').appendChild(create(59))
btn.addEventListener('click',click_start_clear)