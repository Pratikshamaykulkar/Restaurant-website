
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

  // Remove success message after 5 seconds (5000 milliseconds)
  setTimeout(function() {
    successMessage.remove();
  }, 5000);
});



// // // Add event listener to payment mode radio buttons
// onlinePaymentRadio.addEventListener('change', togglePaymentPlatforms);
// codPaymentRadio.addEventListener('change', togglePaymentPlatforms);

// // // Function to toggle visibility of payment platforms based on the selected payment mode
// function togglePaymentPlatforms() {
//   if (onlinePaymentRadio.checked) {
//     paymentPlatforms.style.display = 'block';
//   } else {
//     paymentPlatforms.style.display = 'none';
//   }
// }
//  // Get the payment mode radio buttons and the payment platform dropdown element
// const onlinePaymentRadio = document.getElementById('online-payment');
// const codPaymentRadio = document.getElementById('cod-payment');
// const paymentPlatforms = document.getElementById('payment-platforms');

// // // Add event listener to payment mode radio buttons
// onlinePaymentRadio.addEventListener('change', togglePaymentPlatforms);
// codPaymentRadio.addEventListener('change', togglePaymentPlatforms);

// // // Function to toggle visibility of payment platforms based on the selected payment mode
// function togglePaymentPlatforms() {
//   if (onlinePaymentRadio.checked) {
//     paymentPlatforms.style.display = 'block';
//   } else {
//     paymentPlatforms.style.display = 'none';
//   }
// }

// // Call the function initially to set the initial visibility based on the default checked payment mode
//  togglePaymentPlatforms();

