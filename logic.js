 // get items from localStorage
 function getPlans() {
   $("textarea").each(function (element) {
      var key = $(this).attr("id");
   $(this).append(localStorage.getItem(JSON.stringify(key)));
   console.log($(this).val());
   });
}

$(document).ready(function () {

   let amHours = [" 7am", " 8am", " 9am", "10am", "11am", "12pm"];
   let pmHours = [" 1pm", " 2pm", " 3pm", " 4pm", " 5pm"];
   const date = moment().format("MMM Do YY");
   var currentTime = moment().format("H");


   $("#currentDay").text(moment().format("dddd[,] MMMM Do YYYY"));

   // create elements with JQuery row, textarea, and buttons
   for (var i = 0; i < amHours.length; i++) {
      var newRow = $('<div class="time-block row"> </div>');
      $(".container").append(newRow);
      newRow.append($('<div class=" hour col-md-1"></div>').text(amHours[i]));

      if (parseInt(amHours[i]) < currentTime) {
         newRow.append($('<textarea id="' + parseInt(amHours[i]) + '" input= text class="description col-md-10 past"></textarea>'));

      } else if (parseInt(amHours[i]) == currentTime) {
         newRow.append($('<textarea id="' + parseInt(amHours[i]) + '" input= text class="description col-md-10 present"></textarea>'));

      } else {
         newRow.append($('<textarea id="' + parseInt(amHours[i]) + '" input= text class="description col-md-10 future"></textarea>'));

      }
      newRow.append($('<button data-hour= "' + parseInt(amHours[i]) + ' " class="col-md-1 saveBtn fas fa-clipboard"></button>'));
   };

   for (var i = 0; i < pmHours.length; i++) {
      var nextLine = $('<div class="time-block row"> </div>');
      $(".container").append(nextLine);
      nextLine.append($('<div class="col-md-1 hour"></div>').text(pmHours[i]));

      if ((parseInt(pmHours[i]) + 12) < currentTime) {
         nextLine.append($('<textarea id="' + (parseInt(pmHours[i]) + 12) + '" input= text class="description col-md-10 past"></textarea>'));


      } else if ((parseInt(pmHours[i]) + 12) == currentTime) {
         nextLine.append($('<textarea id="' + (parseInt(pmHours[i]) + 12) + '" input= text class="description col-md-10 present"></textarea>'));

      } else {
         nextLine.append($('<textarea id="' + (parseInt(pmHours[i]) + 12) + '" input= text class="description col-md-10 future"></textarea>'));

      }
      nextLine.append($('<button data-hour="' + (parseInt(pmHours[i]) + 12) + '" class="col-md-1  saveBtn saveBtn fas fa-clipboard"></button>'));


   };
   

   // save to local storage

   $("button").on("click", function (event) {
      event.preventDefault();
      var hour = $(this).prev().attr("id");
   
      var plan = $(this).prev().val();
   
      localStorage.setItem(JSON.stringify(hour), plan);
      //console.log($(this).prev().attr("id"));
      //console.log($(this).prev().val());
   
   
   })

   getPlans();

});




