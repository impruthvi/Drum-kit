var numOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("click");
  });
}
