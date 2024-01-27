<template>
    <div>
      <!-- Your Vue.js template code here -->
  
      <!-- Form containing Razorpay payment button script -->
      <form ref="razorpayForm">
        <!-- Content inside the form, if needed -->
      </form>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Access the form element using the ref
      const formElement = this.$refs.razorpayForm;
  
      // Create a script element
      const script = document.createElement("script");
  
      // Set the script source to the Razorpay payment button script
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_NTVn9uOSPJtbmM";
  
      // Append the script to the form element
      formElement.appendChild(script);
    },
  };
  </script>
  