<template>

  <section class="features">
    <div class="container pSection">
      <h2>Akce a aktuality</h2>

      <div class="cards">

        <LookForwardItem
          image="/images/gallery/2.png"
          heading="Historický motorák"
        />

        <LookForwardItem
          image="/images/gallery/2.png"
          heading="Zábavní park"
        />

        <LookForwardItem
          image="/images/gallery/2.png"
          heading="Šlapací drezína"
        />

      </div>


      <PrimaryButton @click="onButtonClick">ctete vice</PrimaryButton>
    </div>
  </section>

</template>
<script setup lang="ts">

import LookForwardItem from "~/components/interactive/LookForwardItem.vue";
import PrimaryButton from "~/components/interactive/button/PrimaryButton.vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const onButtonClick = () => {
  // můžeš třeba navigovat nebo otevřít modální okno
  setTimeout(() => {
    router.push('/aktuality')
  }, 0)
}

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

@media (max-width: 1024px) {
  .cards {
    flex-direction: column;
  }

  .features h2 {
    margin-bottom: 40px;
  }
}


</style>