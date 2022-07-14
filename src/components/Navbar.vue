<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav class="branding">
      <ul v-show="!mobile" class="navigation">
        <!-- <li>
          <router-link class="link" to="/">Home</router-link>
        </li> -->
        <li>
          <router-link class="link" to="/home">Home</router-link>
        </li>
        <li>
          <router-link class="link" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="link" to="/Events">All Events</router-link>
        </li>
        <li>
          <router-link class="link" to="/login">Login</router-link>
        </li>
        <li>
          <router-link class="link" to="/register">Register</router-link>
        </li>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="fa-solid fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <!-- <li>
            <router-link class="link" to="/">Home</router-link>
          </li> -->
          <li>
            <router-link class="link" to="/home">Home</router-link>
          </li>
          <li>
            <router-link class="link" to="/about">About</router-link>
          </li>
          <li>
          <router-link class="link" to="/Events">All Events</router-link>
        </li>
          <li>
            <router-link class="link" to="/login">Login</router-link>
          </li>
          <li>
            <router-link class="link" to="/register">Register</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>
<style>
header {
  width: 100%;
  transition: 0.5s ease all;
  color: #fff;
}
nav {
  display: flex;
  flex-direction: row;
  transition: 0.5s ease all;
  width: 100%;
  margin: 0;
  position: fixed;
   background-color: rgba(0, 0, 0, 0.8);
   z-index: 99;
   height: 50px;
}

ul,
.link {
  font-weight: 500;
  color: #fff;
  list-style: none;
  text-decoration: none;
}

li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}

.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}

.link:hover {
  color: skyblue;
  border-color: skyblue;
}

.branding {
  display: flex;
  align-items: center;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  margin-top: 10px;
}

i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.5s ease all;
}

icon-active {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>
