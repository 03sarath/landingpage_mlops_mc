<template>

<div>

  <el-dialog
  title="Special Offers"
  :visible.sync="centerDialogVisible"
  width="50%"
  v-if="!isMobile()"
  center>
  <ValidationObserver ref="formRegUser">
  <form @submit.prevent="">

    <!-- First Name Validation -->
    <ValidationProvider  name="First Name" rules="required" v-slot="{ errors }">
      <label label="First Name:" required> <strong>First Name</strong>
        <el-input v-model="firstname" placeholder="Enter Your First Name" type="text"></el-input>
      </label>
      <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
    </ValidationProvider>

    <!-- Last Name Validation -->
    <ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
      <label label="Last Name:" required><strong>Last Name</strong>
        <el-input v-model="lastname" placeholder="Enter Your Last Name" type="text"></el-input>
      </label>
      <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
    </ValidationProvider>

    <!-- E-mail Validation -->
    <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
      <label label="E-MAIL:" required><strong>Email</strong>
        <br /><el-input v-model="email" placeholder="Enter Your Email" type="email"></el-input>
      </label>
      <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
    </ValidationProvider>

    <!-- Phone Number Validation -->
    <ValidationProvider name="Phone Number" rules="required" v-slot="{ errors }">
      <label label="Phone Number:" required><strong>Phone Number</strong>
        <!-- <p>{{ results }}</p> -->
        <VuePhoneNumberInput
          v-model="phoneNumber"
          @update="onUpdate"
          class="mb-2"
          :default-country-code="defaultCountry"
          :no-validator-state="true"
        />
      </label>
      <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
    </ValidationProvider>
  </form>
</ValidationObserver>
<br>
<h4 v-if="errorinfo_status == true" style="color: red;text-align: center" >{{errorinfo}}</h4>

  <span style="text-align: center;" slot="footer" class="dialog-footer">
    <el-button @click="signUpUser()" style="font-size:25px;" class="dynamic-button">Next</el-button>
  </span>
</el-dialog>

<el-dialog
title="Special Offers"
:visible.sync="centerDialogVisible"
width="90%"
v-else
center>
<ValidationObserver ref="formRegUser">
<form @submit.prevent="">

  <!-- First Name Validation -->
  <ValidationProvider  name="First Name" rules="required" v-slot="{ errors }">
    <label label="First Name:" required> <strong>First Name</strong>
      <el-input v-model="firstname" placeholder="Enter Your First Name" type="text"></el-input>
    </label>
    <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
  </ValidationProvider>

  <!-- Last Name Validation -->
  <ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
    <label label="Last Name:" required><strong>Last Name</strong>
      <el-input v-model="lastname" placeholder="Enter Your Last Name" type="text"></el-input>
    </label>
    <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
  </ValidationProvider>

  <!-- E-mail Validation -->
  <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
    <label label="E-MAIL:" required><strong>Email</strong>
      <br /><el-input v-model="email" placeholder="Enter Your Email" type="email"></el-input>
    </label>
    <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
  </ValidationProvider>

  <!-- Phone Number Validation -->
  <ValidationProvider name="Phone Number" rules="required" v-slot="{ errors }">
    <label label="Phone Number:" required><strong>Phone Number</strong>
      <!-- <p>{{ results }}</p> -->
      <VuePhoneNumberInput
        v-model="phoneNumber"
        @update="onUpdate"
        class="mb-2"
        :default-country-code="defaultCountry"
        :no-validator-state="true"
      />
    </label>
    <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
  </ValidationProvider>
</form>
</ValidationObserver>
<br>
<h4 v-if="errorinfo_status == true" style="color: red;text-align: center" >{{errorinfo}}</h4>

<span style="text-align: center;" slot="footer" class="dialog-footer">
  <el-button @click="signUpUser()" style="font-size:25px;" class="dynamic-button">Next</el-button>
</span>
</el-dialog>

<el-dialog
title="Download Curriculum"
:visible.sync="centerDialogVisibleDownload"
width="50%"
v-if="!isMobile()"
center>
<ValidationObserver ref="formRegUser">
<form @submit.prevent="">

  <!-- First Name Validation -->
  <ValidationProvider  name="First Name" rules="required" v-slot="{ errors }">
    <label label="First Name:" required> <strong>First Name</strong>
      <el-input v-model="firstname" placeholder="Enter Your First Name" type="text"></el-input>
    </label>
    <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
  </ValidationProvider>

  <!-- Last Name Validation -->
  <ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
    <label label="Last Name:" required><strong>Last Name</strong>
      <el-input v-model="lastname" placeholder="Enter Your Last Name" type="text"></el-input>
    </label>
    <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
  </ValidationProvider>

  <!-- E-mail Validation -->
  <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
    <label label="E-MAIL:" required><strong>Email</strong>
      <br /><el-input v-model="email" placeholder="Enter Your Email" type="email"></el-input>
    </label>
    <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
  </ValidationProvider>

  <!-- Phone Number Validation -->
  <ValidationProvider name="Phone Number" rules="required" v-slot="{ errors }">
    <label label="Phone Number:" required><strong>Phone Number</strong>
      <!-- <p>{{ results }}</p> -->
      <VuePhoneNumberInput
        v-model="phoneNumber"
        @update="onUpdate"
        class="mb-2"
        :default-country-code="defaultCountry"
        :no-validator-state="true"
      />
    </label>
    <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
  </ValidationProvider>
</form>
</ValidationObserver>
<br>
<h4 v-if="errorinfo_status == true" style="color: red;text-align: center" >{{errorinfo}}</h4>

<span style="text-align: center;" slot="footer" class="dialog-footer">
  <el-button @click="download_curriculum()" style="font-size:25px;" class="dynamic-button">Download</el-button>
</span>
</el-dialog>

