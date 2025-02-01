document.addEventListener("DOMContentLoaded", function () {
  // Create the button element
  var button = document.createElement("button");
  button.innerHTML = "Need Help?";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.padding = "10px 20px";
  button.style.backgroundColor = "#d22a30";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.fontSize = "1.25em";

  // Add hover effect
  button.onmouseover = function () {
    button.style.backgroundColor = "white";
    button.style.color = "Black";
    button.style.border = "1px solid Black";
  };
  button.onmouseout = function () {
    button.style.backgroundColor = "#d22a30";
    button.style.color = "White";
    button.style.border = "none";
  };

  // Set the button click event
  button.onclick = function () {
    window.open("https://bfshelp.freshdesk.com", "_blank");
  };

  // Append the button to the body
  document.body.appendChild(button);
});
