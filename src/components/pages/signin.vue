<template>
  <div class="main-container">
    <div class="signin-section">
      <div class="sign-in">
        <img src="@/assets/p10.png" class="digicollect-img" />
        <h1>sign-in</h1>
        <div class="form">
        <div class="form-group">
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group id="input-group-1" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                required
                placeholder="Email address"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="form.password"
                 type="password"
                required
                placeholder="password"
              ></b-form-input>
            </b-form-group>
            <pre class="mt-3 mb-0">{{ text }}</pre>
            <a href="#" class="forgot-password">forgot your password?</a>

            <div class="submit-button">
              <b-button  type="submit" variant="primary" class="btn-signin" @click="alert()">Sign In</b-button>
            </div>
          </b-form>
        </div>
        <div class="signup">
                <h3>Dont't have an account?</h3>
                <a @click="goTo('home')">sign up</a>
                
             </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      form: {},
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    alert(){
alert("plese click on signup for home page")
    },
    goTo(page) {
      let path = "/" + page;
      this.$router.push({
        path: path
      });
       alert("welcome in home page")
    }
  }
};
</script>
<style scoped>

.signin-section{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 255, 0.68);
   
}
.sign-in{
    position: relative;
    width: 28%;
    height: 70%;
    box-shadow: 3px -9px 66px rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  background-color: #fff;
}
.sign-in h1{
  font-size: 1.2rem;
  text-align: center;
  color: #333;
  font-family: "Roboto", sans-serif;
  padding: 6rem 0 0 0;
  text-transform: uppercase;

}
.digicollect-img{
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 14rem;
    height: 3rem;
    align-items: center;
   
}
.form{
      position: relative;
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem 4rem 1rem;
    color: black;
}
#input-group-1{
    border: none;
  border-bottom: 2px solid #333;
}
#input-group-2{
    border: none;
  border-bottom: 2px solid #333;
}
.submit-button{
    position: relative;
}
.btn-signin {
     position: absolute;
    top: 2%;
    left: 50%;
    transform: translate(-50%,-50%);
  margin-top: 3.5rem;
    width:90%;
  padding: .5rem;
  background-color: rgba(0, 0, 255, 0.68);
  border-radius: 5px;
  border: rgba(0, 0, 255, 0.68);
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
}
a{
    font-size: .9rem;
    color: #333;
    float: right;
    text-transform: capitalize;
    cursor: pointer;
}
.signup{
    display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 4rem;
}
.signup h3{ 
text-align: center;
font-size: .9rem;
color: #333;
font-family: "Roboto", sans-serif;
}
.signup a{
text-align: center;
font-size: 1rem;
color:rgba(0, 0, 255, 0.68);
font-family: "Roboto", sans-serif;
/* cursor: pointer; */
text-transform: uppercase;
font-family: "Roboto", sans-serif;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
        color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: none !important;
    /* border: 0px solid #fff !important; */
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media screen and (max-width:962px) {
  .digicollect-img{
    top: 11%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 15rem;
    height: 2rem;
  
   
}
.sign-in{
    width: 90%;
    height: 27rem;
} 
  
}
</style>
