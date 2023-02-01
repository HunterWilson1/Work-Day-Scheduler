
//made my own constant for the jquery btn
const saveButton = $(".saveBtn");

$(function () {

  //function displays time
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
