

// document.getElementById("order-form").addEventListener("submit", function(e) {
//     e.preventDefault(); // Prevent form from submitting
  
//    
//     var name = document.getElementById("name").value;
//     var address = document.getElementById("address").value;
//     var phone = document.getElementById("phone").value;
//     var food = document.getElementById("food").value;

//     if (name === "" || address === "" || phone === "" || food === "") {
//       alert("Please fill in all fields.");
//       return;
//     }
  
//     alert("Order placed successfully!");
//     document.getElementById("order-form").reset(); // Reset form
//   });

  


document.getElementById("order-form").addEventListener("submit", function(e) {
  e.preventDefault(); 

  
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var food = document.getElementById("food").value;

  
  if (name === "" || address === "" || phone === "" || food === "") {
    alert("Please fill in all fields.");
    return;
  }

  
  var successMessage = document.createElement("p");
  successMessage.textContent = "Order placed successfully!";
  successMessage.style.color = "Red";
  document.getElementById("order-form").appendChild(successMessage);

  
  document.getElementById("order-form").reset();

  // Remove success message after 3 seconds (3000 milliseconds)
  setTimeout(function() {
    successMessage.remove();
  }, 3000);
});
