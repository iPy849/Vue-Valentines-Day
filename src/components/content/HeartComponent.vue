<template>
  <div class="content flex align-middle justify-center">
    <div class="heart" ref="heart" @click="animation">
      <p class="title text-white text-l">Abre mi corazón</p>
      <p class="message text-white text-md">
        {{ message }}
      </p>
    </div>
    <div class="heart anime" ref="heartAnime"></div>
    <div class="hearts" ref="hearts">
      <div class="heart2"></div>
      <div class="heart3"></div>
      <div class="heart4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeartComponent",
  props: {
    message: {
      required: true,
      type: String,
      default: "Ups, alguien olvidó escribir su mensaje...",
    },
  },
  methods: {
    animation() {
      this.$refs.heart.classList.add("active");
      this.$refs.heartAnime.style.opacity = "0";

      document
        .querySelectorAll(".hearts div")
        .forEach((element) => element.classList.add("active"));
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Gaegu");
@import url("https://fonts.googleapis.com/css?family=Rubik:300,400");

$c02: #ef6c57;

/* elements container */
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* main heart */
.heart {
  width: 120px;
  height: 120px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s 0.2s ease;
  opacity: 1;
}

.heart:hover {
  width: 180px;
  height: 180px;
  cursor: pointer;
}

/* background heart - animated */
.heart.anime {
  animation: heartbeat 0.8s 0.2s ease infinite alternate;
  position: absolute;
  cursor: auto;
}

@keyframes heartbeat {
  0% {
    width: 120px;
    height: 120px;
    transition: all 1s 0.2s ease;
  }

  100% {
    width: 140px;
    height: 140px;
    transition: all 1s 0.2s ease;
  }
}

/* elements that compose the heart */

.heart:before,
.heart:after {
  position: absolute;
  background-color: $c02;
  content: "";
  width: 50%;
  height: 75%;
}

.heart:before {
  transform: rotate(-45deg);
  border-radius: 400px 400px 0px 100px;
  left: 16%;
}
.heart:after {
  transform: rotate(45deg);
  border-radius: 400px 400px 100px 0px;
  right: 16%;
}

/* active state to grow the heart */
.heart.active {
  width: 25rem;
  height: 25rem;
  animation: none !important;
  transition: all 1s 0.2s ease;
  cursor: auto;
  transform: rotate(10deg), rotate(0deg);
  position: absolute;
}

// .heart:hover.active {
//   width: 25rem;
//   height: 25rem;
// }

/* title - click */

.heart .title {
  opacity: 1;
  position: absolute;
  transition: all 0.8s 0.5s ease;
  z-index: 1;
  text-align: center;
  margin: 0 auto;
  margin-top: -3%;
  animation: title 3s 1s ease infinite;
}

@keyframes title {
  0%,
  25%,
  100% {
    transform: rotate(0deg);
  }
  5%,
  15% {
    transform: rotate(5deg);
  }
  10%,
  20% {
    transform: rotate(-5deg);
  }
}
/* active state that hide the title */
.heart.active .title {
  opacity: 0;
  transition: all 0.8s 0s ease;
}

/* message */
.heart .message {
  opacity: 0;
  transition: all 0.2s 0s ease;
  text-align: center;
  margin: 0 auto;
  width: 80%;
  margin-top: -20%;
  font-size: 16px;
  z-index: 1;
}

/* active state that show the message */
.heart.active .message {
  opacity: 1;
  z-index: 1;
  margin-top: -10%;
  transition: all 1s 0.5s ease;
}

/* floating hearts */
.hearts {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

.heart2,
.heart3,
.heart4 {
  width: 20px;
  height: 20px;
  position: absolute;
  opacity: 0;
  z-index: -1;
  transition: all 1s ease;
}

.heart2.active {
  opacity: 1;
  animation: floatHearts1 2s 0.2s ease;
}

.heart3.active {
  opacity: 1;
  animation: floatHearts2 2s 0.2s ease;
}

.heart4.active {
  opacity: 1;
  animation: floatHearts3 2s 0.2s ease;
}

@keyframes floatHearts1 {
  0% {
    width: 20px;
    height: 20px;
    left: 50%;
    top: 60%;
    transform: rotate(0deg);
  }
  50% {
    top: 30%;
  }
  100% {
    width: 50px;
    height: 50px;
    left: -20%;
    top: 20%;
    transform: rotate(-40deg);
  }
}

@keyframes floatHearts2 {
  0% {
    width: 20px;
    height: 20px;
    right: 50%;
    top: 60%;
    transform: rotate(0deg);
  }

  100% {
    width: 100px;
    height: 100px;
    right: 0%;
    top: -20%;
    transform: rotate(40deg);
  }
}

@keyframes floatHearts3 {
  0% {
    width: 20px;
    height: 20px;
    right: 50%;
    top: 50%;
    transform: rotate(0deg);
  }
  50% {
    top: 100%;
  }
  100% {
    width: 80px;
    height: 80px;
    right: 0%;
    top: 110%;
    transform: rotate(90deg);
  }
}

.heart2:before,
.heart2:after,
.heart3:before,
.heart3:after,
.heart4:before,
.heart4:after {
  position: absolute;
  background-color: $c02;
  content: "";
  width: 50%;
  height: 90%;
  z-index: 2;
}

.heart2:before,
.heart3:before,
.heart4:before {
  transform: rotate(-45deg);
  border-radius: 400px 400px 0px 100px;
  left: 10%;
}

.heart2:after,
.heart3:after,
.heart4:after {
  transform: rotate(45deg);
  border-radius: 400px 400px 100px 0px;
  right: 10%;
}
</style>