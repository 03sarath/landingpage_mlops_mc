<template>
  <div>
    <el-header style="background-color: #1b053e; display: flex; justify-content: space-between; align-items: center; padding: 20px 20px; ">
      
      <nav style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center;">
        <!-- <router-link to="https://psitrontech.com/" style="margin: 5px;">Curriculum</router-link> -->
        <!-- <router-link to="/about" style="margin: 5px;">About</router-link> -->
        <i @click="go_back()" style="color:white; font-size: 30px;" class="el-icon-back"></i>

      </nav>
      <el-image style="width: 50px; height: 50px; margin-right: 10px;" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/psitron_logo_wit_small.png" fit="fill" />
    </el-header>
    <el-main >
      <div class="container">
        <div class="row">
          <div class="col">
            <p style="font-size: 25px; text-align: left; padding-top: 5px;"><b>MLOps Specialization Course</b></p>
            <p style="font-size: 15px; text-align: left; padding-bottom: 5px;"><b>6 Jan 2023 | 7:00 PM IST Onwards</b></p>
            <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button style="font-size: 25px" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <span style="color:rgb(255, 123, 0)"><b>Indian participant</b></span>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            
              <div class="container">
                <div class="row">
                  <div class="col" style="text-align: left;">
                   <h3>Basic Plan</h3>
                   <h4 style="color: gray;">₹39,999</h4>
                   <el-link @click="hide_info_basic_in = true, more_info_basic_in = false" v-if="more_info_basic_in == true" type="primary"><i class="el-icon-info"></i>More Info</el-link>
                   <el-link @click="hide_info_basic_in = false, more_info_basic_in = true" v-if="hide_info_basic_in == true" type="primary"><i class="el-icon-info"></i>Hide Info</el-link>
                  
                  </div>
                  <div class="col">
                    <br>
                    <!-- <el-button @click="centerDialogVisible = true" class="dynamic-button">Register Now</el-button> -->
      
                    <!-- <form ref="razorpayForm1">
                      
                    </form> -->
                    <basic_in></basic_in>
                  </div>
                </div>
                
                <ul v-if="hide_info_basic_in == true" style="color:gray; font-size: 15px; text-align: left;">
                  <li style="gray: black; font-size: 15px; text-align: left;" class="topic-item">Live training</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Access to Recordings</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Debugging sessions</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">FREE Resources
                    <ul style="color:gray; font-size: 13px; text-align: left;">
                      <li style="gray: black; font-size: 13px; text-align: left;" class="topic-item">eBooks</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Webinars</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Job Update</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">FREE Resources</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Interview questions</li>
                    </ul>
                  </li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Community Support</li>
                </ul>
                <hr>
                
                <div class="row">
                  <div class="col" style="text-align: left;">
                   <h3>Advanced Plan</h3>
                   <h4 style="color: gray;">₹41,999</h4>
                   <el-link @click="hide_info_adv_in = true, more_info_adv_in = false" v-if="more_info_adv_in == true" type="primary"><i class="el-icon-info"></i>More Info</el-link>
                   <el-link @click="hide_info_adv_in = false, more_info_adv_in = true" v-if="hide_info_adv_in == true" type="primary"><i class="el-icon-info"></i>Hide Info</el-link>
                   <br>
                  </div>
                  <div class="col">
                    <br>
                    <!-- <el-button @click="centerDialogVisible = true" class="dynamic-button">Register Now</el-button> -->
      
                    <!-- <form ref="razorpayForm2">
                   
                    </form> -->
                    <advanced_in></advanced_in>
                 
                  </div>
                </div>
                <ul v-if="hide_info_adv_in == true" style="color:gray; font-size: 15px; text-align: left;">
                  <li style="gray: black; font-size: 15px; text-align: left;" class="topic-item">Live training</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Access to Recordings</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Debugging sessions</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">FREE Resources
                    <ul style="color:gray; font-size: 13px; text-align: left;">
                      <li style="gray: black; font-size: 13px; text-align: left;" class="topic-item">eBooks</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Webinars</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Job Update</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">FREE Resources</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Interview questions</li>
                    </ul>
                  </li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Community Support</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Resume preparation</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item"><b>6 Month</b> Job Support</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Bonus reattendance opportunity <br> <i style="font-size: 12px;"><i class="el-icon-info"></i> One sign-up, two chances to attend</i> </li>
                </ul>
                <hr>
                <div class="row">
                  <div class="col" style="text-align: left;">
                   <h3>Advanced Plus Plan</h3>
                   <h4 style="color: gray;">₹47,999</h4>
                   <el-link @click="hide_info_advp_in = true, more_info_advp_in = false" v-if="more_info_advp_in == true" type="primary"><i class="el-icon-info"></i>More Info</el-link>
                   <el-link @click="hide_info_advp_in = false, more_info_advp_in = true" v-if="hide_info_advp_in == true" type="primary"><i class="el-icon-info"></i>Hide Info</el-link>
                  </div>
                 
                  <div class="col">
                    <br>
                    <!-- <el-button @click="centerDialogVisible = true" class="dynamic-button">Register Now</el-button> -->
      
                    <!-- <form ref="razorpayForm3">
                     
                    </form> -->
                    <advancedplus_in></advancedplus_in>
                  </div>
                </div>
              
                <ul v-if="hide_info_advp_in == true" style="color:gray; font-size: 15px; text-align: left;">
                  <li style="gray: black; font-size: 15px; text-align: left;" class="topic-item">Live training</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Access to Recordings</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Debugging sessions</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">FREE Resources
                    <ul style="color:gray; font-size: 13px; text-align: left;">
                      <li style="gray: black; font-size: 13px; text-align: left;" class="topic-item">eBooks</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Webinars</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Job Update</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">FREE Resources</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Interview questions</li>
                    </ul>
                  </li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Community Support</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Resume preparation</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item"><b>1 Year</b> Job Support</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Bonus reattendance opportunity <br> <i style="font-size: 12px;"><i class="el-icon-info"></i> One sign-up, two chances to attend</i></li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Instant access <br> <i style="font-size: 12px;"><i class="el-icon-info"></i> Access to previous batch recordings</i></li>
                </ul>
                <hr>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button style="font-size: 25px" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <span style="color:rgb(255, 123, 0)"><b>International Participant</b></span>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="container">
                <div class="row">
                  <div class="col" style="text-align: left;">
                   <h3>Basic Plan</h3>
                   <h4 style="color: gray;">$549</h4>
                   <el-link @click="hide_info_basic_us = true, more_info_basic_us = false" v-if="more_info_basic_us == true" type="primary"><i class="el-icon-info"></i>More Info</el-link>
                   <el-link @click="hide_info_basic_us = false, more_info_basic_us = true" v-if="hide_info_basic_us == true" type="primary"><i class="el-icon-info"></i>Hide Info</el-link>
                  </div>
                  <div class="col">
                    <br>
                    <!-- <el-button @click="centerDialogVisible = true" class="dynamic-button">Register Now</el-button> -->
                    <!-- <form ref="razorpayForm4">
                     
                    </form> -->
                  <basic_us></basic_us>
                  </div>
                </div>
                <ul v-if="hide_info_basic_us == true" style="color:gray; font-size: 15px; text-align: left;">
                  <li style="gray: black; font-size: 15px; text-align: left;" class="topic-item">Live training</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Access to Recordings</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Debugging sessions</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">FREE Resources
                    <ul style="color:gray; font-size: 13px; text-align: left;">
                      <li style="gray: black; font-size: 13px; text-align: left;" class="topic-item">eBooks</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Webinars</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Job Update</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">FREE Resources</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Interview questions</li>
                    </ul>
                  </li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Community Support</li>
                </ul>
                <hr>
                <div class="row">
                  <div class="col" style="text-align: left;">
                   <h3>Advanced Plan</h3>
                   <h4 style="color: gray;">$599</h4>
                   <el-link @click="hide_info_adv_us = true, more_info_adv_us = false" v-if="more_info_adv_us == true" type="primary"><i class="el-icon-info"></i>More Info</el-link>
                   <el-link @click="hide_info_adv_us = false, more_info_adv_us = true" v-if="hide_info_adv_us == true" type="primary"><i class="el-icon-info"></i>Hide Info</el-link>
                  </div>
                  <div class="col">
                    <br>
                    <!-- <el-button @click="centerDialogVisible = true" class="dynamic-button">Register Now</el-button> -->
      
                    <!-- <form ref="razorpayForm5">
                     
                    </form> -->
                    <advanced_us></advanced_us>
                  </div>
                </div>
                <ul v-if="hide_info_adv_us == true" style="color:gray; font-size: 15px; text-align: left;">
                  <li style="gray: black; font-size: 15px; text-align: left;" class="topic-item">Live training</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Access to Recordings</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Debugging sessions</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">FREE Resources
                    <ul style="color:gray; font-size: 13px; text-align: left;">
                      <li style="gray: black; font-size: 13px; text-align: left;" class="topic-item">eBooks</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Webinars</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Job Update</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">FREE Resources</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Interview questions</li>
                    </ul>
                  </li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Community Support</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Resume preparation</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item"><b>6 Month</b> Job Support</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Bonus reattendance opportunity <br> <i style="font-size: 12px;"><i class="el-icon-info"></i> One sign-up, two chances to attend</i> </li>
                </ul>
                <hr>
                <div class="row">
                  <div class="col" style="text-align: left;">
                   <h3>Advanced Plus Plan</h3>
                   <h4 style="color: gray;">$699</h4>
                   <el-link  @click="hide_info_advp_us = true, more_info_advp_us = false" v-if="more_info_advp_us == true" type="primary"><i class="el-icon-info"></i>More Info</el-link>
                   <el-link  @click="hide_info_advp_us = false, more_info_advp_us = true" v-if="hide_info_advp_us == true" type="primary"><i class="el-icon-info"></i>Hide Info</el-link>
                 
                  </div>
                  <div class="col">
                    <br>
                    <!-- <el-button @click="centerDialogVisible = true" class="dynamic-button">Register Now</el-button> -->
                    <!-- <form ref="razorpayForm6">
                     
                    </form> -->
                    <advancedplus_us></advancedplus_us>
                  </div>
                </div>
                <ul v-if="hide_info_advp_us == true" style="color:gray; font-size: 15px; text-align: left;">
                  <li style="gray: black; font-size: 15px; text-align: left;" class="topic-item">Live training</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Access to Recordings</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Debugging sessions</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">FREE Resources
                    <ul style="color:gray; font-size: 13px; text-align: left;">
                      <li style="gray: black; font-size: 13px; text-align: left;" class="topic-item">eBooks</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Webinars</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Job Update</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">FREE Resources</li>
                      <li style="gray: black; font-size: 13px; text-align: left; " class="topic-item">Interview questions</li>
                    </ul>
                  </li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Community Support</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Resume preparation</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item"><b>1 Year</b> Job Support</li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Bonus reattendance opportunity <br> <i style="font-size: 12px;"><i class="el-icon-info"></i> One sign-up, two chances to attend</i></li>
                  <li style="gray: black; font-size: 15px; text-align: left; " class="topic-item">Instant access <br> <i style="font-size: 12px;"><i class="el-icon-info"></i> Access to previous batch recordings</i></li>
                </ul>
                <hr>
              </div>
         
            </div>
          </div>
          </div>
       
           </div>
         </div>
      </div> 

 
    </el-main>

    <WhatsappAPI></WhatsappAPI>
  </div>
