$(function () {

    //
    $(".burgerDevoured").on("click", function (event) {
      var id = $(this).data("id");
      var newDevouredBurger = $(this).data("newDevouredBurger");
  
      var newDevouredBurgerState = {
        devoured: newDevouredBurger
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredBurgerState
      }).then(
        function () {
          location.reload();
        }
      );
    });
  
    //
    $(".burgerForm").on("submit", function (event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim()
      };
  
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          location.reload();
        }
      );
    });
  });