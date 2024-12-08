$(document).ready(function () {
    const colors = [
      "#FF5733", "#33FF57", "#3357FF", "#FF33B5", "#B533FF", "#33FFF5", "#F5FF33", "#FF8A33",
    ];
    let shiftHeld = false;
    let clickCounts = Array(25).fill(0);
  

    $(document).on("keydown", function (e) {
      if (e.key === "Shift") shiftHeld = true;
    });
    $(document).on("keyup", function (e) {
      if (e.key === "Shift") shiftHeld = false;
    });
  

    $(".box").each(function (index) {
      $(this).on("click", function () {
        clickCounts[index]++;
        const color = colors[Math.floor(Math.random() * colors.length)];
        $(this).css("background-color", color);
        $(this).text(clickCounts[index]);
  
        if (!shiftHeld) {
          $(".box").not(this).css("background-color", "#ddd").text("");
        }
      });
    });
  

    $("#reset").on("click", function () {
      $(".box").css("background-color", "#ddd").text("");
      clickCounts.fill(0);
    });
  });