</template>
<script>
import { Descriptions, DescriptionsItem } from 'element-ui'
import basic_in from '/src/components/basic_in.vue'
import basic_us from '/src/components/basic_us.vue'
import advanced_in from '/src/components/advanced_in.vue'
import advanced_us from '/src/components/advanced_us.vue'
import advancedplus_in from '/src/components/advancedplus_in.vue'
import advancedplus_us from '/src/components/advancedplus_us.vue'
import WhatsappAPI from '@/components/WhatsappAPI.vue'


export default {
  components: {
    [Descriptions.name]: Descriptions,
    [DescriptionsItem.name]: DescriptionsItem,
    basic_in,
    basic_us,
    advanced_in,
    advanced_us,
    advancedplus_in,
    advancedplus_us,
    WhatsappAPI
  },

  data() {
    return {
      more_info_basic_in:true,
      hide_info_basic_in:false,

      more_info_adv_in:true,
      hide_info_adv_in:false,

      more_info_advp_in:true,
      hide_info_advp_in:false,

      more_info_basic_us:true,
      hide_info_basic_us:false,

      more_info_adv_us:true,
      hide_info_adv_us:false,

      more_info_advp_us:true,
      hide_info_advp_us:false

    }
  },

  // created() {},

  methods: {
    go_back(){
      this.$router.push('/')
    }
  },

  mounted() {
    // Include the Facebook Pixel script in the mounted lifecycle hook
    const script = document.createElement('script');
    script.text = `fbq('trackCustom', 'lead');`;
    document.head.appendChild(script);
  },

}
</script>

