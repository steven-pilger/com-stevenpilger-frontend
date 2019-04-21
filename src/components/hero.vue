<template>
  <div>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" id="hero-title">I'm Steven 🧔🏻</h1>
          <!-- <h2 class="subtitle"> -->
          <!--   Fullheight subtitle -->
          <!-- </h2>                 -->
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
</style>
