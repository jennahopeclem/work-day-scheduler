// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var timeBlock = $(".time-block")

  timeBlock.on("click", ".saveBtn", function () {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings("textarea").val();
    localStorage.setItem(key, value);
  });


  timeBlock.each(function () {
    var key = $(this).attr("id");
    var value = localStorage.getItem(key);
    $(this).children("textarea").val(value);
  });


  // TODO: Add code to display the current date in the header of the page.


  // Put in date with date.js 
  function displayTime() {
    setInterval(function () {
      $('#currentDay').text((dayjs()).format('dddd, MM, YYYY [-] h:mm:ss a'));
    }, 1000);
  };

  var currentHour = (dayjs()).format('HH');

  // function checkHour() {
  timeBlock.each(function () {
    var colorHour = parseInt($(this).attr("id").split("-")[1]);
    // console.log(currentHour, colorHour);
    if (colorHour < currentHour) {
      $(this).addClass("past");
    } if (colorHour > currentHour) {
      $(this).addClass("future");
      // console.log(checkHour);
    } else if (colorHour == currentHour) {
      $(this).addClass("present");
    }
  })
}
);



// save btn = localStorage.setItem - clickEvent (key = ID, (?))