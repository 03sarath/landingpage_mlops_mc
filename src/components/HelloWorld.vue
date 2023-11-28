<template>

<div>

  <el-dialog
  title="Special Offers"
  :visible.sync="centerDialogVisible"
  width="90%"
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
    <el-button @click="signUpUser()" class="dynamic-button">Next</el-button>
  </span>
</el-dialog>

<div class="common-layout">
  <el-header style="background-color: #1b053e; display: flex; justify-content: space-between; align-items: center; padding: 20px 20px; ">
    <el-image style="width: 50px; height: 50px; margin-right: 10px;" src="https://psitron.s3.ap-southeast-1.amazonaws.com/Psitron-website/psitron_logo_wit_small.png" fit="fill" />
    <nav style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center;">
      <!-- <router-link to="https://psitrontech.com/" style="margin: 5px;">Curriculum</router-link> -->
      <!-- <router-link to="/about" style="margin: 5px;">About</router-link> -->
      <el-button @click="centerDialogVisible = true" class="dynamic-button">Register Now</el-button>
    </nav>
  </el-header>
  
 
       <el-main style="background:linear-gradient(to right, #170b47, #412068, #170b47);">
         <h3 class="title_1" style="padding-bottom: 5px;padding-left: 20px; padding-right: 20px;padding-top: 5px; background-color: rgba(192, 192, 192, 0.26); color: rgb(251, 105, 52);"><b>Learn to Design production <u>ML Pipelines</u></b></h3>
         <div class="content-wrapper">
           <h1 class="title" style="margin-top:30px">MLOps Specialization Course</h1>
           <h3 class="subtitle">Learn to Design production ML Pipelines</h3>
         </div>
 
 
 <el-row style="background-color: #c500fc23; border-radius: 10px; padding: 10px;">
   <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="right-align">
     <el-image key="" src="https://mcusercontent.com/a06b94b6481b306e000825bd4/images/87eacec1-ada1-8610-7ef6-8552bed80bfd.png" class="drop-shadow" lazy /> &nbsp;ß
   </el-col> 
   <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="left-align">
     <div class="content-wrapper">
      <br>
       <h2 class="subtitle_2"><b><span class="tick-mark" style="color: #fd6c34;">&#9473;&#9473;&nbsp;</span>Training Features:<span class="tick-mark" style="color: #fd6c34;">&#9473;&#9473;&nbsp;</span></b></h2>
       <ul class="topic-list">
      
         <li class="topic-item"><span class="tick-mark" style="color: #fd6c34;">&#10003;&nbsp;</span><b>70 Hours</b> of Live sessions from Industrial Experts</li>
         <li class="topic-item"><span class="tick-mark" style="color: #fd6c34;">&#10003;&nbsp;</span><b>50+</b> Live Hands-on Labs</li>
         <li class="topic-item"><span class="tick-mark" style="color: #fd6c34;">&#10003;&nbsp;</span><b>10+ Real-time</b> industrial projects</li>
           <li class="topic-item"><span class="tick-mark" style="color: #fd6c34;">&#10003;&nbsp;</span>One-on-One Debugging with Industry Mentors</li>
       </ul>
     </div>
   </el-col>
 </el-row>
 
 
         <br>
         <el-button @click="centerDialogVisible = true"  style="padding: 24px;; background: linear-gradient(to right, #d8342f, #fd6c34, #ff7b00); color: #fff; font-weight: bold;">Register Now</el-button>
          <br>
          <br>
         <h4 class="subtitle_1"><b>100% Hands-on</b> - Mark Your Calendar starting from 6th January 2024!</h4>
       </el-main>

       <el-main >
        <h1 class="title_4" style="color:rgb(38, 40, 131);  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><b>Curriculum</b></h1>

        <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <span style="color:rgb(255, 123, 0)"><b>Module 1</b></span> - MLOps Introduction
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
           <ul style="color: black; font-size: 17px; text-align: left;">
             <li style="color: black; font-size: 17px; text-align: left;" class="topic-item">&nbsp;What is MLOps?</li>
             <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Machine learning industrialisation challenges</li>
             <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;MLOps Motivation: High-level view</li>
             <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;MLOps challenges</li>
             <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;MLOps challenges similar to DevOps</li>
             <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;MLOps Components</li>
             <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Machine Learning Life Cycle</li>
             <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;How does it relate to DevOps, AIOps, ModelOps, and GitOps?</li>
             <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Major Phases - what it takes to master MLOps</li>
             <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;CI/CD in Production Case Study</li>
           </ul>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <p><b style="color:rgb(255, 123, 0)">Module 2</b>- Introduction to ML and MLOps stages</p>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
         <ul style="color: black; font-size: 17px; text-align: left;">
           <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;MLOps Maturity Model?</li>
           <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Detailed MLOps and stages</li>
           <ul style="color: black; font-size: 17px; text-align: left;">
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Versioning</li>
<li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Testing</li>
<li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Automation (CI/CD)</li>
<li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Reproducibility</li>
<li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Deployment</li>
<li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Monitoring</li>

           </ul>
           <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;MLOps Architectures</li>
           <ul style="color: black; font-size: 17px; text-align: left;">
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Architectures - Open Source tools</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Architectures - Open Source tools - Kubeflow, Apache Airflow, MLFlow, Metaflow, Kedro, ZenML, MLRun, CML</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Comparison among cloud-native tools</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;The cost-benefit approach of each architecture and MLOps maturity</li>
           </ul>
           <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;List of tools involved in each stage (MLOps tool ecosystem</li>
           <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Different Roles involved in MLOps ( ML Engineering + Operations )</li>
    
         </ul>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <p><b style="color:rgb(255, 123, 0)">Module 3</b>- Introduction to Git <i style="color:gray">Hands-on</i></p>
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
         <ul style="color: black; font-size: 17px; text-align: left;">
           <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Overview of Git</li>
           <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Understanding branching strategies and REPO</li>
           <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Standard GIT branching strategies (development, feature, bug, release, UAT)</li>
           <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Practising important Git commands</li>
           <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;GitHub Action overview and working</li>
         </ul>
        </div>
      </div>

      <!-- Accordion Item 4 -->
<div class="accordion-item">
 <h2 class="accordion-header" id="headingFour">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
     <p><b style="color:rgb(255, 123, 0)">Module 4</b>- Introduction to CI/CD <i style="color:gray">Hands-on</i></p>
   </button>
 </h2>
 <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
   <ul style="color: black; font-size: 17px; text-align: left;">
     <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Introduction to CI and CD</li>
     <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;CI/CD challenges in Machine Learning</li>
     <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Steps involved in the CI/CD implementation in ML lifecycle and workflow</li>
     <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;A glimpse of popular Tools used in the DevOps ecosystem on the Cloud.
       <ul style="color: black; font-size: 17px; text-align: left;">
         <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;AWS DevOp
           <ul style="color: black; font-size: 17px; text-align: left;">
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;AWS CodeCommit</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;AWS CodePipeline</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;AWS CodeBuild</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;AWS CodeDeploy</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;<b>Project: </b>AWS DevOps Pipeline</li>              
           </ul>
         </li>
         <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;GCP DevOps
           <ul style="color: black; font-size: 17px; text-align: left;">
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;Cloud Source Repositories</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;Cloud Run</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;Cloud Build</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;Cloud Deploy</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;Artifacts Registry</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;<b>Project: </b> GCP DevOps Pipeline</li>
                          
           </ul>
         </li>
         <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Azure DevOps
           <ul style="color: black; font-size: 17px; text-align: left;">
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;Azure Boards</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;Azure Repos</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;Azure Pipeline</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;Azure Test Plans</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;Azure Artifacts</li>
             <li style="color: black; font-size: 17px; text-align: left; list-style-type: square;" class="topic-item">&nbsp;<b>Project: </b> Azure DevOps Pipeline</li>
                          
           </ul>
         </li>
       </ul>
     
     </li>
     
   </ul>
 </div>
</div>
<!-- Accordion Item 5 -->
<div class="accordion-item">
<h2 class="accordion-header" id="headingFive">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
   <p><b style="color:rgb(255, 123, 0)">Module 5</b>- Docker & Kubernetes Overview <i style="color:gray">Hands-on</i></p>
 </button>
</h2>
<div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
 <ul style="color: black; font-size: 17px; text-align: left;">
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Docker Foundation</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Installing Docker on Windows, macOS & Linux</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Managing Containers with Docker Commands</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;How does it work? Docker registry - Docker Hub</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Building your own Docker images</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;<b>Project: </b> Deploy ML model in Docker container</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Kubernetes Overview</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Kubernetes Architecture
     <ul style="color: black; font-size: 17px; text-align: left;">
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Nodes</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Control Plane</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;API Server</li>
     </ul>
   </li>

   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Kubernetes Resources
     <ul style="color: black; font-size: 17px; text-align: left;">
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Pod</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Deployment</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Replica</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Service</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Volumes (PVC)</li>
       
     </ul>
   </li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Minikube</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;<b>Project: </b> Deploy ML model in Kubernetes cluster</li>
   
 </ul>
</div>
</div>

<!-- Accordion Item 6 -->
<div class="accordion-item">
<h2 class="accordion-header" id="headingSix">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
   <p><b style="color:rgb(255, 123, 0)">Module 6</b>- Kubernetes Deployment Strategy <i style="color:gray">Hands-on</i></p>
 </button>
</h2>
<div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
 <ul style="color: black; font-size: 17px; text-align: left;">
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Liveness and Readiness Probes</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Labels and Selectors</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;<b>Project: </b> Deploying an ML Model using Docker and Amazon EKS</li>
 </ul>
</div>
</div>

<!-- Accordion Item 7 -->
<div class="accordion-item">
<h2 class="accordion-header" id="headingSeven">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
   <p><b style="color:rgb(255, 123, 0)">Module 7</b>- Introduction to Model Management  <i style="color:gray">Hands-on</i></p>
 </button>
</h2>
<div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
 <ul style="color: black; font-size: 17px; text-align: left;">
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;What is a Model Management</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;What are the various activities in Model Management
     <ul style="color: black; font-size: 17px; text-align: left;">
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Data Versioning</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Code Versioning</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Experiment Tracker</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Model Registry</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Model Monitoring</li>
       
     </ul>

   </li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;A high-level overview of the below Model Management tools
     <ul style="color: black; font-size: 17px; text-align: left;">
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;MLFlow</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;<b>Project: </b> Deploy MLFlow stack on the cloud</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;<b>Project: </b> Build, train, and deploy an ML model using MLFlow</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;DVC</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Git Large File Storage (LFS)</li>
       
     </ul>
   </li>
 </ul>
</div>
</div>

<!-- Accordion Item 8 -->
<div class="accordion-item">
<h2 class="accordion-header" id="headingEight">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
   <p><b style="color:rgb(255, 123, 0)">Module 8</b>- Feature Store <i style="color:gray">Hands-on</i></p>
 </button>
</h2>
<div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
 <ul style="color: black; font-size: 17px; text-align: left;">
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Introduction to Feature Stores, SageMaker Feature Store, Vertex AI</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Feature Store, Databricks, Tecton, Feast, Hopsworks etc.</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Feast open-source feature store</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Feature Store: Online Vs Offline</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;<b>Project: </b> Deploy Feast Online/Offline feature store</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Online Feature Store using DynamoDB</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Offline Feature Store using S3</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Monitor ML features using Amazon SageMaker Feature Store and AWS Glue DataBrew</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Monitor features programmatically</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Visualizing feature drift over time</li>
 </ul>
</div>
</div>

<!-- Accordion Item 9 -->
<div class="accordion-item">
<h2 class="accordion-header" id="headingNine">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
   <p><b style="color:rgb(255, 123, 0)">Module 9</b>- Cloud ML Services 101 <i style="color:gray">Hands-on</i></p>
 </button>
</h2>
<div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
 <ul style="color: black; font-size: 17px; text-align: left;">
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;AWS SageMaker
     <ul style="color: black; font-size: 17px; text-align: left;">
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Introduction to Amazon SageMaker</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Using Amazon S3 along with SageMaker</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Amazon SageMaker Notebooks</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Notebook instance type, IAM Role & VPC</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Build, Train & deploy ML Model using SageMaker</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Endpoint & Endpoint configurations</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Generate inference from deployed model</li>
     </ul>
   </li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;AWS SageMaker Pipelines
     <ul style="color: black; font-size: 17px; text-align: left;">
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;SageMaker Studio & SageMaker domain</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;SageMaker Projects</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Repositories</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Pipelines & Graphs</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Experiments</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Model groups</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Endpoints</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;<b>Project: </b> Deploy an end-to-end MLOps pipeline using SageMaker Studio</li>
     </ul>
   </li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;GCP VertexAI
     <ul style="color: black; font-size: 17px; text-align: left;">
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Introduction of Vertex AI</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Gather, Import & label datasets</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Build, Train & deploy ML Solutions</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Manage your models with confidence</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Using Pipelines throughout your ML workflow</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Adapting to changes in data</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Creating models with Vertex AI and deploying ML models using aiplatform pipelines</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;<b>Project: </b> Deploy an end-to-end MLOps pipeline using Vertex AI</li>
       
     </ul>
   </li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Azure MLOps
     <ul style="color: black; font-size: 17px; text-align: left;">
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Azure Machine Learning Studio</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Azure MLOps</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Azure ML components</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Azure MLOps + DevOps</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Fully automated end-to-end CI/CD ML pipelines</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;<b>Project: </b> Deploy an end-to-end MLOps V2 pipeline using Azure Machine Learning</li>
     </ul>
   </li>
 </ul>
</div>
</div>

<!-- Accordion Item 10 -->
<div class="accordion-item">
<h2 class="accordion-header" id="headingTen">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
   <p><b style="color:rgb(255, 123, 0)">Module 10</b>- Kubeflow Intro <i style="color:gray">Hands-on</i></p>
 </button>
</h2>
<div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
 <ul style="color: black; font-size: 17px; text-align: left;">
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Kubeflow Introduction</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Kubeflow- Who uses it</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Kubeflow features</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Kubeflow Fairing</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Kubeflow Pipelines</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Kubeflow use cases</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;<b>Project: </b> Pipeline formation with Kubeflow</li>
 </ul>
</div>
</div>

<!-- Accordion Item 11 -->
<div class="accordion-item">
<h2 class="accordion-header" id="headingEleven">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
   <p><b style="color:rgb(255, 123, 0)">Module 11</b>- Introduction to Model Monitoring <i style="color:gray">Hands-on</i></p>
 </button>
</h2>
<div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
 <ul style="color: black; font-size: 17px; text-align: left;">
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Importance Of Model Monitoring</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;What are the various types of monitoring related to the model</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;The architecture of monitoring ecosystem in AWS/Azure/GCP
     <ul style="color: black; font-size: 17px; text-align: left;">
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;AWS Model Monitoring</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;Azure Model Monitoring</li>
       <li style="color: black; font-size: 17px; text-align: left; list-style-type: circle;" class="topic-item">&nbsp;GCP Model Monitoring</li>
     </ul>
   </li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Optimize and Manage Models at the Edge</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Common Issues in ML Model Deployment</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Feedback Loop Role</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;<b>Project: </b> Model & infrastructure monitoring using cloud tools</li>
   
 </ul>
</div>
</div>

<!-- Accordion Item 12 -->
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwelve">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
   <p><b style="color:rgb(255, 123, 0)">Module 12</b>- Introduction to Automl tools <i style="color:gray">Demo</i></p>
 </button>
</h2>
<div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
 <ul style="color: black; font-size: 17px; text-align: left;">
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;H20 MLOps</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Valohai</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Domino Data Lab</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;neptune.ai</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;iguazio</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;W&B</li>
   
 </ul>
</div>
</div>

<!-- Accordion Item 13 -->
<div class="accordion-item">
<h2 class="accordion-header" id="headingThirteen">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
   <p><b style="color:rgb(255, 123, 0)">Module 13</b>- Post-Deployment Challenges <i style="color:gray">Hands-on</i></p>
 </button>
</h2>
<div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
 <ul style="color: black; font-size: 17px; text-align: left;">
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Post Deployment Challenges intro</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Post Deployment Challenges - ML Related</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Challenges when deploying machine learning to edge devices</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Post Deployment - Monitoring the Drift - Evidently</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Monitoring the Drift - Using SageMaker</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Post Deployment Challenges - Software Engineering Related</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;Common Issues in ML Model Deployment</li>
   <li style="color: black; font-size: 17px; text-align: left; " class="topic-item">&nbsp;<b>Project: </b> Evidently AI for Monitoring the Drift</li>
   
   
 </ul>
   </div>
 </div>


    </div>

    <br>
    <el-button @click="centerDialogVisible = true"  style="padding: 24px;; background: linear-gradient(to right, #7b2fd8, #ba34fd, #0d00ff); color: #fff; font-weight: bold;">Download Curriculum</el-button>
    <br>
    <br>
    <p style="font-size: 28px;">Tools Covered</p>
    <el-image key="url1" src="https://psitron.s3.ap-southeast-1.amazonaws.com/landingpages/tools.png" class="drop-shadow" lazy />
  </el-main>
 
       <el-main style="background:linear-gradient(to right, #46006f, #8b23b4, #6f19d9);">
         
         <!-- <el-avatar shape="squaree" :size="size" :src="squareeUrl" /> -->
         <h1 class="title_3">Meet Our POWERFUL</h1>
         <br>
     
         <h1 class="title_4" style="color:rgb(247, 218, 100) ;  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><b>Trainer</b></h1>
 
         
           <el-row :gutter="20">
     <!-- <el-col :span="2"><div class="grid-content ep-bg-purple" /></el-col> -->
     <!-- <el-col :span="12"><div class="grid-content ep-bg-purple" /> -->
       <el-result  style="background-color: #ffffffcc; border-radius: 20px; padding: 10px;" title="Sarath Kumar" sub-title="Data Scientist | Founder- Psitron Technologies |Educator & Mentor
 
 Enabler of Applied Analytics, Data Scientist, Artificial Intelligence, and Deep Learning,MLOps for real business problems
 
 Effective manager, Mentor, trainer, problem solver, and proactive contributor with excellent communication, interpersonal skills, and exposure to managing task forces with result-oriented achievements and project delivery">
           
           <template #icon>
        
       
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
       </el-main>


       <el-main style="background: #f2f7f9;">
         <p style="font-size: 28px;">What Exactly Is</p>
         <h1 class="title_4" style="color:rgb(38, 40, 131);  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">About Program</h1>
         <br>
 
         <el-card style="background-color: #ffffff; border-radius: 10px; padding: 10px;" class="box-card">
   <template #header>
     <div class="card-header">
       <h2>Hottest Job of the <b style="color: #fd6c34;">21st Century</b></h2>
     </div>
   </template>
   <span class="text-left">Machine learning and artificial intelligence is a field that drives major innovations across different industries. It is predicted that in <strong>2023</strong>, the AI market will reach <strong>$500 billion</strong>, and in 2030, <strong>$1,597.1 billion</strong> in size. This means that machine learning technologies will continue to be in high demand in the near future.</span>
 </el-card>
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
     <br>
     <h2>MLOps:<strong style="color: #fd6c34;">The Future of Machine Learning</strong></h2>   
 <p style="text-align: left;">Machine learning is transforming businesses across industries, but many ML projects fail to reach production. MLOps is the discipline of bringing ML projects to production and ensuring that they are reliable, scalable, and secure.</p>
 
 <p style="text-align: left;">In <strong>2023</strong>, MLOps will become the mandate skill set for enterprise ML projects. The market for <strong>MLOps is expected to reach $126 billion by 2025</strong>, and there is a growing demand for MLOps professionals.</p>
 
 <p style="text-align: left; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">If you are looking to get started with MLOps, you have come to the right place. Our hands-on course will teach you the skills you need to build and deploy ML models in production.</p>     
 <el-button @click="centerDialogVisible = true"  class="dynamic-button">Register Now</el-button>
       </el-main>
 
       <el-main style="background:linear-gradient(to right, #170b47, #412068, #170b47);">
       
 
       <h4 class="subtitle_1"><b>100% Hands-on</b> - Mark Your Calendar starting from 6th January 2024!</h4>
       <el-button @click="centerDialogVisible = true"  style="padding: 24px;; background: linear-gradient(to right, #d8342f, #fd6c34, #ff7b00); color: #fff; font-weight: bold;">Register Now</el-button>
             </el-main> 
       
 

 
   <el-main style="background: #f2f7f9;">
         <h1 class="title_4" style="color:rgb(38, 40, 131);  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Why Cloud ?</h1>
         <el-image key="url2" src="https://mcusercontent.com/a06b94b6481b306e000825bd4/images/12d0de4c-3120-c321-0c86-e72e9108451a.jpeg" class="drop-shadow" lazy />
       </el-main>
 
       <el-main style="background:linear-gradient(to right, #5800dc, #860aeb, #7e01ab);">
        <h1 class="title_4" style="color:rgb(255, 230, 0);  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Skills to Master</h1>
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
              <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;AWS CodeDeploy</li>
              <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;GCP</li>
              <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Cloud Source Repositories</li>
              <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Cloud Run</li>
              <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Cloud Build</li>
              <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Cloud Deploy</li>

              <li class="topic-item">&nbsp;Artifacts Registry</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Azure</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Azure Boards</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Azure Repos</li>



        </ul>
        
        
      </div>
      <div class="col">
        <ul style="color: white; font-size: 17px; list-style-type:none; text-align: left;">
          <li  class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Azure Pipeline</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Azure Test Plans</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Azure Artifacts</li>
          <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Kubernetes</li>
          <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Amazon EKS</li>
          <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;MLFlow</li>
          <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;DVC</li>
          <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Git Large File Storage (LFS)</li>
          <li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;AWS SageMaker</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Vertex AI</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Feast</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;DynamoDB</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;S3</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;AWS Glue</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;SageMaker Pipelines</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Azure Machine learning studio</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Kubeflow</li>
<li class="topic-item"><i class="fas fa-book-open"></i>&nbsp;Evidently</li>

        </ul>
      </div>

    
    </div>
  </div>
     </el-main> 
 
 
     <el-main>
         <h1 class="title_4" style="color:rgb(38, 40, 131);  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Job opportunities</h1>
         <p style="text-align: left;">MLOps is an essential practice that helps organizations manage their machine-learning projects more effectively. It combines machine learning with DevOps practices to create end-to-end pipelines for your models. MLOps is becoming increasingly important as more and more businesses are adopting machine learning to gain a competitive advantage. </p>
         <h4 class="title_1" style="padding-bottom: 5px;padding-left: 20px; padding-right: 20px;padding-top: 5px; background-color: rgba(192, 192, 192, 0.26); color: rgb(251, 105, 52);">The average salary for an MLOps engineer starts from <b>₹23.1 Lakhs</b> according to 6figr.com.</h4>
         <br>
         <br>
         <el-image key="url3" src="https://mcusercontent.com/a06b94b6481b306e000825bd4/images/0a121d16-8af9-f085-a349-8c73539faf66.jpg" class="drop-shadow" lazy />
         <p>Source:According to a <strong>Glassdoor & figr.com</strong> report, the annual salary</p>
        
    
         <el-image key="url4" src="https://mcusercontent.com/a06b94b6481b306e000825bd4/images/88b48e6e-0aec-574d-590a-a3fbb29b6854.jpg" class="drop-shadow" lazy />
         <p>Source:<strong>itjobswatch.co.uk</strong> Growing Job opportunities</p>
       </el-main>
 
 
       <el-main style="background:linear-gradient(to right, #170b47, #412068, #170b47);">
       
 
       <h4 class="subtitle_1"><b>100% Hands-on</b> - Mark Your Calendar starting from 6th January 2024!</h4>
       <el-button @click="centerDialogVisible = true"  style="padding: 24px;; background: linear-gradient(to right, #d8342f, #fd6c34, #ff7b00); color: #fff; font-weight: bold;">Register Now</el-button>
             </el-main> 
 
             <el-mnain style="background: #f2f7f9;">
               <p style="font-size: 28px;">Glimpse of our happy participants</p>
               <h1 class="title_4" style="color:rgb(38, 40, 131) ;  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><b>Testimonials</b></h1>
               <!-- <iframe style=" background-color: #9000ffcc; border-radius: 20px; padding: 10px;" width="560" height="315" src="https://www.youtube.com/embed/atema8uex2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
               <div class="o-video">
   <iframe style=" background-color: #9000ffcc; border-radius: 10px; padding: 1px;" src="https://www.youtube.com/embed/atema8uex2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 </div>
 <br>
  <p><strong>Nisheeth Jaiswal</strong>- Participants - MLOps</p>
 
  <div class="o-video">
   <iframe style=" background-color: #9000ffcc; border-radius: 10px; padding: 1px;" src="https://www.youtube.com/embed/8LJld1V9el8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 </div>
 <br>
  <p><strong>Dhirendra Kumar Singh</strong>- Participants - MLOps</p>
 
 
  <div class="o-video">
   <iframe style=" background-color: #9000ffcc; border-radius: 10px; padding: 1px;" src="https://www.youtube.com/embed/_UC_s98YquM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 </div>
 <br>
  <p><strong>Fathima Hafeez</strong>- Participants - MLOps</p>
          </el-mnain>
 
 
          <el-main style="background:linear-gradient(to right, #170b47, #412068, #170b47);">
           <!-- <p style="font-size: 28px;">Participants Feedback</p> -->
           <h1 class="title_4" style="color:rgb(247, 218, 100) ;  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"><b>Participants Feedback</b></h1>
 
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
 </el-main>
 
 <el-main style="background:linear-gradient(to right, #9b54b2, #682064, #954676);">
       
 
       <h4 class="subtitle_1"><b>100% Hands-on</b> - Mark Your Calendar starting from 6th January 2024!</h4>
       <el-button @click="centerDialogVisible = true"  style="padding: 24px;; background: linear-gradient(to right, #d8342f, #fd6c34, #ff7b00); color: #fff; font-weight: bold;">Register Now</el-button>
             </el-main> 
 
             <el-main style="background: #f2f7f9;">
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
 </el-main>
 
 
 <el-main style="background:linear-gradient(to right, #170b47, #412068, #170b47);">
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
    VuePhoneNumberInput
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
    onUpdate(payload) {
      this.results = payload
    },

    signUpUser() {
      // if (this.numberof_Users === this.get_Subscription_status.quantity) {
      //   this.showSwal('warning-message-and-confirmation')
      //   return
      // }
      this.$refs.formRegUser.validate().then(success => {
        if (!success) {
          return
        }
      console.log("Inside", this.firstname,this.lastname,this.email,this.results.formattedNumber)
        // if (this.userRegType == false) {
        //   this.signUp()
        // } else if (this.userRegType == true) {
        //   this.saveInvited_user()
        // }

      var get_date = new Date();
      var ISOtime = get_date.toISOString();
        
      var data= {
        "item":{
        "time_stamp":ISOtime,
        "first_name":this.firstname,
        "last_name":this.lastname,
        "email":this.email,
        "phone":this.results.formattedNumber
        },
        "mode":"put_item"
      
      };

        post_AWS_API(data)
        .then(dataAWS => {
          console.log(dataAWS)
          if (dataAWS.data.body == 'Put item successful') {
            this.$router.push('about')
          } else if (dataAWS.data.body == 'Error updating DynamoDB item') {
            this.errorinfo_status = true
            this.errorinfo = 'Whoops,something went wrong.Please try again!'
          } else {
            this.errorinfo_status = true
            this.errorinfo = 'Whoops,something went wrong.Please try again!'
          }
        })
        .catch(e => {
          this.errors.push(e)
        })


      })
    },
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
