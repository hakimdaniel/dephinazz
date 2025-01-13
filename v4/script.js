function go(link) {
  location.href = link;
}
// Show popup with fade in effect
window.onload = function () {
  var popup = document.getElementById("popup");
  popup.style.display = "flex";
  setTimeout(function () {
    popup.style.opacity = 1;
    document.body.style.overflow = "hidden";
  }, 1000);
};

// Close popup with fade out effect when background is clicked
function closePopup(event) {
  if (event.target === event.currentTarget) {
    var popup = document.getElementById("popup");
    popup.style.opacity = 0;
    setTimeout(function () {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
    }, 500);
  }
}
