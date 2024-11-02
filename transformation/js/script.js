$(document).ready(function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33B5", "#B533FF", "#33FFF5", "#F5FF33", "#FF8A33"];
    
    $(".box").each(function(index) {
      let toggled = false;
      $(this).on("click", function() {
        if (toggled) {
          $(this).css("background-color", "#ddd"); // Original color
        } else {
          $(this).css("background-color", colors[index % colors.length]); // Toggle to a new color
        }
        toggled = !toggled; // Flip the toggle state
      });
    });
  });