<template>

  <section id="onas" class="features">
    <div class="container">
      <h2>Akce a aktuality</h2>

      <div class="cards">

        <LookForwardItem
          image="https://placehold.co/600x400"
          heading="Historický motorák"
        />

        <LookForwardItem
          image="https://placehold.co/600x400"
          heading="Zábavní park"
        />

        <LookForwardItem
          image="https://placehold.co/600x400"
          heading="Šlapací drezína"
        />

      </div>
      <SecondaryButton></SecondaryButton>
    </div>
  </section>

</template>
<script setup lang="ts">
import LookForwardItem from "~/components/interactive/LookForwardItem.vue";
import SecondaryButton from "~/components/interactive/button/SecondaryButton.vue";
</script>

<style scoped>

.features {
  background-color: #FFF8ED;
  background-image: url('/images/backgrounds/bg1.png'); /* pozadí */
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #333;
}

.features h2 {
  color: #AE4343;
  margin-bottom: 80px;
  font-size: 64px;

}

.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}

.cards {
  display: flex;
  justify-content: space-between;
}

.card :deep(h3) {
  color: #AE4343;
}


</style>