
    let now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let amPm=hours>=12 ? 'pm' : 'am'
     hours=hours%12;
     hours=hours ? hours : 12;
    minutes=minutes<10 ? '0'+minutes : minutes;
    var fulltime= hours +" : "+minutes+ ' '+amPm;
    alert(fulltime)
    // 

