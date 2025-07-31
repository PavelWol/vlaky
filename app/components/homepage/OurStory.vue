<template>

  <section id="story" class="story">
    <div class="container">
      <SectionHeading
          color="red"
          align="center"
      >
        <template #title>
          <h2>Náš příběh</h2>
        </template>
        <template #subtitle>
          <p>
            Naše železniční dobrodružství se zrodilo na části trati Čejč–Ždánice, která zůstala zachována z Čejče do Uhřic u Kyjova a
            kterou jsme oživili s láskou k historii i hravosti. Společnost TMŽ s.r.o. si dala za cíl
            vytvořit místo, kde se potkává rodinná zábava, vůně dobrodružství a příběhy ze světa vlaků.
          </p>
        </template>
      </SectionHeading>
      <img src="https://placehold.co/600x400" alt="Šlapací drezína" class="story-img">
      <p>
        S pomocí Jirky Kotase a nadšenců z Klubu přátel kolejových vozidel z Brna a historických kousků z jeho sbírky získal
        náš park kouzlo starých časů. Díky podpoře mnoha dalších se nám daří vytvářet prostor,
        kde si každý najde to svoje – od dětských her až po kouzlo mašinek.
      </p>
      <p>
        A víte co? Jsme teprve na začátku! Postupně přibývají tematické stanice, výstavy a atrakce,
        které spojují svět železnice s přírodou a fantazií. Chceme, aby se Zážitková železnice stala
        vaším oblíbeným výletním cílem – místem, kam se budete rádi vracet s úsměvem a plnou hlavou vzpomínek.
      </p>
    </div>
  </section>

</template>

<script setup lang="js">

import SectionHeading from "~/components/ui/SectionHeading.vue";

</script>

<style>

.story {
  background-color: #fff5ec;
  background-image: url('/images/backgrounds/bg1.png'); /* pozadí */
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #353535;
}


.story p {
  font-size: 24px;
  max-width: 850px;
  margin: 0 auto;
  margin-top: 24px
}

.story .story-img {
  margin-top: 80px;
  max-width: 100%;
  border-radius: 16px;
}

</style>