<el-dialog
title="Download Curriculum"
:visible.sync="centerDialogVisibleDownload"
width="90%"
v-else
center>
<ValidationObserver ref="formRegUser">
<form @submit.prevent="">

<!-- First Name Validation -->
<ValidationProvider  name="First Name" rules="required" v-slot="{ errors }">
  <label label="First Name:" required> <strong>First Name</strong>
    <el-input v-model="firstname" placeholder="Enter Your First Name" type="text"></el-input>
  </label>
  <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
</ValidationProvider>

<!-- Last Name Validation -->
<ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
  <label label="Last Name:" required><strong>Last Name</strong>
    <el-input v-model="lastname" placeholder="Enter Your Last Name" type="text"></el-input>
  </label>
  <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
</ValidationProvider>

<!-- E-mail Validation -->
<ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
  <label label="E-MAIL:" required><strong>Email</strong>
    <br /><el-input v-model="email" placeholder="Enter Your Email" type="email"></el-input>
  </label>
  <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
</ValidationProvider>

<!-- Phone Number Validation -->
<ValidationProvider name="Phone Number" rules="required" v-slot="{ errors }">
  <label label="Phone Number:" required><strong>Phone Number</strong>
    <!-- <p>{{ results }}</p> -->
    <VuePhoneNumberInput
      v-model="phoneNumber"
      @update="onUpdate"
      class="mb-2"
      :default-country-code="defaultCountry"
      :no-validator-state="true"
    />
  </label>
  <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
</ValidationProvider>
</form>
</ValidationObserver>
<br>
<h4 v-if="errorinfo_status == true" style="color: red;text-align: center" >{{errorinfo}}</h4>

<span style="text-align: center;" slot="footer" class="dialog-footer">
<el-button @click="download_curriculum()" style="font-size:25px;" class="dynamic-button">Download</el-button>
</span>
</el-dialog>

<el-dialog
title="Still Have Questions ?"
:visible.sync="DialogVisibleContactUs"
width="50%"
v-if="!isMobile()"
center>
<div v-if="display_message_status == false">
  <ValidationObserver ref="formRegUser">
    <form @submit.prevent="">
    
      <!-- First Name Validation -->
      <ValidationProvider  name="First Name" rules="required" v-slot="{ errors }">
        <label label="First Name:" required> <strong>First Name</strong>
          <el-input v-model="firstname" placeholder="Enter Your First Name" type="text"></el-input>
        </label>
        <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
      </ValidationProvider>
    
      <!-- Last Name Validation -->
      <ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
        <label label="Last Name:" required><strong>Last Name</strong>
          <el-input v-model="lastname" placeholder="Enter Your Last Name" type="text"></el-input>
        </label>
        <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
      </ValidationProvider>
    
      <!-- E-mail Validation -->
      <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
        <label label="E-MAIL:" required><strong>Email</strong>
          <br /><el-input v-model="email" placeholder="Enter Your Email" type="email"></el-input>
        </label>
        <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
      </ValidationProvider>
    
      <!-- Phone Number Validation -->
      <ValidationProvider name="Phone Number" rules="required" v-slot="{ errors }">
        <label label="Phone Number:" required><strong>Phone Number</strong>
          <!-- <p>{{ results }}</p> -->
          <VuePhoneNumberInput
            v-model="phoneNumber"
            @update="onUpdate"
            class="mb-2"
            :default-country-code="defaultCountry"
            :no-validator-state="true"
          />
        </label>
        <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
      </ValidationProvider>
    
      <ValidationProvider name="Message" rules="required" v-slot="{ errors }">
        <label label="Message:" required><strong>Message</strong>
          <br /><el-input
          type="textarea"
          placeholder="Your message"
          :autosize="{ minRows: 2, maxRows: 4}"
          v-model="message">
        </el-input>
        </label>
        <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
      </ValidationProvider>
    </form>
    </ValidationObserver>
    <br>
    <h4 v-if="errorinfo_status == true" style="color: red;text-align: center" >{{errorinfo}}</h4>
    
    <span style="text-align: center;" slot="footer" class="dialog-footer">
      <el-button @click="constct_us()" style="font-size:25px;" class="dynamic-button-sndmsg">Send Message</el-button>
    </span>
</div>
<div v-else>
  <div style="text-align: center;">
    <i style="font-size: 50px; color:green" class="el-icon-check"></i>
    <br>
    <br>
    <h4>{{message_status}}</h4>
  </div>

</div>
</el-dialog>

<el-dialog
title="Still Have Questions ?"
:visible.sync="DialogVisibleContactUs"
width="90%"
v-else
center>
<div v-if="display_message_status == false">
  <ValidationObserver ref="formRegUser">
    <form @submit.prevent="">
    
    <!-- First Name Validation -->
    <ValidationProvider  name="First Name" rules="required" v-slot="{ errors }">
      <label label="First Name:" required> <strong>First Name</strong>
        <el-input v-model="firstname" placeholder="Enter Your First Name" type="text"></el-input>
      </label>
      <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
    </ValidationProvider>
    
    <!-- Last Name Validation -->
    <ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
      <label label="Last Name:" required><strong>Last Name</strong>
        <el-input v-model="lastname" placeholder="Enter Your Last Name" type="text"></el-input>
      </label>
      <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
    </ValidationProvider>
    
    <!-- E-mail Validation -->
    <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
      <label label="E-MAIL:" required><strong>Email</strong>
        <br /><el-input v-model="email" placeholder="Enter Your Email" type="email"></el-input>
      </label>
      <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
    </ValidationProvider>
    
    <!-- Phone Number Validation -->
    <ValidationProvider name="Phone Number" rules="required" v-slot="{ errors }">
      <label label="Phone Number:" required><strong>Phone Number</strong>
        <!-- <p>{{ results }}</p> -->
        <VuePhoneNumberInput
          v-model="phoneNumber"
          @update="onUpdate"
          class="mb-2"
          :default-country-code="defaultCountry"
          :no-validator-state="true"
        />
      </label>
      <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
    </ValidationProvider>
    
    <ValidationProvider name="Message" rules="required" v-slot="{ errors }">
      <label label="Message:" required><strong>Message</strong>
        <br /><el-input
        type="textarea"
        placeholder="Your message"
        :autosize="{ minRows: 2, maxRows: 4}"
        v-model="message">
      </el-input>
      </label>
      <div style="color:red" class="error-message" v-if="errors[0]">{{ errors[0] }}</div>
    </ValidationProvider>
    </form>
    </ValidationObserver>
    <br>
    <h4 v-if="errorinfo_status == true" style="color: red;text-align: center" >{{errorinfo}}</h4>
    
    <span style="text-align: center;" slot="footer" class="dialog-footer">
    <el-button @click="constct_us()" style="font-size:25px;" class="dynamic-button-sndmsg">Send Message</el-button>
    </span>
