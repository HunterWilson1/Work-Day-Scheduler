// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//made my own constant for the jquery btn
const saveButton = $(".saveBtn");

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  function time() {
    const dateTime = dayjs().format("MMM D, YYYY hh:mm a");
    document.getElementById("currentDay").innerHTML = dateTime;
  }
  setInterval(time, 1000);

  function tracker() {
    var currentHour = dayjs().hour();

    //this selects the elements with time-block class and does a function. It creates a variable (thisHour)
    //and sets the value of the var by getting the id of the hour in the element.Then splits value by the - and gets the next item in the array.
    $(".time-block").each(function () {
      var thisHour = $(this).attr("id").split("-")[1];

      //this compares the time that the thisHour variable pulls and the current hour.
      if (thisHour > currentHour) {
        $(this).addClass("future");
      } else if (thisHour == currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
      }
    });
  }

  //event handler for the save button so that the text description is saved to local storage.
  $(document).ready(function () {
    saveButton.on("click", function () {
      //retrives the value of id attribute from the parent element
      var time = $(this).parent().attr('id');
      //retrieves the text area description 
      var text = $(this).siblings(".description").val();
      //saves variables to local storage
      localStorage.setItem(time, text);
    });
  });
  tracker();

  //loads saved data from the local storage
  $('hour-9 .doc').val(localStorage.getItem('hour-9'));
  $('hour-10 .doc').val(localStorage.getItem('hour-10'));
  $('hour-11 .doc').val(localStorage.getItem('hour-11'));
  $('hour-12 .doc').val(localStorage.getItem('hour-12'));
  $('hour-13 .doc').val(localStorage.getItem('hour-13'));
  $('hour-14 .doc').val(localStorage.getItem('hour-14'));
  $('hour-15 .doc').val(localStorage.getItem('hour-15'));
  $('hour-16 .doc').val(localStorage.getItem('hour-16'));
  $('hour-17 .doc').val(localStorage.getItem('hour-17'));
});
// TODO: Add code to display the current date in the header of the page.
