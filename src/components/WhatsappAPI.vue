<template>
 
        <div>
            <button class="floating-button" @click="redirectToWhatsApp">
              <font-awesome-icon :icon="['fab', 'whatsapp']" style="font-size: 40px;" />
            </button>
          </div>
     

  </template>
  
  <script>
  export default {
methods:{
    redirectToWhatsApp() {
      const whatsappURL = 'https://api.whatsapp.com/send?phone=%2B918778033930&text=Hello%2C%20I%20have%20a%20query%20regarding%20MLOps%20Masterclass.';
      window.open(whatsappURL, '_blank');
    },
}
  };
  </script>
  