</div>
<div v-else>
  <div style="text-align: center;">
    <i style="font-size: 50px; color:green" class="el-icon-check"></i>
    <br>
    <br>
    <h4>{{message_status}}</h4>
  </div>

</div>

</el-dialog>

<div class="common-layout">
  <!-- <el-header fixed style="background-color: #1b053e; display: flex; justify-content: space-between; align-items: center; padding: 20px 20px; "> -->
    <el-header style="position: fixed; top: 0; width: 100%; background-color: #3d0548; display: flex; justify-content: space-between; align-items: center; padding: 20px 20px; z-index: 1000;">

    <el-image style="width: 50px; height: 50px; margin-right: 10px;" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/psitron_logo_wit_small.png" fit="fill" />
    <nav style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center;">
      <!-- <router-link to="https://psitrontech.com/" style="margin: 5px;">Curriculum</router-link> -->
      <!-- <router-link to="/about" style="margin: 5px;">About</router-link> -->
      <el-button @click="centerDialogVisible = true" class="dynamic-button">Register Now</el-button>
    </nav>
  </el-header>
 
       <el-main style="background:linear-gradient(to right, #7b0281, rgb(86, 13, 94), #81027f);">
        <br>
        <br>
         <h3 class="title_1" style="padding-bottom: 5px;padding-left: 20px; padding-right: 20px;padding-top: 5px; background-color: rgba(192, 192, 192, 0.26); color: rgb(241, 251, 52);"><b>Navigating the Landscape of <u>MLOps & LLMOps</u></b></h3>
         <div class="content-wrapper">
           <h1 class="title" style="margin-top:30px">MLOps Masterclass</h1>
           <!-- <h3 class="subtitle">Learn to Design production ML Pipelines</h3> -->
         </div>

    
 
 <el-row style="background-color: #b9b8b823; border-radius: 10px; padding: 10px;">
   <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="right-align">
     <el-image key="" src="https://psitron.s3.ap-southeast-1.amazonaws.com/mlops_masterclass/mlops_mc_poster.jpg" class="drop-shadow" lazy /> &nbsp;&nbsp;&nbsp;
   </el-col> 
   <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="left-align">
     <div class="content-wrapper">
      <br>
     
       <h2 class="subtitle_2"><b><span class="tick-mark" style="color: #fdfa34;">&#9473;&#9473;&nbsp;</span>Training Features:<span class="tick-mark" style="color: #fdfa34;">&#9473;&#9473;&nbsp;</span></b></h2>
       <ul class="topic-list">
      
         <li class="topic-item"><span class="tick-mark" style="color: #fdfa34;">&#10003;&nbsp;</span><b>10 Hours</b> of Live sessions from Industrial Experts</li>
         <li class="topic-item"><span class="tick-mark" style="color: #fdfa34;">&#10003;&nbsp;</span><b>10+</b> Live Hands-on Labs</li>
         <li class="topic-item"><span class="tick-mark" style="color: #fdfa34;">&#10003;&nbsp;</span><b>1+ Real-time</b> industrial projects</li>
           <li class="topic-item"><span class="tick-mark" style="color: #fdfa34;">&#10003;&nbsp;</span>One-on-One Debugging with Industry Mentors</li>
       </ul>
     </div>
   </el-col>
 </el-row>
 
         <br>
         <el-button @click="centerDialogVisible = true"  style="padding: 24px; font-size:20px; background: linear-gradient(to right, #d8342f, #fd6c34, #ff7b00); color: #fff; font-weight: bold;">Register Now</el-button>
          <br>
          <br>
         <h4 class="subtitle_1"><b>100% Hands-on</b> - Mark Your Calendar starting from <b style="color: #fdfa34;">24th February 2024!</b></h4>
    
       </el-main>

       <el-main style="background-color: #f2f7f9;">
        <h1 class="title_4" style="color:rgb(38, 40, 131);  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><b>Curriculum</b></h1>
        <p style="font-size: 15px; text-align: center; padding-bottom: 5px;"><b>From 24th to 25th February 2024 | Saturday and Sunday</b></p>
        <p style="font-size: 15px; text-align: center; color:#29063e; padding-bottom: 5px;"><b>10:00 AM to 2:30 PM IST</b></p>
    

        <div class="container">
          <div class="row">
            <div class="col">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <span style="color:rgb(255, 123, 0)"><b>Module 1</b></span> - MLOps Introduction
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                     <ul style="color: black; font-size: 17px; text-align: left;">
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">What is MLOps?</li>
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">MLOps Motivation</li>
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">MLOps challenges</li>
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">MLOps challenges similar to DevOps</li>
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">MLOps Components</li>
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Automated ML pipelines vs CI/CD ML pipelines</li>
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Different Roles involved in MLOps (ML Engineering + Operations)</li>
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Machine Learning Life Cycle</li>
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">MLOps Vs DevOps</li>
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Different tools for MLOps</li>
                      <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Benefits Of AWS MLOps</li>
                     </ul>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                     <p><b style="color:rgb(255, 123, 0)">Module 2</b>- MLOPs for LLM’s (LLMOps) <i style="color:gray">Demo</i></p>
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                   <ul style="color: black; font-size: 17px; text-align: left;">
                    <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">MLOps for LLM’s</li>
    <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">LLM System Design</li>
    <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">High-level view LLM-driven application</li>
    <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">LLMOps Pipeline</li>
              
                   </ul>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                     <p><b style="color:rgb(255, 123, 0)">Module 3</b>- MLOps & Stages </p>
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                   <ul style="color: black; font-size: 17px; text-align: left;">
                    <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Versioning</li>
                    <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Testing</li>
                    <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Automation (CI/CD)</li>
                    <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Reproducibility</li>
                    <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Deployment</li>
                    <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Monitoring</li>
                   </ul>
                  </div>
                </div>
          
                <!-- Accordion Item 4 -->
          <div class="accordion-item">
           <h2 class="accordion-header" id="headingFour">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
               <p><b style="color:rgb(255, 123, 0)">Module 4</b>- AWS SageMaker <i style="color:gray">Hands-on</i></p>
             </button>
           </h2>
           <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
             <ul style="color: black; font-size: 17px; text-align: left;">
              <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Introduction to Amazon SageMaker</li>
              <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Using Amazon S3 along with SageMaker</li>
              <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Amazon SageMaker Notebooks and SDK</li>
              <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Notebook instance type, IAM Role & VPC</li>
              <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Build, Train & deploy ML Model using XGBoost</li>
              <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Endpoint & Endpoint configurations</li>
              <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Generate inference from deployed model</li>
               
             </ul>
           </div>
          </div>
          <!-- Accordion Item 5 -->
          <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
             <p><b style="color:rgb(255, 123, 0)">Module 5</b>- CI/CD for MLOps <i style="color:gray">Hands-on</i></p>
           </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
           <ul style="color: black; font-size: 17px; text-align: left;">
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">AWS CodeCommit</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">AWS CodePipeline</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">AWS CodeBuild</li>
             
           </ul>
          </div>
          </div>
          
          <!-- Accordion Item 6 -->
          <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
             <p><b style="color:rgb(255, 123, 0)">Module 6</b>- Sagemaker Studio tools</p>
           </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
           <ul style="color: black; font-size: 17px; text-align: left;">
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Introduction Sagemaker pipelines</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Containers for Amazon SageMaker</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">AWS MLOps - ML Model Monitoring</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">AWS MLOps - Amazon Sagemaker Feature Store</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">AWS MLOps - Post-Deployment Challenges</li>
           </ul>
          </div>
          </div>
          
          <!-- Accordion Item 7 -->
          <div class="accordion-item">
          <h2 class="accordion-header" id="headingSeven">
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
             <p><b style="color:rgb(255, 123, 0)">Module 7</b>- AWS MLOps - Build, Train & deploy ML Model <i style="color:gray">Hands-on</i></p>
           </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
           <ul style="color: black; font-size: 17px; text-align: left;">
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">SageMaker Studio & SageMaker domain</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">SageMaker Projects</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Repositories</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Pipelines & Graphs</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Experiments</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Model groups</li>
            <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">Endpoints</li>
           </ul>
          </div>
          </div>
          
          
              </div>
              </div>
              </div>
              </div>

   

    <br>
    <el-button @click="centerDialogVisibleDownload = true"  style="padding: 24px; font-size:20px; background: linear-gradient(to right, #7b2fd8, #ba34fd, #0d00ff); color: #fff; font-weight: bold;">Download Curriculum</el-button>
    <br>
    <br>
    <p style="font-size: 28px;">Tools Covered</p>
    <el-image key="url1" src="https://psitron.s3.ap-southeast-1.amazonaws.com/mlops_masterclass/mlops_ms_tools.jpg" class="drop-shadow" lazy />
  </el-main>


          <el-mnain style="background: #1986b4;">
            <br>
             <h1 class="title_4" style="color:rgb(38, 40, 131) ;  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><b>Watch Demo</b></h1>
             <div class="container">
              <div class="row">
                <div class="col">
                  <div class="o-video">
                    <iframe style=" background-color: #9000ffcc; border-radius: 10px; padding: 1px;" src="https://www.youtube.com/embed/NBriAHKknV0?si=gj9I03X90rU-8ZFu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <br>
                  </div>
                  </div>
                  </div>
                </el-mnain>
           
  <el-main>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 style="text-align: left;">Have a question?</h1>
          <p style="text-align: left;"> Send your queries to the program trainer</p>
          <el-button @click="DialogVisibleContactUs = true" style=" font-size: 25px;" icon="el-icon-phone" type="primary" round><b>Contact Us</b></el-button>
          <br>  
          <br>  
        </div>
      </div>      
    </div>        
  </el-main> 
 
       <el-main style="background:linear-gradient(to right, #7b0281, rgb(86, 13, 94), #81027f);">
         
         <!-- <el-avatar shape="squaree" :size="size" :src="squareeUrl" /> -->
         <h1 class="title_3">Meet Our POWERFUL</h1>
         <br>
     
         <h1 class="title_4" style="color:rgb(247, 218, 100) ;  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><b>Trainer</b></h1>
 
         
     

   <div class="container">
    <div class="row">
      <div class="col">
        <el-row :gutter="20">
          <!-- <el-col :span="2"><div class="grid-content ep-bg-purple" /></el-col> -->
          <!-- <el-col :span="12"><div class="grid-content ep-bg-purple" /> -->
            <el-result  style="background-color: #ffffffcc; font-size:30px; border-radius: 20px; padding: 10px;" title="Sarath Kumar" sub-title="Data Scientist | Founder- Psitron Technologies |Educator & Mentor
      
      Enabler of Applied Analytics, Data Scientist, Artificial Intelligence, and Deep Learning,MLOps for real business problems
      
      Effective manager, Mentor, trainer, problem solver, and proactive contributor with excellent communication, interpersonal skills, and exposure to managing task forces with result-oriented achievements and project delivery">
         
                <template  #icon>
             
            
                  <el-avatar :size="250">
                  <img
                    src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/sarathkumar.jpg"
                  />
                </el-avatar>
                </template>
                <template #extra>
                  <!-- <el-button type="primary">Back</el-button> -->
                  <a href="https://www.facebook.com/psitrontech" target="_blank" class="social-media-icon">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://psitrontech.com/" target="_blank" class="social-media-icon">
            <i class="fas fa-globe"></i>
          </a>
          <a href="https://www.linkedin.com/company/psitron-technologies/" target="_blank" class="social-media-icon">
            <i class="fab fa-linkedin"></i>
          </a>
      
                </template>
              </el-result>
          <!-- </el-col> -->
          <!-- <el-col :span="2"><div class="grid-content ep-bg-purple" /></el-col> -->
        </el-row>
        </div>
        </div>
        </div>
       </el-main>
       <el-main>
        <div class="container">
          <div class="row">
            <div class="col">
              <h1 style="text-align: left;">Have a question?</h1>
              <p style="text-align: left;"> Send your queries to the program trainer</p>
              <el-button @click="DialogVisibleContactUs = true" style=" font-size: 25px;" icon="el-icon-phone" type="primary" round><b>Contact Us</b></el-button>
              <br>  
              <br>  
            </div>
          </div>      
        </div>        
      </el-main> 


       <el-main style="background: #f2f7f9;">
         <!-- <p style="font-size: 28px;">What Exactly Is</p> -->
         <h1 class="title_4" style="color:rgb(38, 40, 131);  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">About Program</h1>
         <br>
         <div class="container">
          <div class="row">
            <div class="col">
              <el-card style="background-color: #ffffff; border-radius: 10px; padding: 10px;" class="box-card">
                <template #header>
                  <div class="card-header">
                    <h2>Hottest Job of the <b style="color: #fd6c34;">21st Century</b></h2>
                  </div>
                </template>
                <span class="text-left">Machine learning and artificial intelligence is a field that drives major innovations across different industries. It is predicted that in <strong>2023</strong>, the AI market will reach <strong>$500 billion</strong>, and in 2030, <strong>$1,597.1 billion</strong> in size. This means that machine learning technologies will continue to be in high demand in the near future.</span>
              </el-card>
              </div>
              </div>

              <div class="row">
                <div class="col">
                  <br>
                  <el-card style="background-color: #ffffff; border-radius: 10px; padding: 10px;" class="box-card">
                    <template #header>
                      <div class="card-header">
                        <h2>Who Can Apply for the  <b style="color: #fd6c34;">Masterclass?</b></h2>
                      </div>
                    </template>
                    <ul class="topic-list">
                          <li style="color: black; font-size: 20px;" v-for="who in who" :key="who" class="topic-item">
                            <span class="tick-mark" style="color: #fd6c34;">&#10003;&nbsp;</span>{{ who }}
                          </li>
                        </ul>
                      </el-card>
                  </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <br>
                      <h2>MLOps:<strong style="color: #fd6c34;">The Future of Machine Learning</strong></h2>   
                  <p style="text-align: left;">Machine learning is transforming businesses across industries, but many ML projects fail to reach production. MLOps is the discipline of bringing ML projects to production and ensuring that they are reliable, scalable, and secure.</p>
                  
                  <p style="text-align: left;">In <strong>2023</strong>, MLOps will become the mandate skill set for enterprise ML projects. The market for <strong>MLOps is expected to reach $126 billion by 2025</strong>, and there is a growing demand for MLOps professionals.</p>
                  
                  <p style="text-align: left; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">If you are looking to get started with MLOps, you have come to the right place. Our hands-on course will teach you the skills you need to build and deploy ML models in production.</p>     
                  <el-button @click="centerDialogVisible = true"  class="dynamic-button">Register Now</el-button>
                      </div>
                      </div>
              </div>
              
 


  
       </el-main>
 
       <el-main style="background:linear-gradient(to right, #7b0281, rgb(86, 13, 94), #81027f);">
       
 
       <h4 class="subtitle_1"><b>100% Hands-on</b> - Mark Your Calendar starting from 24th February 2024!</h4>
       <el-button @click="centerDialogVisible = true"  style="padding: 24px;font-size:20px; background: linear-gradient(to right, #d8342f, #fd6c34, #ff7b00); color: #fff; font-weight: bold;">Register Now</el-button>
             </el-main> 
       
 

 
   <el-main style="background: #f2f7f9;">
         <h1 class="title_4" style="color:rgb(38, 40, 131);  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Why Cloud ?</h1>
         <br>
         <el-image key="url2" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Course/cloudshare.jpeg" class="drop-shadow" lazy />
       </el-main>
 
       <el-main style="background:linear-gradient(to right, #7b0281, rgb(86, 13, 94), #81027f);">
        <h1 class="title_4" style="color:rgb(255, 230, 0);  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Skills to Master</h1>
        <br>
   <div class="container">
    <div class="row">
      <div class="col">
        <ul style="color: white; font-size: 17px; list-style-type:none; text-align: left;">
          <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;DevOps</li>
            <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Git</li>
            <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;GitHub</li>
            <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;AWS</li>
              <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;AWS CodeCommit</li>
              <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;AWS CodePipeline</li>
              <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;AWS CodeBuild</li>
              <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Model Registry</li>
        </ul>
        
        
      </div>
      <div class="col">
        <ul style="color: white; font-size: 17px; list-style-type:none; text-align: left;">
          <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;MLFlow</li>
          <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Data Versioning</li>
          <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;AWS SageMaker</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Feast</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;S3</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;SageMaker Pipelines</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;SageMaker Studio</li>






        </ul>
      </div>

    
    </div>
  </div>
     </el-main> 
 
 
     <el-main>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="title_4" style="color:rgb(38, 40, 131);  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Job opportunities</h1>
            <p style="text-align: left;">MLOps is an essential practice that helps organizations manage their machine-learning projects more effectively. It combines machine learning with DevOps practices to create end-to-end pipelines for your models. MLOps is becoming increasingly important as more and more businesses are adopting machine learning to gain a competitive advantage. </p>
            <h4 class="title_1" style="padding-bottom: 5px;padding-left: 20px; padding-right: 20px;padding-top: 5px; background-color: rgba(192, 192, 192, 0.26); color: rgb(251, 105, 52);">The average salary for an MLOps engineer starts from <b>₹23.1 Lakhs</b> according to 6figr.com.</h4>
            </div>
            </div>
            </div>

         <br>
         <br>
         <el-image key="url3" src="https://mcusercontent.com/a06b94b6481b306e000825bd4/images/0a121d16-8af9-f085-a349-8c73539faf66.jpg" class="drop-shadow" lazy />
         <p>Source:According to a <strong>Glassdoor & figr.com</strong> report, the annual salary</p>
        
    
         <el-image key="url4" src="https://mcusercontent.com/a06b94b6481b306e000825bd4/images/88b48e6e-0aec-574d-590a-a3fbb29b6854.jpg" class="drop-shadow" lazy />
         <p>Source:<strong>itjobswatch.co.uk</strong> Growing Job opportunities</p>
       </el-main>
 
 
       <el-main style="background:linear-gradient(to right, #7b0281, rgb(86, 13, 94), #81027f);">
       
 
       <h4 class="subtitle_1"><b>100% Hands-on</b> - Mark Your Calendar starting from 24th February 2024!</h4>
       <el-button @click="centerDialogVisible = true"  style="padding: 24px; font-size:20px; background: linear-gradient(to right, #d8342f, #fd6c34, #ff7b00); color: #fff; font-weight: bold;">Register Now</el-button>
             </el-main> 
 
             <el-mnain style="background: #f2f7f9;">
              <br>
               <p style="font-size: 28px;">Glimpse of our happy participants</p>
               <h1 class="title_4" style="color:rgb(38, 40, 131) ;  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><b>Testimonials</b></h1>
               <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="o-video">
                      <iframe style=" background-color: #9000ffcc; border-radius: 10px; padding: 1px;" src="https://www.youtube.com/embed/atema8uex2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <br>
                     <h4><strong>Nisheeth Jaiswal</strong>- Data Scientist from UK</h4>
                   
                     <div class="o-video">
                       <iframe style=" background-color: #9000ffcc; border-radius: 10px; padding: 1px;" src="https://www.youtube.com/embed/vdwU4urzdpc?si=Knbbb93xJPrV5J_L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                     </div>
                     <br>
                      <h4><strong>Balasubramanian</strong>- what <b>ISRO</b> engineer has to say!</h4>
                   
                      <div class="o-video">
                       <iframe style=" background-color: #9000ffcc; border-radius: 10px; padding: 1px;" src="https://www.youtube.com/embed/bXKGKUHMlaQ?si=9E33HOx4qpWXPjLK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                     </div>
                     <br>
                      <h4><strong>Rahul Patil </strong>- Congratulations on your new job 👏  well deserved!</h4> 
                    
                     <div class="o-video">
                      <iframe style=" background-color: #9000ffcc; border-radius: 10px; padding: 1px;" src="https://www.youtube.com/embed/8LJld1V9el8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <br>
                     <h4><strong>Dhirendra Kumar Singh</strong>- Participants - MLOps</h4>
                    
                    
                     <div class="o-video">
                      <iframe style=" background-color: #9000ffcc; border-radius: 10px; padding: 1px;" src="https://www.youtube.com/embed/_UC_s98YquM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <br>
                     <h4><strong>Fathima Hafeez</strong>- Application support engineer for Google</h4>
                     <br>
                    </div>
                    </div>
                    </div>


          </el-mnain>
 
 
          <el-main style="background:linear-gradient(to right, #7b0281, rgb(86, 13, 94), #81027f);">
           <!-- <p style="font-size: 28px;">Participants Feedback</p> -->
           <h1 class="title_4" style="color:rgb(247, 218, 100) ;  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><b>Participants Feedback</b></h1>
 


           <div class="container">
            <div class="row">
              <div class="col">
                <el-row :gutter="20">
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url5" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/1mlops.jpg" class="drop-shadow" lazy />
                  </el-col>
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url6" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/2mlops.jpg" class="drop-shadow" lazy />
                  </el-col>
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url7" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/3mlops.jpg" class="drop-shadow" lazy />
                  </el-col>
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url8" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/4mlops.jpg" class="drop-shadow" lazy />
                  </el-col>
              
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url9" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/image+-2.png" class="drop-shadow" lazy />
                  </el-col>
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url10" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/image-1.png" class="drop-shadow" lazy />
                  </el-col>
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url11" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/image.png" class="drop-shadow" lazy />
                  </el-col>
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url12" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/Screenshot_20211021-122406_WhatsApp.jpg" class="drop-shadow" lazy />
                  </el-col>
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url13" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/Screenshot_20220407-140840_WhatsApp.jpg" class="drop-shadow" lazy />
                  </el-col>
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url14" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/Screenshot_20220407-140852_WhatsApp.jpg" class="drop-shadow" lazy />
                  </el-col>
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url15" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/Screenshot_20220407-140900_WhatsApp.jpg" class="drop-shadow" lazy />
                  </el-col>
              
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url16" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/Screenshot_20220510-125859_WhatsApp.jpg" class="drop-shadow" lazy />
                  </el-col>
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url17" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/WhatsApp+Image+2021-08-03+at+2.28.58+PM.jpg" class="drop-shadow" lazy />
                  </el-col>
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url18" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/WhatsApp+Image+2021-11-09+at+11.51.28+AM.jpeg" class="drop-shadow" lazy />
                  </el-col>
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url19" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/WhatsApp+Image+2021-11-09+at+11.50.52+AM.jpeg" class="drop-shadow" lazy />
                  </el-col>
              
                  <el-col :span="12"><div class="grid-content ep-bg-purple" />
                    <el-image key="url20" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/feedback-screenshot/WhatsApp+Image+2021-11-09+at+11.51.28+AM+(1).jpeg" class="drop-shadow" lazy />
                  </el-col>
                </el-row>
                </div>
               </div>
             </div>   



 </el-main>
 
 <el-main style="background:linear-gradient(to right, #7b0281, rgb(86, 13, 94), #81027f);">
       
 
       <h4 class="subtitle_1"><b>100% Hands-on</b> - Mark Your Calendar starting from 24th February 2024!</h4>
       <el-button @click="centerDialogVisible = true"  style="padding: 24px; font-size:20px; background: linear-gradient(to right, #d8342f, #fd6c34, #ff7b00); color: #fff; font-weight: bold;">Register Now</el-button>
             </el-main> 
 
             <el-main style="background: #f2f7f9;">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <h1 class="title_4" style="color:rgb(38, 40, 131) ;  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><b>Who is Psitron Technologies? Why should you care?</b></h1>
                    <p style="text-align: left;">Psitron Technologies is an IoT and AI company. Our mission at Psitron is to solve global problems with innovative technologies. Psitron has responsibility for developing innovative innovations for addressing current problems in industries, especially in order to improve uptime and reduce downtime of industries and to provide affordable industry 4.0 solutions to increase productivity in industries.</p>
                  
                    <h2>Supported By</h2>   
                    <el-row :gutter="20">
                        <el-col :span="8"><div class="grid-content ep-bg-purple" />
                          <el-image key="url21" src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/62dad9eb0cf244c802890de3/pages/assets/images/J1KLMdst.png" class="drop-shadow" lazy />
                          <p>Department of science & technology</p>
                        </el-col>
                        <el-col :span="8"><div class="grid-content ep-bg-purple" />
                          <el-image key="url22" src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/62dad9eb0cf244c802890de3/pages/assets/images/Ngke2psgstep.png" class="drop-shadow" lazy />
                          <p>Incubated in PSG-STEP</p>
                        </el-col>
                    
                        <el-col :span="8"><div class="grid-content ep-bg-purple" />
                          <el-image key="url23" src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/62dad9eb0cf244c802890de3/pages/assets/images/VCL7keir.png" class="drop-shadow" lazy />
                          <p>NIDHI Entrepreneur-in-Residence</p>
                        </el-col>
                      
                      </el-row>
                      <h2>Awards /Honours</h2>   
                      <el-row :gutter="20">
                        <el-col :span="8"><div class="grid-content ep-bg-purple" />
                          <el-image key="url24" src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/62dad9eb0cf244c802890de3/pages/assets/images/qOvypfkcci.png" class="drop-shadow" lazy />
                          <p>FKCCI Bangalore best Startup award 2018</p>
                        </el-col>
                        <el-col :span="8"><div class="grid-content ep-bg-purple" />
                          <el-image key="url25" src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/62dad9eb0cf244c802890de3/pages/assets/images/kyD6wlivingtalent.jpg" class="drop-shadow" lazy />
                          <p>Living Talent, Dubai finalist of international level innovation competition 2018</p>
                        </el-col>
                    
                        <el-col :span="8"><div class="grid-content ep-bg-purple" />
                          <el-image key="url26" src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/62dad9eb0cf244c802890de3/pages/assets/images/vb5r3download.png" class="drop-shadow" lazy />
                          <p>HILTI International innovation competition finelist.</p>
                        </el-col>
                    
                        <el-col :span="8"><div class="grid-content ep-bg-purple" />
                          <el-image key="url27" src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/62dad9eb0cf244c802890de3/pages/assets/images/0R8mxunlimitlogo.jpg" class="drop-shadow" lazy />
                          <p>IoT interThrone winner</p>
                        </el-col>
                      
                      </el-row>
                  </div>
                    </div>
                    </div>


 </el-main>
 
 
 <el-main style="background:linear-gradient(to right, #7b0281, rgb(86, 13, 94), #81027f);">
   <footer>
   <br>
   <div class="footer-links">
     <a href="https://psitrontech.com/privacypolicy">Privacy Policy</a> &nbsp;
     <a href="https://psitrontech.com/termsofuse">Terms of Service</a> &nbsp;
     <a href="https://psitrontech.com/contactus">Contact Us</a> &nbsp;
   </div>
   <p style="color: white;">&copy; 2023 Psitron Technologies.</p>
 </footer>
 
 </el-main>

     <el-container style="width: 100%; margin: 0; padding: 0;">
      
     </el-container>
   </div>
   

  <WhatsappAPI></WhatsappAPI>

