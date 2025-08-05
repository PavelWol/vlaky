<template>
  <div ref="atrakceRef" class="atrakce">
    <BackgroundScroll />
    <div class="container">
      <SectionHeading
          color="red"
          align="center"
      >
        <template #title>
          <h2>Na co se u nás můžete těšit?</h2>
        </template>
        <template #subtitle>
          <p>
            V našem světě mašinek a smíchu se nudit rozhodně nebudete!
            Připravili jsme hromadu zážitků, které budou bavit malé dobrodruhy,
            jejich rodiče i prarodiče. Tak naskočte, dobrodružství právě začíná!
          </p>
        </template>
      </SectionHeading>
    </div>
    <div class="red">
      <div class="container">
        <SectionHeading
            color="yellow"
            align="center"
            showCards
        >
          <template #title>
            <h2>Motorák</h2>
          </template>
          <template #subtitle>
            <p>
              Tenhle fešák na kolejích vás sveze časem zpátky – a taky pěkně krajinou dopředu!
              Jízda historickým motorákem M 240 je zážitek s velkým „Z“. A víte,
              co je nejlepší? Děti se mohou za jízdy podívat až k samotnému strojvedoucímu
              do kabiny! Kdo ví, třeba si to jednou vyzkouší naostro…
            </p>
          </template>
          <template #extra>
            <p>
              Jezdíme hlavně o prázdninových víkendech a během speciálních akcí.
            </p>
          </template>
          <template #cards>
            <img src="https://placehold.co/600x400" >
            <img src="https://placehold.co/600x400" >
            <img src="https://placehold.co/600x400" >
          </template>
        </SectionHeading>
      </div>
    </div>
    <div class="">
      <div class="container">
        <SectionHeading
            color="red"
            align="center"
        >
          <template #title>
            <h2>Zábavní park</h2>
          </template>
          <template #subtitle>
            <p>
              Skákání, kutění, hraní i točení – v našem parku to žije od rána do večera.
              Skákací hrad, kolotoč, pískový svět, herní vagon, modelová železnice
              i tvořivé dílničky. A když přijde hlad, čeká vás občerstvení přímo na stanici.
            </p>
          </template>
        </SectionHeading>
        <div class="grid">

          <CardItem
            v-for="(item, index) in cardData"
            :key="index"
            :image="item.image"
            :heading="item.heading"
          />

        </div>
      </div>
    </div>
    <div class="green">
      <div class="container">
        <SectionHeading
            color="yellow"
            align="center"
            showCards
        >
          <template #title>
            <h2>Šlapací drezína</h2>
          </template>
          <template #subtitle>
            <p>
              Nasedněte, šlápněte a hurá na výlet! Naše šlapací drezína je ideální pro rodinnou
              zábavu s kapkou pohybu. Po cestě se pokocháte krajinou a uvidíte svět z
              jiného úhlu – třeba z výšky dřevěného pražce.
              Delší jízdy si můžete rezervovat ve všední dny. O víkendech (kdy jezdí motorák) si to
              švihneme jen na kratší štreku.
            </p>
          </template>
          <template #cards>
            <img src="https://placehold.co/600x400" >
            <img src="https://placehold.co/600x400" >
            <img src="https://placehold.co/600x400" >
          </template>
        </SectionHeading>
      </div>
    </div>
    <div class="container">
      <SectionHeading
          color="red"
          align="center"
          showCards
      >
        <template #title>
          <h2>Westernové městečko</h2>
        </template>
        <template #subtitle>
          <p>
            Připravte se na neobyčejný zážitek, který vás přenese do časů kovbojů a indiánů.
            V našem Westernovém městečku v Bohumilicích na vás čeká spousta dobrodružství.
            Staňte se součástí divokého západu, vyzkoušejte si rýžování zlata,
            střelbu a prozkoumejte indiánskou vesničku. Můžete se také
            těšit na návštěvu bobří hráze a ropného vrtu.
          </p>
        </template>
        <template #cards>
          <img src="https://placehold.co/600x400" >
          <img src="https://placehold.co/600x400" >
          <img src="https://placehold.co/600x400" >
        </template>
      </SectionHeading>
    </div>
  </div>


</template>

<script setup lang="js">

import SectionHeading from "~/components/ui/SectionHeading.vue";
import CardItem from "~/components/interactive/CardItem.vue";

const cardData = [
  {
    image: 'https://placehold.co/600x400',
    heading: 'Skákací hrad',
  },
  {
    image: 'https://placehold.co/600x400',
    heading: 'Kuličkový svět',
  },
  {
    image: 'https://placehold.co/600x400',
    heading: 'Kolotoč',
  },
  {
    image: 'https://placehold.co/600x400',
    heading: 'Vagon s hernou',
  },
  {
    image: 'https://placehold.co/600x400',
    heading: 'Pískový svět',
  },
  {
    image: 'https://placehold.co/600x400',
    heading: 'Modelová železnice',
  },
  {
    image: 'https://placehold.co/600x400',
    heading: 'Dílničky',
  },
  {
    image: 'https://placehold.co/600x400',
    heading: 'Food truck',
  },
  {
    image: 'https://placehold.co/600x400',
    heading: 'Cyklostezska',
  },
]

import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import BackgroundScroll from "~/components/BackgroundScroll.vue";

gsap.registerPlugin(ScrollTrigger)

const atrakceRef = ref(null)

onMounted(() => {
  gsap.from(atrakceRef.value, {
    scrollTrigger: {
      trigger: atrakceRef.value,
      start: 'top 80%',
    },
    x: -20,
    opacity: 0.5,
    duration: 0.8,
    ease: 'power2.Out'
  })
})

</script>

<style scoped>

.atrakce {
  position: relative;
}

.red {
  background-color: #AE4343;
}

.green {
  background-color: #124432;
}

.green p {
  color: #ffffff;
}

.card :deep(h3) {
  color: #AE4343;
}

</style>