<template>
  <div class="bottom">
    <div class="paper">
      <p class="text-3xl">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenPaperComponent",
  props: {
    message: {
      required: true,
      type: String,
      default: "Ups, alguien olvidó escribir su mensaje...",
    },
  },
};
</script>

<style lang="scss" scoped>
$red: #a4231f;
$red-lt: #cb262e;
$white: #fff;
$black: #252225;
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700);
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.bottom,
.paper {
  margin: 2rem auto;
}
.bottom {
  background-color: $red;
  height: 35rem;
  max-width: 27rem;
  transform: rotate(-7.5deg);
  width: 100%;
}
.paper {
  background-color: $white;
  box-shadow: -1px 3px 3px 3px #222;
  height: 550px;
  max-width: 350px;
  line-height: 1;
  padding: 2.5rem 2rem;
  position: relative;
  text-transform: uppercase;
  transform: rotate(7.5deg);
  width: 100%;
  z-index: 10px;
  p {
    margin-top: 0;
    &:after {
      bottom: 50px;
      color: $red-lt;
      content: "\f004";
      font-family: fontAwesome;
      font-size: 2rem;
      position: absolute;
      right: 50px;
    }
  }
}
.highlight {
  color: $red-lt;
  &:last-child {
    display: block;
  }
}
</style>