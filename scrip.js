
onload= updatedate();

setInterval(updatedate,500);



function updatedate(){
  var date = new Date();
  var setdate=document.getElementById("set_date");
  var settime=document.getElementById("set_time");

  setdate.innerHTML=date.getDate()+"/" +parseInt(date.getMonth()+1)+"/"+date.getFullYear() ;
  settime.innerHTML=date.getHours()+":"+ date.getMinutes()+":"+date.getSeconds();

}
