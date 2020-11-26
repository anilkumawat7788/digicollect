<!-- <template>
  <div class="main-container">
    <div class="footer-secetion">
      <div class="left1">
        <h1>GET AN APPOINTMENT</h1>
        <hr class="line" />
       <button class="btn btn-appointment">APPOINTMENT</button>
      </div>
      <div class="left2">
        <h1>USEFUL LINKS</h1>
        <hr class="line" />
        <p>
          About Us
          <br />Services
          <br />Contact Us
          <br />Appointment
          
        </p>
      </div>
      <div class="center">
        <h1>THE SERVICES</h1>

        <hr class="line" />
        <p>
         QUALIFIED DOCTORS
          <br />Icu department
          <br />Icu department
          <br />Icu department
          
        </p>
      </div>
      <div class="right">
        <h1>CONTACT US</h1>
        <hr class="line3" />
        <p>
          <a href="mailto:anilkumawatk94@gmail.com" class="white"> <img class="contact-img" src="@/assets/emailwhite.svg" />anilkumawatk94@gmail.com</a>
        </p>
        <p>
          <a href="#" class="white"> <img class="contact-img" src="@/assets/locationwhite.svg" />8892451747</a>
        </p>
        <p>
          <a href="#" class="white"> <img class="contact-img" src="@/assets/locationwhite.svg" />86183933744</a>
        </p>
        <p>
          <a href="#" class="white"> <img class="contact-img" src="@/assets/phonewhite.svg" />Akshay nagar Puram, Bangalore</a>
        </p>
        <p>
           <a href="#" class="white"><img class="contact-img" src="@/assets/phonewhite.svg" />rammurti nagar, Bangalore</a>
        </p>
      </div>
      <hr class="line2" />
      <p>© 2020, ALL rights reserved</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer-secetion {
  position: relative;
  margin-top: .1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  background: transparent linear-gradient(180deg, #000f44 0%, #05103a 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
}

.left1 h1 {
  padding: 3rem 0 0 0;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: #d2d2d2;
}
.left1 p {
  font-size: 1rem;
   font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #d2d2d2;
}

.left2 h1 {
  padding: 3rem 0 0 0;
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  color: #d2d2d2;
}
.left2 p {
  font-size: 1rem;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #d2d2d2;
}

.center h1 {
  padding: 3rem 0 0 0;
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  color: #d2d2d2;
}
.center p {
  font-size: 1rem;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #d2d2d2;
}

.right h1 {
  padding: 3rem 0 0 0;
  font-size: 1.3rem;
   font-family: "Roboto", sans-serif;
  color: #d2d2d2;
}
.right p {
  font-size: 1rem;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #d2d2d2;
}
.line {
  width: 100%;
  border: 1px solid #4463d1;
  opacity: 1;
}
.line2 {
  width: 100%;
  border: 0.1px solid #4463d1;
  opacity: 1;
}
.line3 {
  width: 70%;
  border: 0.1px solid #4463d1;
  opacity: 1;
}
.contact-img {
  width: 2rem;
  height: 1rem;
}
.footer-secetion p {
  color: #d2d2d2;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.white{
  color: white;
}
.btn-appointment{
    margin:2rem 0 0 0;
    width: 13rem;
    border-radius:22px;
    background-color: #fff;
    color: #333;
    font-size: 1rem;
    text-align: center;
     font-family: "Roboto", sans-serif;
}
.btn-appointment:hover{
     color: #f9b707;
}
@media screen and (max-width: 800px) {
  .footer-secetion {
    margin-top: 0;
    justify-content: space-around;
  }
  .left1 {
    margin: 0;
  }
  .left1 h1 {
    padding: 2rem 0 0 .5rem;
    font-size: 1rem;
  }
  .left1 p {
    text-align: left;
    font-size: 0.8rem;
    line-height: 1.3;
    padding: 0 .5rem 0 0;
  }
  .left2 h1 {
    padding: 2rem 0 0 0;
    font-size: 1rem;
  }
  .left2 p {
    font-size: 0.8rem;
    line-height: 1.3;
    padding: 0 0 0 .1rem;
  }
  .center{
    border: 1px solid red;
  }
  .center h1 {
    padding: 2rem 0 0 1rem;
    font-size: 1rem;
  }
  .center p {
    font-size: 0.8rem;
    line-height: 1.5;
    padding: 0 0 0 1rem;
  }
  .right{
    border: 1px solid red;
  }
  .right h1 {
    padding: 2rem 0 0 2rem;
    font-size: 1rem;
  }
  .right p {
    font-size: 0.8rem;
    line-height: 1.3;
    padding: 0 1rem 0 0;
  }
  .line {
    width: 90%;
    border: 1px solid #4463d1;
  }
  .line2 {
    width: 100%;
    border: 0.1px solid #4463d1;
  }
  .line3 {
    width: 60%;
    border: 1px solid #4463d1;
    margin: 1rem 0 0.5rem 2rem;
  }
  .footer-secetion p {
    padding: 0 0 0 1rem;
  }
}
</style> -->
<template>
  <div class="main-container">
    <div class="footer-main">
      <div class="footer-left1">
         <h1>Get An Appointment</h1>
        <button class="btn btn-appointment">APPOINTMENT</button>
      </div>
      <div class="footer-left2">
        <h1>Important Links</h1>
        <p>
          About
          <br />Services
          <br />Blogs
          <br />contact US
          
        </p>
      </div>
      <div class="footer-center">
        <h1>Emergency Contact</h1>
        <p>+91-8892451747</p>
        <p>+91-8618393744</p>
       
      </div>
      <div class="footer-right">
          
        <h1>Help</h1>
         <p>
          contact us
          <br />sitemap
          <br />terms & condition
          <br />privacy policy
          <br />refund/concellation
        </p>
          <div class="right-heading">
              </div>
         
      </div>
    </div>
  </div>
</template>
<script>
export default {

}

</script>
<style scoped>
.footer-main {
  margin-top: 0;
  position: relative;
  background: #272727 0% 0% no-repeat padding-box;
border: 1px solid #707070;
opacity: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.footer-left1 {
 
  width: 15rem;
  height: 10rem;
  margin: 0 1rem 3rem 2rem;
 

}
.footer-left1 h1 {
  font-size: 1.3rem;
font-family: "Noto Sans", sans-serif;
  padding: 0 0 0 1rem;
 color: #FFFFFF;
}
.footer-left1 p {
  font-size: 1rem;
  text-align: left;
  padding: 1rem;
  color: #FFFFFF;
}
.footer-left2 {
  
  width: 16rem;
  height: 10rem;
  margin: 0 1rem 3rem 1rem;
  
  
}
.footer-left2 h1 {
  font-size: 1.3rem;
font-family: "Noto Sans", sans-serif;
  padding: 0 0 0 1rem;
 color: #FFFFFF;
}
.footer-left2 p {
  font-size: 1rem;
  text-align: left;
  padding: 1rem;
 color: #FFFFFF;
 text-transform: capitalize;
}

.footer-center {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 18rem;
  height: 6.5rem;
  margin: 0 1rem 3rem 1rem;
 
  
}

.footer-center h1 {
  font-size: 1.3rem;
  text-align: left;
 color: #FFFFFF;
  font-family: "Noto Sans", sans-serif;
  padding: 0 0 0 1rem;
}

.footer-center p {
  font-size: 1rem;
  text-align: center;
  color: #FFFFFF;
  padding: 0 1rem 0 1rem;
}
.footer-center ul li{
    margin: 0 0 0 4rem;
    font-size: 1.1rem;
    color: #FFFFFF;
}
.footer-right {
   
  width: 18rem;
  height: 13rem;
  margin: 0 2rem 3rem 1rem;
  
}
.footer-right h1 {
  font-size: 1.3rem;
font-family: "Noto Sans", sans-serif;
  padding: 0 0 1rem 2.2rem;
  color: #FFFFFF;
}
.footer-right p {
  font-size: 1rem;
  padding: 0 0 1rem 2.2rem;
  color: #FFFFFF;
  text-transform: capitalize;
}

.btn-appointment{
    margin:2rem 0 0 0;
    width: 13rem;
    border-radius:22px;
    background-color: #fff;
    color: #333;
    font-size: 1rem;
    text-align: center;
     font-family: "Roboto", sans-serif;
}
.btn-appointment:hover{
     color: #f9b707;
}



@media screen and (max-width: 800px) {
  .footer-main {
    margin-top: 0;
    padding: 1rem;
     justify-content: space-around;
  }
  .footer-left1 {
   
    width: 8rem;
    height: 7rem;
    margin: 0 1rem 1rem 0;
    order: -1;
    padding:0 ;
  }
  .footer-left1 h1 {
     font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    padding: 0;
  }
  .footer-left1 p {
    font-size: .8rem;
     padding: 0;
  }
  .footer-left2 {
   
    width: 9rem;
    height: 7rem;
    margin: 0 1rem 1rem 0;
    order: -1;
  }
  .footer-left2 h1 {
     font-family: 'Roboto', sans-serif;
     padding: 0;
    font-size: 1.1rem;
    
  }
  .footer-left2 p {
     padding: 0;
    font-size: .8rem;
  }

  .footer-center {
 
    width: 8rem;
    height: 4rem;
    margin: 1rem 1rem 0 0;
  }
  .footer-center h1 {
     font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    text-align: left;
    padding: 0 ;
    text-transform: capitalize;
  }
  .footer-center p {
    font-size: .9rem;
    text-align: left;
    padding: 0;
    
  }
  .footer-center ul li{
    margin: 0 0 0 2rem;
    font-size: 1rem;
   
}
  .footer-right {
 
  width:9rem;
  height: 10rem;
  margin: 1rem 1rem 0 0;
}
.footer-right h1 {
   font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
text-align: left;
  padding: 0 ;
 
}
.footer-right p {
  font-size: 1rem;
  padding: 0;
  color: #FFFFFF;
  text-transform: capitalize;
}
.btn-appointment{
    margin:1rem 0 0 0;
    width: 8rem;
    border-radius:22px;
    background-color: #fff;
    color: #333;
    font-size: .8rem;
    text-align: center;
     font-family: "Roboto", sans-serif;
}
}
</style>

