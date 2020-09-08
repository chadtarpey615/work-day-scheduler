 function getPlans() {
   $("textarea").each(function (element) {
      $(this).attr("id", element);
   $(this).append(localStorage.getItem(localStorage.key(element)));
   console.log($(this).val());
   });
}

$(document).ready(function () {

   let amHours = [" 7am", " 8am", " 9am", "10am", "11am", "12pm"];
   let pmHours = [" 1pm", " 2pm", " 3pm", " 4pm", " 5pm"];
   const date = moment().format("MMM Do YY");
   var currentTime = moment().format("H");



   $("#currentDay").text(moment().format("dddd[,] MMMM Do YYYY"));

   for (var i = 0; i < amHours.length; i++) {
      var newRow = $('<div class="row"> </div>').text(amHours[i]);
      $(".container").append(newRow);
      newRow.append($('<div class="col-md-1 time-block"></div>'));

      if (parseInt(amHours[i]) < currentTime) {
         newRow.append($('<textarea id="' + parseInt(amHours[i]) + '" input= text class="col-md-9 past"></textarea>'));

      } else if (parseInt(amHours[i]) == currentTime) {
         newRow.append($('<textarea id="' + parseInt(amHours[i]) + '" input= text class="col-md-9 present"></textarea>'));

      } else {
         newRow.append($('<textarea id="' + parseInt(amHours[i]) + '" input= text class="col-md-9 future"></textarea>'));

      }
      newRow.append($('<button data-hour= "' + parseInt(amHours[i]) + ' " class="col-md-1 saveBtn saveBtn fas fa-clipboard"></button>'));
      //console.log(parseInt(amHours[i]));
   };

   for (var i = 0; i < pmHours.length; i++) {
      var nextLine = $('<div class="row"> </div>').text(pmHours[i]);
      $(".container").append(nextLine);
      nextLine.append($('<div class="col-md-1 time-block"></div>'));

      if ((parseInt(pmHours[i]) + 12) < currentTime) {
         nextLine.append($('<textarea id="' + (parseInt(pmHours[i]) + 12) + '" input= text class="col-md-9 past"></textarea>'));


      } else if ((parseInt(pmHours[i]) + 12) == currentTime) {
         nextLine.append($('<textarea id="' + (parseInt(pmHours[i]) + 12) + '" input= text class="col-md-9 present"></textarea>'));

      } else {
         nextLine.append($('<textarea id="' + (parseInt(pmHours[i]) + 12) + '" input= text class="col-md-9 future"></textarea>'));

      }
      nextLine.append($('<button data-hour="' + (parseInt(pmHours[i]) + 12) + '" class="col-md-1  saveBtn saveBtn fas fa-clipboard"></button>'));

      //classColor();




   };
   // tried to do it with a function //

   //function classColor(hours, row) {
   //for (var i = 0; i < colorChangeAll.length; i++) {
   // if (parseInt(hours < currentTime)) {
   //    $("textarea").removeClass("future");
   //    $("textarea").removeClass("present");
   //    $("textarea").addClass("past")


   // } else if (parseInt(hours > currentTime)) {
   //    $("textarea").removeClass("past");
   //    $("textarea").removeClass("present");
   //    $("textarea").addClass("future")


   // } else if (parseInt(hours === currentTime)) {
   //    $("textarea").removeClass("future");
   //    $("textarea").removeClass("past");
   //    $("textarea").addClass("past")
   // }
   //}


   // save to local storage

   




   // to get items out of local storage

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




