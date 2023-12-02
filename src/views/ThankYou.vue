<!-- ThankYou.vue -->
<template>
  <div>
    <div class="common-layout">
      <el-header style="background-color: #1b053e; display: flex; justify-content: space-between; align-items: center; padding: 20px 20px; ">
        <el-image style="width: 50px; height: 50px; margin-right: 10px;" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/psitron_logo_wit_small.png" fit="fill" />
        <nav style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center;">
        </nav>
      </el-header>
      <br>
      <div class="container">
        
        <h1>Thank You for Registering!</h1>
        <p>Your registration for the <strong>MLOps Specialization Course</strong> has been confirmed.</p>
        <p>You will receive further information in upcoming dates.</p>
    
        <div class="contact-info">
          <p>For more information, please contact:</p>
          <p>Name: Sarath Kumar</p>
          <p>Email: <a :href="'mailto:' + email">sarath@psitrontech.com</a></p>
          <p>Phone: <a :href="'tel:' + phone">+91 8778033930</a></p>
          <p>Website: <a :href="website" target="_blank">www.psitrontech.com</a></p>
        </div>
      </div>
     
    </div>
    <WhatsappAPI></WhatsappAPI>
  </div>


  

</template>

<script>
import WhatsappAPI from '@/components/WhatsappAPI.vue'

export default {
  components:{
    WhatsappAPI
  },
  data() {
    return {
      email: 'sarath@psitrontech.com',
      phone: '+918778033930',
      website: 'http://www.psitrontech.com'
    };
  },

  mounted() {
    // Include the Facebook Pixel script in the mounted lifecycle hook
    const script = document.createElement('script');
    script.text = `fbq('track', 'Purchase', { currency: "INR", value: 39999 });`;
    document.head.appendChild(script);
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.container {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}

p {
  color: #666;
}

.contact-info {
  margin-top: 20px;
}

.contact-info a {
  color: #007bff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}
</style>