<style scoped>

.bullet {
            color: #0077cc; /* Change this to the color you prefer, using a color code or name */
        }
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>

<style scoped>
.card-body {
  
  max-width: 250px;
  margin: 0 auto;
}

.form-row {
  margin-bottom: 15px;
}

.form-group {

  margin-bottom: 15px;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

.form-control {
  height: 10px;
  width: 100%;
  padding: 10px;
  font-size: 12px;
  font-family: Arial;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.invalid-feedback {
  color: red;
}

.form-check-input {
  margin-right: 5px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn-primary:hover,
.btn-secondary:hover {
  opacity: 0.8;
}

</style>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 5px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}
.red {
  color: var(--el-color-error);
}
</style>

<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
</style>

<style scoped>
.o-video {
  width: 100%;
  height: 0;
  position: relative;
  padding-top: 56.25%; /* 9 / 16 * 100 */
}
.o-video > iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
}

</style>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<style scoped>

.drop-shadow {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

/* .box-card {
  width: 480px;
} */
</style>

<style scoped>

.curriculum_font{
font-size: 20px;
}
.social-media-icon {
  display: inline-block;
  margin-right: 10px;
  font-size: 24px;
  color: #333;
}


.el-result__title,
   .el-result__subtitle {
    color: white;
  }

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.left-align {
  display: flex;
}

.custom-left-align {
  margin-left: 70px; /* Adjust the value to your desired left alignment */
}
.right-align {
  display: flex;
  justify-content: flex-end;
}
h3 {
  margin: 30px 0 0;
}

a {
  color: #42b983;
}

.title {
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin-bottom: -15px;
}

.title_1 {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: -20px;
}

.title_3 {
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin-bottom: -15px;
}

.title_4 {
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}

.subtitle {
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: rgb(128, 139, 242);
}

.subtitle_1 {
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: rgb(255, 255, 255);
}

.subtitle_2 {
  font-family: Inter, sans-serif;
  font-size: 34px;
  font-weight: 400;
  color: rgb(255, 255, 255);
}

@media (max-width: 600px) {
  .title {
    font-size: 24px;
  }

  .title_1{
     font-size: 16px;
  }

  .title_3 {
    font-size: 24px;
  }

  .title_4 {
    font-size: 32px;
  }

  .subtitle {
    font-size: 16px;
  }

  .subtitle_2 {
    font-size: 20px;
  }

  .curriculum_font{
    font-size: 16px;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .title {
    font-size: 36px;
  }

  .title_1{
     font-size: 36px;
  }


  .title_3 {
    font-size: 32px;
  }

  .title_4 {
    font-size: 34px;
  }

  .subtitle {
    font-size: 20px;
  }


  .subtitle_2 {
    font-size: 26px;
  }
  .curriculum_font{
    font-size: 20px;
  }

}

@media (min-width: 1025px) {
  .title {
    font-size: 64px;
    margin-bottom: 10px;
  }

  .title_1{
     font-size: 24px;
  }

  .title_3 {
    font-size: 42px;
    margin-bottom: 10px;
  }

  .title_4 {
    font-size: 52px;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 28px;
  }

  .subtitle_2 {
    font-size: 30px;
  }

  .curriculum_font{
    font-size: 20px;
  }
}

.content-wrapper {
  margin-bottom: 20px;
}

.center-align {
  display: flex;
  justify-content: center;
  align-items: center;
}

.topic-list {
  list-style-type: disc;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  text-align: left;
  color: white;
}
.topic-list li {
  margin-bottom: 10px;
  list-style-type: none; /* Remove default bullets */

}

@media (max-width: 600px) {
  .topic-list {
    list-style-type: none;
  }
  
}





.custom-button {
  margin: 5px;
  background: linear-gradient(to right, #ffd700, #fd6c34, #ffae00);
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-align: center;
}

.button-text {
  padding: 5px;
}

.yellow-text {
  color: yellow;
}

.white-text {
  color: white;
}

.dynamic-button {
  margin: 5px;
  background: linear-gradient(to right, #d8342f, #fd6c34, #ff7b00);
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-align: center;
}

@media (max-width: 600px) {
  .dynamic-button {
    font-size: 16px;
    padding: 8px;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .dynamic-button {
    font-size: 20px;
    padding: 10px;
  }
}

@media (min-width: 1025px) {
  .dynamic-button {
    font-size: 16px;
    padding: 12px;
  }
}

.topic-item {
  font-size: 20px;
}

@media (max-width: 600px) {
  .topic-item {
    font-size: 16px;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .topic-item {
    font-size: 18px;
  }
}

@media (min-width: 1025px) {
  .topic-item {
    font-size: 28px;
  }
}
</style>
