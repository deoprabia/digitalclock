/*

This digital clock will contain:
 - Displays the hours, minutes, seconds, and milliseconds 
 - When you click on the Time field, it will change between 12 and 24 times (AM and PM).
 - There will be a olan log olan button on the 3rd row, when this button is pressed, the time to push the button will be added to a list with the button.
 - A very good clockwork design 
- (optional) The user can reposition the digital clock with the drag & drop time. 
Topics to be learned:
 - setInterval() function 
 - drag & drop approach - epoch 
 */


$(document).ready(function () {
    function drawEpoch() {
        $("#epoch").val(Number(Date.now().toString()));
    };
    drawEpoch();
    
    // save the date in a textarea
    
    $("#logBtn").click(function () {
        let currentTime = $("#MyClockDisplay").html() + "  : Log clicked";
        let logOutput = $("#logOutput");
        logOutput.val(logOutput.html() + "\n" + currentTime);
    });
    
    // Make the DIV element draggable:
    $( function() {
        $( "#draggable" ).draggable();
      } );
    
    
 



 function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let ms = date.getMilliseconds() // 0 - 59

    let  session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    ms = (ms< 10) ? "0" + ms : ms;    
    let time = h + ":" + m + ":" + s +  ":" + ms + " " + session;
    document.getElementById("MyClockDisplay").innerHTML = time;
   
    
    function int() {
        setInterval(showTime, 1000);
    }

    int();
    
}

    
    


showTime();


});