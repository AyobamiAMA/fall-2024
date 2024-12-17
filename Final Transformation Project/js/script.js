$(document).ready(function () {
    const colors = [
      "#FF5733", "#33FF57", "#3357FF", "#FF33B5", "#B533FF", "#33FFF5", "#F5FF33", "#FF8A33",
    ];
    const fruits = ["Apple", "Orange", "Grape", "Banana", "Pineapple"];
    let shiftHeld = false;

    $(document).on("keydown", function (e) {
      if (e.key === "Shift") shiftHeld = true;
    });
    $(document).on("keyup", function (e) {
      if (e.key === "Shift") shiftHeld = false;
    });

    $(".box").each(function (index) {
      let rotation = 0; 

      $(this).on("click", function () {
  
        rotation += 45;
        $(this).css("transform", `rotate(${rotation}deg)`);

       
        const color = colors[Math.floor(Math.random() * colors.length)];
        const bgColor = colors[Math.floor(Math.random() * colors.length)];
        $("body").css("background-color", bgColor); 
        $(this).css("background-color", color);

      
        const fruit = fruits[Math.floor(Math.random() * fruits.length)];
        $(this).text(fruit);

        if (!shiftHeld) {
          $(".box").not(this).css("background-color", "#ddd").css("transform", "rotate(0deg)").text("");
        }
      });
    });

    $("#reset").on("click", function () {
      $(".box").css({
        "background-color": "#ddd",
        "transform": "rotate(0deg)"
      }).text("");
      $("body").css("background-color", "#fff");
    });
});