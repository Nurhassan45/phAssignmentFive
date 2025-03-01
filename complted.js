document.getElementById('btn1').addEventListener('click',function(){
 alert('the Taskis Complete');
 
 addvalue(1);
 removeValue(1);
 document.getElementById('btn1').style.backgroundColor='#cac1c1a8'
    document.getElementById('btn1').disabled=true;
  let header=document.getElementById('heading').innerText;
  let addingDiv= document.getElementById('addDiv');
  var currentdate = new Date();
  var hour=currentdate.getHours();
  var convertedHour = Math.floor(hour/2);
  var minute=currentdate.getMinutes();
  var secend=currentdate.getSeconds();
  var fulltime= convertedHour +" hour "+minute+" minute "+secend+" secend `";
  let p =document.createElement('p');
  p.innerText=`
  the assignment succseefully added from ${header} at ${fulltime}
  `
  addingDiv.appendChild(p);
 

})


  //date and time
  var currentdate = new Date();
  var month = currentdate.getMonth()+1;
  var date = currentdate.getDate();
  var year = currentdate.getFullYear();
  
var fulldate= date +"/"+month+"/"+year;
document.getElementById('date').innerText=fulldate;


//for color Change Button

let body=document.getElementById('bodySohel');
let buttonn=document.getElementById('themebtn');
const color=['violet','red','green','yellow'];
body.style.backgroundColor='white';
buttonn.addEventListener('click',function(){
    let colorIndex =parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];

})

//for Clear History

document.getElementById('clearHistory').addEventListener('click',function(){
   btn= document.getElementById('addDiv').style.display='none';
   
})

document.getElementById('btn2').addEventListener('click',function(){
    alert('the Taskis Complete');
    addvalue(1);
    removeValue(1);
    document.getElementById('btn2').style.backgroundColor='#cac1c1a8'
    document.getElementById('btn2').disabled=true;
  })
  //for btn3
document.getElementById('btn3').addEventListener('click',function(){
    alert('the Taskis Complete');
    addvalue(1);
    removeValue(1);
    document.getElementById('btn3').style.backgroundColor='#cac1c1a8'
    document.getElementById('btn3').disabled=true;
  })
    //for btn4
document.getElementById('btn4').addEventListener('click',function(){
    alert('the Taskis Complete');
    addvalue(1);
    removeValue(1);
    document.getElementById('btn4').style.backgroundColor='#cac1c1a8'
    document.getElementById('btn4').disabled=true;
  })

    //for btn5
document.getElementById('btn5').addEventListener('click',function(){
    alert('the Taskis Complete');
    addvalue(1);
    removeValue(1);
    document.getElementById('btn5').style.backgroundColor='#cac1c1a8'
    document.getElementById('btn5').disabled=true;
  })

    //for btn6
document.getElementById('btn6').addEventListener('click',function(){
    alert('the Taskis Complete');
    addvalue(1);
    removeValue(1);
    document.getElementById('btn6').style.backgroundColor='#cac1c1a8'
    document.getElementById('btn6').disabled=true;
  })
function addvalue( valu){
    let values =document.getElementById('23Value').innerText;
    let convertedValue=parseInt(values)
    convertedValue+=valu;
    document.getElementById('23Value').innerText=convertedValue;
}
function removeValue(valueRemove){
    let values =document.getElementById('6value').innerText;
    let convertedValue=parseInt(values)
    convertedValue=convertedValue-valueRemove;
    document.getElementById('6value').innerText=convertedValue;
}
function diable(id){
    document.getElementById('id').style.backgroundColor='#cac1c1a8'
    document.getElementById('id').disabled=true;

}