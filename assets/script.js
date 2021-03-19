var currentTime = document.getElementById('currentDay');
function timeslot() {
    var now = moment().format('MMMM Do YYYY , h:mm:ss a');
    currentTime.innerHTML = now;
}
var myVar = setInterval(timeslot, 1000);


// need to add var for each time slot
// how do i have the clock continusely running 
//have to change back ground color of text box when in past present future
// have to save console log events in an array

function timeChecker() {
    //grabing html el with time-block class
    //create an array to add class .past
    //loop over array of el 
    // inside loop check to see if cuurent hour is less than data hour on el .future
    // if curren hour is equal to data hour .present
    // if current hour is greater than data hour .past
    var timeBlocks = document.getElementsByClassName('time-block');
    var now = parseInt(moment().format('HH'));
    for (var i = 0; i < timeBlocks.length; i++) {
        console.log(timeBlocks[i]);

        var thisTimeBlock = timeBlocks[i]
        var timeBlockHour = $(thisTimeBlock).data("hour");
        if (now < timeBlockHour) {
            $(thisTimeBlock).find("#event_text").addClass("future")
        }
        if (now == timeBlockHour) {
            $(thisTimeBlock).find("#event_text").addClass("present")
        }
        if (now > timeBlockHour) {
            $(thisTimeBlock).find("#event_text").addClass("past")
        }

        console.log(now)
        console.log($(thisTimeBlock).data("hour"))
    }

}
timeChecker();


// when i click save when row is selected 
// when the save the is get by class
// 

$('.saveBtn').on('click', function () {
    var textValue = $(this).siblings('#event_text').val();

    var time = $(this).parent().attr("id"); //or .attr('id')

    localStorage.setItem(time, textValue)


});

console.log(localStorage)