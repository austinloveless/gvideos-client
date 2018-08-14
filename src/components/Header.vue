<template>
  <div>
    <b-navbar toggleable type="light" variant="light">
      <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
      <router-link to="/">
        <img src="../assets/g-logo.png">
      </router-link>
      <b-collapse is-nav id="nav_text_collapse">
        <b-navbar-nav>
          <router-link to="/">Videos</router-link>
          <b-nav-item href="#">Upload</b-nav-item>
          <router-link to="/login">Login</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.bg-light {
  background-color: #fff !important;
}

.navbar {
  display: flex;
  width: 100%;
  min-height: 100px;
  background-color: #ffffff;
  z-index: 999;
  box-shadow: 2px 2px 1px #333;
  padding: 0px;
  position: fixed;
}

.navbar-toggler {
  margin-left: 10px;
}

.router-link-active {
  padding-bottom: 0px;
  padding-top: 0px;
  margin-right: 0px;
}

.router-link-active img {
  height: 85px;
  margin-left: 75px;
}

.navbar-collapse {
  display: flex;
  justify-content: flex-end;
}

ul.navbar-nav {
  display: flex;
  justify-content: flex-end;
  margin-right: 75px;
}

.navbar-nav a {
  display: flex;
  height: 100px;
  padding-left: 15px !important;
  padding-right: 15px !important;
  color: #222 !important;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  -webkit-transition: color, background-color, 500ms;
  transition: color, background-color, 500ms;
}

.navbar-nav a:hover {
  background-color: #ae0001;
  color: #fff !important;
  text-decoration: none;
}

.navbar-nav a:active {
  background-color: #ae0001;
  color: #fff !important;
  text-decoration: none;
}

@media (max-width: 767px) {
  .navbar-brand {
    padding-bottom: 0px;
    padding-top: 0px;
    margin-right: 115px;
    margin-left: 0px;
  }

  .navbar-collapse {
    display: flex;
    justify-content: flex-start;
  }

  ul.navbar-nav {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-right: 0px;
  }

  li.nav-item {
    border-top: 1px solid #333;
  }

  a.nav-link {
    display: flex;
    height: 50px;
    padding-left: 15px !important;
    padding-right: 15px !important;
    color: #222 !important;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    -webkit-transition: color, background-color, 500ms;
    transition: color, background-color, 500ms;
  }

  a.nav-link:hover {
    background-color: #ae0001;
    color: #fff !important;
    text-decoration: none;
  }

  a.nav-link:active {
    background-color: #ae0001;
    color: #fff !important;
    text-decoration: none;
  }
}

.logo {
  display: flex;
  align-items: stretch;
  padding-left: 75px;
  justify-content: flex-start;
}

.logo a {
  font-size: 58px;
  font-family: 'Yellowtail', cursive;
  color: #ae0001;
  padding-bottom: 7px;
}

.logo .h1:hover {
  color: #444;
  text-decoration: none;
}

.logo a:hover {
  color: #444;
  text-decoration: none;
}

.main-nav {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
}

.navbar-list {
  justify-content: space-around;
}

.main-nav ul {
  display: flex;
  align-items: stretch;
  margin-right: 100px;
  margin-bottom: 0px;
  margin-top: 0px;
  height: 100px;
}

.main-nav li {
  display: flex;
  font-size: 18px !important;
  list-style-type: none;
  align-items: stretch;
}

.main-nav li a {
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  color: #222;
  text-decoration: none;
  font-weight: 700;
  -webkit-transition: color, background-color, 500ms;
  transition: color, background-color, 500ms;
}

.main-nav li a:hover {
  background-color: #ae0001;
  color: #fff !important;
  text-decoration: none;
}

.main-nav li a:active {
  background-color: #ae0001;
  color: #fff !important;
  text-decoration: none;
}

.main-nav li a.active {
  background-color: #ae0001;
  color: #fff !important;
  text-decoration: none;
}

.main-nav li a:focus {
  background-color: #ae0001;
  color: #fff !important;
  text-decoration: none;
}

.logo a {
  font-size: 42px;
  font-family: 'Lato', sans-serif;
  color: #ae0001;
  padding-bottom: 7px;
}

.logo .h1:hover {
  color: #444;
  text-decoration: none;
}

.logo a:hover {
  color: #444;
  text-decoration: none;
}
</style>
