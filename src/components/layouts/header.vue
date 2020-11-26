<template>
  <div class="main-header">
    <div id="app">
      <nav-bar msg="String"></nav-bar>
    </div>

    <template id="navBar">
      <b-navbar class="navbar navbar-light bg-dark" toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand class="navbar-brand" @click="goTo('')">
          <!-- <img class="main-logo" src="@/assets/curipelogo.svg" /> -->
          <h1>healthcare</h1>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="navbarSupportedContent" class="nav-item ml-auto">
            <b-nav-item @click="goTo('home')"><span :class="active('/home')">HOME</span></b-nav-item>
            <hr class="line1" />
            <b-nav-item @click="goTo('about')"><span :class="active('/about')">ABOUT</span></b-nav-item>
            <hr class="line1" />
            <b-nav-item @click="goTo('services')"><span :class="active('/services')">SERVICES</span></b-nav-item>
            <hr class="line1" />
            <b-nav-item @click="goTo('project')"><span :class="active('/project')">APPOINTMENT</span></b-nav-item>
            <hr class="line1" />
            <b-nav-item @click="goTo('keyteam')"><span :class="active('/keyteam')">BLOG</span></b-nav-item>
            <hr class="line1" />
            <b-nav-item @click="goTo('contact')"><span :class="active('/contact')">CONTACT US</span></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </template>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  mounted(){
    console.log(this.$route.path);
  },
  methods: {
    goTo(page) {
      let path = "/" + page;
      this.$router.push({
        path: path
      });
    },
    active(page){
      if(this.$route.path === page)
      return 'active'
    }
  }
};
</script>
<style scoped>
.active{
  color:#f9b707;
}
.navbar-dark .navbar-nav .nav-link {
  font-size: .8rem;
  color: #fff;
  margin: 0 1rem 0 1rem;
  font-family: "Ubuntu", sans-serif;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: #f9b707;
}
.navbar-dark .navbar-nav .nav-link:active {
  color: #f9b707;
}
.main-logo {
  width: 8rem;
  margin: 0 0 0 3rem;
}

.bg-dark {
  background-color: #272727 !important;
}
.navbar-brand h1{
    font-size: 1.2rem;
}
@media screen and (max-width: 800px) {
  .line1 {
    width: 100%;
    color: white;
    background: white;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: white;
    text-align: center;
  }
  .navbar-dark .navbar-nav .nav-link:hover {
    color: white;
  }
  .navbar-dark .navbar-nav .nav-link:active {
    color: white;
    border: none;
    border-radius: none;
  }
  .bg-white {
    background-color: #000726 !important;
  }

  .navbar-light .navbar-toggler {
    color: white;
    width: 3.4rem;
    height: 2.4rem;
    border: 1.5px solid white;
  }
  .main-logo {
    width: 7rem;
    margin: 0 0 0 1rem;
  }
}
</style>