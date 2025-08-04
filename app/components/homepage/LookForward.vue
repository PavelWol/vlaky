<template>
  <section id="tesit-se" class="features">
    <div class="container pSection">
      <h2>Na co se u nás můžete těšit?</h2>
      <p class="intro">
        Připravili jsme pro vás nevšední zážitky, které si zamiluje celá rodina.<br>
        Nasedněte do historického motoráku a vydejte se na cestu za dobrodružstvím a užijte si den plný her a atrakcí. Co vás tedy čeká?
      </p>

      <div class="cards">

        <LookForwardItem
          image="/images/gallery/1.png"
          heading="Historický motorák"
          text="Naskočte do vláčku, který pamatuje staré časy! Podívejte se do kabiny strojvedoucího a splňte si dětský sen alespoň na chvíli."
        />

        <LookForwardItem
            image="/images/gallery/2.png"
            heading="Zábavní park"
            text="Skákací hrad, herní vagón, kolotoč i pískový svět - u nás si děti pořádně vyhrají a rodiče si odpočinou ve stínu lesíka."
        />

        <LookForwardItem
            image="/images/gallery/3.png"
            heading="Šlapací drezína"
            text="Nasedněte, šlápněte a hurá na výlet! Naše šlapací drezína je ideální pro rodinnou zábavu s kapkou pohybu."
        />

      </div>
      <SecondaryButton class="btn" href="/atrakce">Prohlédnout atrakce</SecondaryButton>
    </div>
  </section>

</template>

<script>

import LookForwardItem from '~/components/interactive/LookForwardItem.vue'
import {defineComponent} from "vue";
import SecondaryButton from "~/components/interactive/button/SecondaryButton.vue";

export default defineComponent({
  components: {SecondaryButton, LookForwardItem}
})


</script>

<style scoped>

.pContent {
  position: relative;
  overflow: hidden;
}

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

.btn {
  margin-top: 40px;
}

@media (max-width: 1024px) {
  .cards {
    flex-direction: column;
  }
}

</style>