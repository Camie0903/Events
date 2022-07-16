<template>
  <div class="about">
    <br />
    <br />
   
    <h1>Welcome to Our Estate</h1>
    <br />
    <h2>
      C-A-S-H Wine Estate was started by four Bestfriends/Collegues with
      slightly different likes, <br />that when put together became a perfect
      match.
      <br />
      <br />
      We were very close to the point of sharing everything at work,
      <br />
      to forming a Lotto club where we combined our numbers and played Lotto.
      <br />
      Our goal was to always make money beause we believed money was destined
      for us,
      <br />
      as you can see the first letters of our names spell C-A-S-H.
    </h2>
  </div>
  <div class="wrapper">
    <div class="container">
      <div class="banner-image"></div>
      <img
        src="https://i.postimg.cc/fL3ZwwxV/Cameron-2.jpg"
        alt=""
        class="profile-image"
      />
      <h1 class="name">Cameron</h1>
      <p class="description">
        I am a foodie, So I became the face of the Resturant
      </p>
    </div>
    <div class="container">
      <div class="banner-image"></div>
      <img
        src="https://i.postimg.cc/zf66FTgf/Ashwin-3.jpg"
        alt=""
        class="profile-image"
      />
      <h1 class="name">Ashwin</h1>
      <p class="description">I am the face of the Wine Production</p>
    </div>
    <div class="container">
      <div class="banner-image"></div>
      <img
        src="https://i.postimg.cc/qR1Dqnxw/Smangele-3-2.jpg"
        alt=""
        class="profile-image"
      />
      <h1 class="name">Smangele</h1>
      <p class="description">I love Therapy so I became the face of the Spa</p>
    </div>
    <div class="container">
      <div class="banner-image"></div>
      <img
        src="https://i.postimg.cc/vBmF0GPP/Hilmi-2.jpg"
        alt=""
        class="profile-image"
      />
      <h1 class="name">Hilmi</h1>
      <p class="description">
        I love golf, So I became the face of the Golf Club
      </p>
    </div>
  </div>
  <div class="offer">
    <br />
    <h1>WHAT DO WE OFFER?</h1>
    <br />
    Since we are a team of young people we love hosting events, we are even on
    the Top 3 of Best Events Hosting in South Arfrica.
    <br />
    Bookings of dates to be day ONE YEAR ahead.
    <br />
    Below is a list of few Events we host. Please feel free to call and enquire
    incase what you want is not on the list.
    <br />
    <br />
  </div>
  <div class="Listings">
    <h2>
      <ul>
        <li>Weddings</li>
        <li>Parties</li>
        <li>Coporate Events</li>
        <li>Wine Tasting</li>
        <li>Food Events</li>
        <li>Anniversaries</li>
        <li>Team Building</li>
        <li>Concerts</li>
        <li>Mini races</li>
        <li>Golf Tournaments</li>
        <li>Spa and Therapy</li>
      </ul>
    </h2>
  </div>
</template>
<style scoped>
.container {
  margin-left: 50px;
}
.offer {
  font-size: 141%;
  text-align: center;
}
li {
  text-align: center;
}
ul,
.link {
  font-weight: 500;
  color: black;
  list-style: none;
  text-decoration: none;
}
/* nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
:root {
  --light-gray: #b0bec5;
  --gray: #37474f;
  --primary: #42b983;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Open Sans", sans-serif;
  color: var(--gray);
} */
.wrapper {
  /* display: grid;
  grid-template-columns: minmax(250px, 300px); */
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.container {
  /* box-shadow: 0rem 0.125rem 0.5rem 0rem var(--light-gray); */
  width: 93%;
  text-align: center;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  margin-left: 9vw;
  background-color: transparent;
}
.banner-image {
  position: absolute;
  /* background-image: url(https://i.postimg.cc/4345LkQH/httpsi-postimg-cczv-F6-BBGVagriculture-5144904-1920-jpg.jpg); */
  height: 10rem;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.profile-image {
  width: 8rem;
  clip-path: circle(60px at center);
  margin-top: 5.5rem;
  transition: all 0.5s ease 0;
}
/* .profile-image:hover {
  filter: grayscale(1);
} */
.name {
  font-size: 1.5rem;
}
.description {
  margin: 1rem 2rem;
  font-size: 20px;
}
/* .btn {
  width: 100%;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: var(--primary);
  padding: 1rem;
  cursor: pointer;
} */
*[data-v-4cebd208],
*[data-v-4cebd208]::before,
*[data-v-4cebd208]::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: center;
}
@media screen and (min-width: 650px) {
  .wrapper {
    grid-template-columns: repeat(2, minmax(250px, 300px));
  }
}
@media screen and (min-width: 960px) {
  .wrapper {
    grid-template-columns: repeat(3, minmax(250px, 300px));
  }
}
@media screen and (min-width: 1200px) {
  .wrapper {
    grid-template-columns: repeat(4, minmax(250px, 300px));
  }
}
@media screen and (min-width: 1400px) {
  .wrapper {
    grid-template-columns: repeat(5, minmax(250px, 300px));
  }
}
</style>
