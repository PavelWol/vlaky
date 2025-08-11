<template>

  <section ref="eventRef" class="features">

    <div class="container">
      <h2>Akce a aktuality</h2>

      <div class="cards">

        <CardItem
          image="/images/gallery/2.png"
          heading="Historický motorák"
        />

        <CardItem
          image="/images/gallery/2.png"
          heading="Zábavní park"
        />

        <CardItem
          image="/images/gallery/2.png"
          heading="Šlapací drezína"
        />

      </div>


      <SecondaryButton class="btn" href="/aktuality">Čtěte více</SecondaryButton>
    </div>
  </section>

</template>
<script setup lang="ts">

import SecondaryButton from "~/components/interactive/button/SecondaryButton.vue";
import CardItem from "~/components/interactive/CardItem.vue";

import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const router = useRouter()

gsap.registerPlugin(ScrollTrigger)

const eventRef = ref(null)

onMounted(() => {
  gsap.from(eventRef.value, {
    scrollTrigger: {
      trigger: eventRef.value,
      start: 'top 50%',
    },
    x: -20,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.Out',
    markers: true
  })
})

</script>

<style scoped>

.features {
  /* background-image: url('/images/backgrounds/bg1.png'); /* pozadí */
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #333;
  position: relative;
}

.features .container {
  padding-bottom: 0 !important;
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

.btn {
  margin-top: 40px;
  color: #353535;
  font-weight: bold;
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