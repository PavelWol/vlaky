<template>

  <section id="onas" class="features">
    <div class="container">
      <h2>Na co se u nás můžete těšit?</h2>
      <p class="intro">
        Připravili jsme pro vás nevšední zážitky, které si zamiluje celá rodina.<br>
        Nasedněte do historického motoráku a vydejte se na cestu za dobrodružstvím a užijte si den plný her a atrakcí. Co vás tedy čeká?
      </p>

      <div class="cards">

        <LookForwardItem
          image="https://placehold.co/600x400"
          heading="Historický motorák"
          text="Naskočte do vláčku, který pamatuje staré časy! Podívejte se do kabiny strojvedoucího a splňte si dětský sen alespoň na chvíli."
        />

        <LookForwardItem
            image="https://placehold.co/600x400"
            heading="Zábavní park"
            text="Skákací hrad, herní vagón, kolotoč i pískový svět - u nás si děti pořádně vyhrají a rodiče si odpočinou ve stínu lesíka."
        />

        <LookForwardItem
            image="https://placehold.co/600x400"
            heading="Šlapací drezína"
            text="Nasedněte, šlápněte a hurá na výlet! Naše šlapací drezína je ideální pro rodinnou zábavu s kapkou pohybu."
        />

      </div>
    </div>
  </section>

</template>

<script>

import LookForwardItem from '~/components/interactive/LookForwardItem.vue'
import {defineComponent} from "vue";

export default defineComponent({
  components: {LookForwardItem}
})


</script>

<style scoped>

.features {
  background-color: #AE4343;
  /* background-image: url('https://placehold.co/600x400'); /* pozadí */
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #333;
}

.features h2 {
  color: #FFC779;
  margin-bottom: 20px;
  font-size: 64px;

}

.features .intro {
  max-width: 800px;
  margin: 0 auto 50px;
  color: #353535;
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

@media (max-width: 1024px) {
  .cards {
    flex-direction: column;
  }
}

</style>