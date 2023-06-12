
document.addEventListener("DOMContentLoaded", function() {
    var paymentMethodRadios = document.querySelectorAll('input[name="payment-method"]');
    var paymentDetailsDiv = document.getElementById("payment-details");
  
    for (var i = 0; i < paymentMethodRadios.length; i++) {
      paymentMethodRadios[i].addEventListener("change", function() {
        if (this.value === "phonepay" || this.value === "googlepay" || this.value === "paytm") {
          paymentDetailsDiv.style.display = "block";
        } else {
          paymentDetailsDiv.style.display = "none";
        }
      });
    }
  });
  

  

