<template>
  <div class="about">
    <h1>Welcome to Our Estate</h1>
    <br>
    <h2> C-A-S-H Wine Estate was started by four Bestfriends/Collegues with slightly different likes,
      <br>that when put together became a perfect match.
      <br>
      <br>
      We were very close to the point of sharing everything at work,
      <br>
       to forming a Lotto club where we combined our numbers and played Lotto.
       <br>
       Our goal was to always make money beause we believed money was destined for us,
       <br> as you can see the first letters of our names spell C-A-S-H.
 </h2>
    </div>
     <div class="wrapper">
          <div class="container  ">
               <div class="banner-image"></div>
               <img src="https://i.postimg.cc/fL3ZwwxV/Cameron-2.jpg" alt="" class="profile-image">
               <h1 class="name">Cameron</h1>
               <p class="description">I am a foodie, So I became the face of the Resturant</p>
               <button class="btn">Follow</button>
          </div>
          <div class="container">
               <div class="banner-image"></div>
               <img src="https://i.postimg.cc/zf66FTgf/Ashwin-3.jpg" alt="" class="profile-image">
               <h1 class="name">Ashwin</h1>
               <p class="description"> I am the face of the Wine Production</p>
               <button class="btn">Follow</button>
          </div>
          <div class="container">
               <div class="banner-image"></div>
               <img src="https://i.postimg.cc/qR1Dqnxw/Smangele-3-2.jpg" alt="" class="profile-image">
               <h1 class="name">Smangele</h1>
               <p class="description">I love Therapy so I became the face of the Spa</p>
               <button class="btn">Follow</button>
          </div>
          <div class="container">
               <div class="banner-image"></div>
               <img src="https://i.postimg.cc/vBmF0GPP/Hilmi-2.jpg" alt="" class="profile-image">
               <h1 class="name">Hilmi</h1>
               <p class="description">I love golf, So I became the face of the Golf Club</p>
               <button class="btn">Follow</button>
          </div>
     </div>
<div class="offer">
  <h1> WHAT WE OFFER?</h1>
  <br>
  Since we are a team of young people we love hosting events, we are even on the Top 3 of Best Events Hosting in South Arfrica.
  <br>
 Bookings of dates to be day ONE YEAR ahead.
 <br>
Below is a list of few Events we host. Please feel free to call and enquire incase what you want is not on the list.
 <br>
<h2>
  <br>
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
 html,
body {
    overflow-x: hidden;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0F0F10;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2C3E50;
}

nav a.router-link-exact-active {
    color: #42B983;
}

:root {
    --light-gray: #B0BEC5;
    --gray: #37474F;
    --primary: #42B983;
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
}

.wrapper {
    display: grid;
    grid-template-columns: minmax(250px, 300px);
    justify-content: center;
    gap: 2rem;
    margin: 2rem;
}

.container {
    box-shadow: 0rem 0.125rem 0.5rem 0rem var(--light-gray);
    width: 93%;
    text-align: center;
    border-radius: 1rem;
}
 </style>