</div>


</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

import { required, email } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import post_AWS_API from '/src/api_aws.js'
import { Loading } from 'element-ui'
import WhatsappAPI from '@/components/WhatsappAPI.vue'


//import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';




// Register the required and email rules
extend('required', required);
extend('email', email);



export default {
  name: 'HelloWorld',
 
  props: {
    msg: String
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    VuePhoneNumberInput,
    WhatsappAPI
  },
  data(){
    return{
      errorinfo:'',
      errorinfo_status:false,
      results: {},
      defaultCountry: 'IN',
      phoneNumber:'',
      firstname:'',
      lastname:'',
      email:'',
      centerDialogVisible:false,
      centerDialogVisibleDownload:false,
      DialogVisibleContactUs:false,
      message:'',
      message_status:'Message Sent!',
      display_message_status:false,
      who:[
      'Data Scientists',
'Data engineers & Data Analysts',
'Research/Applied Scientists',
'ML engineers',
'DevOps engineers',
'Aspiring MLOps Professionals and Enthusiasts',
'Machine Learning professionals who want to deploy models to production',
'Anyone who wants to learn Docker & Kubernetes, AWS, Azure, GCP, DVC, Feast, MLFlow etc',
'Individuals interested in data and AI industry'
      ]
    }
  },
  methods:{
    redirectToWhatsApp() {
      const whatsappURL = 'https://api.whatsapp.com/send?phone=%2B918940876397&text=Hello%2C%20I%20have%20a%20query%20regarding%20MLOps%20Specialization%20Course.';
      window.open(whatsappURL, '_blank');
    },
    isMobile: function() {
  var check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[\w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[\w]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
},





    onUpdate(payload) {
      this.results = payload
    },

    signUpUser() {
   
      this.$refs.formRegUser.validate().then(success => {
        if (!success) {
          return
        }
      //console.log("Inside", this.firstname,this.lastname,this.email,this.results.formattedNumber)
      var get_date = new Date();
      var ISOtime = get_date.toISOString();
        
      var data= {
        "item":{
        "time_stamp":ISOtime,
        "first_name":this.firstname,
        "last_name":this.lastname,
        "email":this.email,
        "phone":this.results.formattedNumber,
        "lead_status":"payment",
        "program_type":"mlops_mc"
        },
        "mode":"put_item"
      
      };
      let loadingInstance = Loading.service({ fullscreen: true })
        post_AWS_API(data)
        .then(dataAWS => {
          //console.log(dataAWS)
          if (dataAWS.data.body == 'Put item successful') {
            loadingInstance.close()
            this.$router.push('registration')
          } else if (dataAWS.data.body == 'Error updating DynamoDB item') {
            loadingInstance.close()
            this.errorinfo_status = true
            this.errorinfo = 'Whoops,something went wrong.Please try again!'
          } else {
            loadingInstance.close()
            this.errorinfo_status = true
            this.errorinfo = 'Whoops,something went wrong.Please try again!'
          }
        })
        .catch(e => {
          this.errors.push(e)
        })


      })
    },
    download_curriculum(){
      this.$refs.formRegUser.validate().then(success => {
        if (!success) {
          return
        }
      var get_date = new Date();
      var ISOtime = get_date.toISOString();
        
      var data= {
        "item":{
        "time_stamp":ISOtime,
        "first_name":this.firstname,
        "last_name":this.lastname,
        "email":this.email,
        "phone":this.results.formattedNumber,
        "lead_status":"curriculum",
        "program_type":"mlops_mc"
        },
        "mode":"put_item"
      
      };
      let loadingInstance = Loading.service({ fullscreen: true })
        post_AWS_API(data)
        .then(dataAWS => {
          //console.log(dataAWS)
          if (dataAWS.data.body == 'Put item successful') {
            loadingInstance.close()
            //window.location.href = 'https://bit.ly/mlops-curriculum-nov23';
            window.open('https://bit.ly/mlops-masterclass-curriculum', '_blank');
            this.centerDialogVisibleDownload = false
          } else if (dataAWS.data.body == 'Error updating DynamoDB item') {
            loadingInstance.close()
            this.errorinfo_status = true
            this.errorinfo = 'Whoops,something went wrong.Please try again!'
          } else {
            loadingInstance.close()
            this.errorinfo_status = true
            this.errorinfo = 'Whoops,something went wrong.Please try again!'
          }
        })
        .catch(e => {
          this.errors.push(e)
        })


      })
    },

    constct_us(){
      console.log("Contact us called")
      this.$refs.formRegUser.validate().then(success => {
        if (!success) {
          return
        }
      var get_date = new Date();
      var ISOtime = get_date.toISOString();
        
      var data= {
        "item":{
        "time_stamp":ISOtime,
        "first_name":this.firstname,
        "last_name":this.lastname,
        "email":this.email,
        "phone":this.results.formattedNumber,
        "lead_status":"enquiry",
        "message_body":this.message,
        "program_type":"mlops_mc"
        },
        "mode":"put_item"
      
      };
      let loadingInstance = Loading.service({ fullscreen: true })
        post_AWS_API(data)
        .then(dataAWS => {
          //console.log(dataAWS)
          if (dataAWS.data.body == 'Put item successful') {
            loadingInstance.close()
            this.display_message_status=true;
            this.firstname='';
            this.lastname='';
            this.email='';
            this.phoneNumber='';
            this.message='';
            setTimeout(() => this.display_message_status = false, 3000);
            
            this.DialogVisibleContactUs = true
          } else if (dataAWS.data.body == 'Error updating DynamoDB item') {
            loadingInstance.close()
            this.errorinfo_status = true
            this.errorinfo = 'Whoops,something went wrong.Please try again!'
          } else {
            loadingInstance.close()
            this.errorinfo_status = true
            this.errorinfo = 'Whoops,something went wrong.Please try again!'
          }
        })
        .catch(e => {
          this.errors.push(e)
        })


      })
    }
  }
 
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


.dynamic-button-sndmsg {
  margin: 5px;
  background: #d01c68;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-align: center;
}

@media (max-width: 600px) {
  .dynamic-button-sndmsg {
    font-size: 16px;
    padding: 8px;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .dynamic-button-sndmsg {
    font-size: 20px;
    padding: 10px;
  }
}

@media (min-width: 1025px) {
  .dynamic-button-sndmsg {
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
<style>
/* Your other styles go here */

/* Floating button styles */
.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px; /* Adjust the width and height to make it circular */
  height: 60px;
  background-color: #25D366; /* WhatsApp green color */
  color: #FFFFFF; /* White text */
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-button:hover {
  background-color: #128C7E; /* WhatsApp dark green color on hover */
}


</style>
