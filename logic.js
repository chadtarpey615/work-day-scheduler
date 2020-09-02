

$(document).ready(function () {


   let amHours = ["7am", "8am", "9am", "10am", "11am"];
   let pmHours = ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
   let colorChangeAll = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
   //let colorChangePm = [12, 13, 14, 15, 16, 17];
   const date = moment().format("MMM Do YY");




   $("#currentDay").text(moment().format("dddd[,] MMMM Do YYYY"));

   for (var i = 0; i < amHours.length; i++) {
      var newRow = $('<div class="row"> </div>').text(amHours[i]);
      $(".container").append(newRow);
      newRow.append($('<div class="col-md-1 time-block"></div>'));
      newRow.append($('<textarea input= text class="col-md-9 past"></textarea>'));
      newRow.append($('<button class="col-md-1 saveBtn saveBtn"></button>'));



   };

   for (var i = 0; i < pmHours.length; i++) {
      var nextLine = $('<div class="row"> </div>').text(pmHours[i]);
      $(".container").append(nextLine);
      nextLine.append($('<div class="col-md-1 time-block"></div>'));
      nextLine.append($('<textarea input= text class="col-md-9 past" ></textarea>'));

      nextLine.append($('<button class="col-md-1 saveBtn saveBtn"></button>'));


   };
   function classColor() {
      for (var i = 0; i < colorChangeAll.length; i++) {
         var currentTime = moment().format("H");

         if (parseInt(colorChangeAll[i] < currentTime)) {
            $("textarea").removeClass("future");
            $("textarea").removeClass("present");
            $("textarea").addClass("past")


         } else if (parseInt(colorChangeAll[i] > currentTime)) {
            $("textarea").removeClass("past");
            $("textarea").removeClass("present");
            $("textarea").addClass("future")


         } else if (parseInt(colorChangeAll[i] === currentTime)) {
            $("textarea").removeClass("future");
            $("textarea").removeClass("past");
            $("textarea").addClass("past")
         }
      }



      $("button").on("click", function () {
         var timeOfday = $(this).parent().attr("id");
         var textContent = $("textarea").val().trim();

         localStorage.setItem(timeOfday, textContent);
         console.log(timeOfday, textContent);
      });
      console.log(moment().format("H"));
   }






   // function for chaging event colors past present future


   //$("button").click(timeColorsAm());




});










// loop for the am hours and then a loop for the pm hours





// Parse into localStorage

