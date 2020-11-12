import React from 'react'
import { Line } from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css'

function formatDate(date){

    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = yyyy+'-'+mm+'-'+dd;
    return date
 }


      var today = new Date();
      var oneDayAgo = new Date(today);
      var twoDaysAgo = new Date(today);
      var threeDaysAgo = new Date(today);
      var fourDaysAgo = new Date(today);
      var fiveDaysAgo = new Date(today);
      var sixDaysAgo = new Date(today);

      oneDayAgo.setDate(today.getDate() - 1);
      twoDaysAgo.setDate(today.getDate() - 2);
      threeDaysAgo.setDate(today.getDate() - 3);
      fourDaysAgo.setDate(today.getDate() - 4);
      fiveDaysAgo.setDate(today.getDate() - 5);
      sixDaysAgo.setDate(today.getDate() - 6);

      var result0 = formatDate(today);
      var result1 = formatDate(oneDayAgo);
      var result2 = formatDate(twoDaysAgo);
      var result3 = formatDate(threeDaysAgo);
      var result4 = formatDate(fourDaysAgo);
      var result5 = formatDate(fiveDaysAgo);
      var result6 = formatDate(sixDaysAgo);

function MoodChart(props) {
    let moodValues = []

    let pastWeek = [result6, result5, result4, result3, result2, result1, result0]

   let value6 = props.logs.filter(log => log.date == result6)
   let value5 = props.logs.filter(log => log.date == result5)
   let value4 = props.logs.filter(log => log.date == result4)
   let value3 = props.logs.filter(log => log.date == result3)
   let value2 = props.logs.filter(log => log.date == result2)
   let value1 = props.logs.filter(log => log.date == result1)
   let value0 = props.logs.filter(log => log.date == result0)


   if (value6.length > 0){
    moodValues.push(value6[0].mood.value)
   }
   else{
    moodValues.push(0)
   }

   if (value5.length > 0){
    moodValues.push(value5[0].mood.value)
   }
   else{
    moodValues.push(0)
   }

   if (value4.length > 0){
    moodValues.push(value4[0].mood.value)
   }
   else{
    moodValues.push(0)
   }

   if (value3.length > 0){
    moodValues.push(value3[0].mood.value)
   }
   else{
    moodValues.push(0)
   }
  
   if (value2.length > 0){
    moodValues.push(value2[0].mood.value)
   }
   else{
    moodValues.push(0)
   }

   if (value1.length > 0){
    moodValues.push(value1[0].mood.value)
   }
   else{
    moodValues.push(0)
   }

   if (value0.length > 0){
    moodValues.push(value0[0].mood.value)
   }
   else{
    moodValues.push(0)
   }

       
    const data = {
        labels: pastWeek,
        datasets: [
            {
                label: 'Mood Over Past 7 Days',
                data: moodValues,
                

                
            }
        ]

    }

    return (
        <center>
            <br></br>
        <div className="chart">
            <br></br>
            <Line data={data} />
        </div>
        </center>
        
    )
}

export default MoodChart
