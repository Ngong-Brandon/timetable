

document.getElementById("footer").style.top = document.documentElement.scrollHeight - 500 +"px";
document.getElementById("explain").style.top = document.documentElement.scrollHeight - 500 +"px";
document.getElementById("pageEnd").style.top = window.innerHeight - 70 +"px";




//function get the input values and create the table with the inputs

function getDaySubjectAndTime(){
  let subjectList = document.querySelectorAll("#subject");
  let timeList = document.querySelectorAll("#time");



  //Objects holding the the subject and time turn off each day

  let Monday = {
    subject: subjectList[0].value,
    time: timeList[0].value
  }

  let Tuesday = {
    subject: subjectList[1].value,
    time: timeList[1].value
  }

  let Wednesday = {
    subject: subjectList[2].value,
    time: timeList[2].value
  }

  let Thursday = {
    subject: subjectList[3].value,
    time: timeList[3].value
  }

  let Friday = {
    subject: subjectList[4].value,
    time: timeList[4].value
  }

  let Saturday = {
    subject: subjectList[5].value,
    time: timeList[5].value
  }

  let Sunday = {
    subject: subjectList[6].value,
    time: timeList[6].value
  }



  let mondayDate = timeToRead(Monday.time.split(":")[0],Monday.time.split(":")[1]);
  let tuesdayDate = timeToRead(Tuesday.time.split(":")[0],Tuesday.time.split(":")[1]);
  let wednesdayDate = timeToRead(Wednesday.time.split(":")[0],Wednesday.time.split(":")[1]);
  let thursdayDate = timeToRead(Thursday.time.split(":")[0],Thursday.time.split(":")[1]);
  let fridayDate = timeToRead(Friday.time.split(":")[0],Friday.time.split(":")[1]);
  let saturdayDate = timeToRead(Saturday.time.split(":")[0],Saturday.time.split(":")[1]);
  let sundayDate = timeToRead(Sunday.time.split(":")[0],Sunday.time.split(":")[1]);

  console.log(mondayDate);
  console.log(new Date());





let newSection = document.getElementById("Table");

let inputs = document.getElementsByTagName("input");
let input;
//checking if all the inputs are filled
for(input of inputs){
  if(input.value == ""){
    alert("Please reload the page and make sure you fill all the fields... :)");

    break;
  }
}


 setInterval(() => {

  if(mondayDate.getDay() == 1 && new Date().getHours() == mondayDate.getHours() && new Date().getMinutes() == mondayDate.getMinutes()){
    alert(`⏰Time to read ${Monday.subject} can you kindly turn off your device and take some time to study...☺`);
  }

  if(tuesdayDate.getDay() == 2 && new Date().getHours() == tuesdayDate.getHours() && new Date().getMinutes() == tuesdayDate.getMinutes()){
    alert(`⏰Time to read ${Tuesday.subject} can you kindly turn off your device and take some time to study...☺`);
  }

  if(wednesdayDate.getDay() == 3 && new Date().getHours() == wednesdayDate.getHours() && new Date().getMinutes() == wednesdayDate.getMinutes()){
    alert(`⏰Time to read ${Wednesday.subject} can you kindly turn off your device and take some time to study...☺`);
  }

  if(thursdayDate.getDay() == 4 && new Date().getHours() == thursdayDate.getHours() && new Date().getMinutes() == thursdayDate.getMinutes()){
    alert(`⏰Time to read ${Thursday.subject} can you kindly turn off your device and take some time to study...☺`);
  }

  if(fridayDate.getDay() == 5 && new Date().getHours() == fridayDate.getHours() && new Date().getMinutes() == fridayDate.getMinutes()){
    alert(`⏰Time to read ${Friday.subject} can you kindly turn off your device and take some time to study...☺`);
  }

  if(saturdayDate.getDay() == 6 && new Date().getHours() == saturdayDate.getHours() && new Date().getMinutes() == saturdayDate.getMinutes()){
    alert(`⏰Time to read ${Saturday.subject} can you kindly turn off your device and take some time to study...☺`);
  }

  if(sundayDate.getDay() == 7 && new Date().getHours() == sundayDate.getHours() && new Date().getMinutes() == sundayDate.getMinutes()){
    alert(`⏰Time to read ${Sunday.subject} can you kindly turn off your device and take some time to study...☺`);
  }

}, 1000);


if(window.innerWidth > 760){
  

//Returns the table with input values if the are filled
return newSection.innerHTML = `

<table style = "
background-color: rgb(56, 40, 61);
padding: 20px;border-radius: 10px; border:2px
">
<tr class= "th-row">
<th><b>&#8986;</b></th><th>Monday</th><th>Tuesday</th><th>Wednsday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>
</tr>
<tr>
<td>SUBJECT</td><td>${Monday.subject}</td><td>${Tuesday.subject}</td><td>${Wednesday.subject}</td><td>${Thursday.subject}</td><td>${Friday.subject}</td><td>${Saturday.subject}</td><td>${Sunday.subject}</td>

</tr>
</tr>
<tr>
<td>TIME</td><td>${Monday.time}</td><td>${Tuesday.time}</td><td>${Wednesday.time}</td><td>${Thursday.time}</td><td>${Friday.time}</td><td>${Saturday.time}</td><td>${Sunday.time}</td>

</tr>
</table>


`
}
else{
  return newSection.innerHTML = `

  <table style = "
  background-color: rgb(56, 40, 61);
  padding: 20px;border-radius: 10px; border:2px
  ">
  <tr >
  <th><b>&#8986;</b></th><td>SUBJECT</td><td>TIME</td>
  </tr>
  <tr >
  <th>Monday</th><td>${Monday.subject}</td><td>${Monday.time}</td>
  </tr>
  <tr>
  <th>Tuesday</th><td>${Tuesday.subject}</td><td>${Tuesday.time}</td>
  
  </tr>
  <tr>
  <th>Wednesday</th><td>${Wednesday.subject}</td><td>${Wednesday.time}</td>
  
  </tr>
  <tr>
  <th>Thursday</th><td>${Thursday.subject}</td><td>${Thursday.time}</td>
  
  </tr>
  <tr>
  <th>Friday</th><td>${Friday.subject}</td><td>${Friday.time}</td>
  
  </tr>
  <tr>
  <th>Saturday</th><td>${Saturday.subject}</td><td>${Saturday.time}</td>
  
  </tr>
  <tr>
  <th>Sunday</th><td>${Sunday.subject}</td><td>${Sunday.time}</td>
  
  </tr>
  </table>
  
  

  `

  
}


  
}


 document.getElementById("create").addEventListener("click", (event)=>{
 event.preventDefault();

  
 document.getElementById("reading").style.display = "none";

 getDaySubjectAndTime();

 document.getElementById("downloaddiv").style.display = "inline";

 
})


function timeToRead(hour, minute){

  let current = new Date();
  let readDate = new Date(current.setHours(hour,minute,0,0));
  return  readDate;
}

function downloadtable(){
  localStorage.setItem({},getDaySubjectAndTime());
   let tablecode = localStorage.getItem({});
   const dataURI = `data:text/plain;charset=utf-8,${encodeURIComponent(tablecode)}`;
document.getElementById("download_link").setAttribute("href",dataURI);
document.getElementById("download_link").setAttribute("download","time-table");


}




