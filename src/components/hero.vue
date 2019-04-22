<template>
  <div>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" id="hero-title">I'm Steven!</h1>
          <h2 class="subtitle" id="hero-connect">
            <a href="https://twitter.com/steven_pilger">
              <font-awesome-icon
                class="cicon"
                :icon="['fab', 'twitter']"
                size="4x"
              />
            </a>
            <a href="https://linkedin.com/in/pilgersteven/">
              <font-awesome-icon
                class="cicon"
                :icon="['fab', 'linkedin']"
                size="4x"
              />
            </a>
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container" id="hero-footer">
          <h6>Check out some of my projects</h6>
          <font-awesome-icon class="anim-up-down" icon="chevron-down" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/_standards.scss";

.hero-body {
  z-index: 0;
}

#hero-title {
  font-size: 5rem;
  text-align: right;

  /*  &::after {
    content: "";
    background: $clr-blue;
    position: absolute;
    width: 7em;
    height: 0.7em;
    right: -0.2em;
    top: 4rem;
    z-index: -1;
  } */
}

#hero-connect {
  text-align: right;
}

#hero-footer {
  font-size: 1.5em;
  text-align: center;
  font-family: $fss;
  margin-bottom: 1rem;
}

.cicon {
  margin-right: 0.5rem;
}

@-webkit-keyframes falling {
  0% {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 0;
  }
  50% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
    opacity: 0;
  }
}

@keyframes falling {
  0% {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 0;
  }
  50% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
    opacity: 0;
  }
}

.anim-up-down {
  -webkit-animation: falling 2s linear infinite;
  animation: falling 2s linear infinite;
}
</style>
