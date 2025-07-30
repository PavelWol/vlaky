<template>

  <header class="hero">
    <div class="overlay"></div>

    <div class="hero-content">
      <h1>Železniční park <span class="highlight">plný zábavy!</span></h1>
      <p>
        Vítejte ve světě, kde se sny rozjíždějí po kolejích! Čeká vás den plný smíchu,
        dobrodružství a nových objevů - v historickém motoráčku, mezi atrakcemi, i v přírodě kolem.
        Naskočte do vlaku a hurá na cestu za zážitky, které budou bavit děti i dospělé!
      </p>
      <a href="#onas" class="btn">Více informací</a>
    </div>
  </header>

</template>

<style>

.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 218px;
  color: white;
  overflow: hidden;
}

.overlay {
  background-image: url('https://placehold.co/600x400');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}



/* Obsah uprostřed */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: auto;
  padding-top: 140px;
}

.hero-content h1 {
  font-size: 80px;
  line-height: 112%;
  max-width: 648px;
  margin: 0 auto;
}

.hero-content .highlight {
  color: #FFC779; /* oranžový text */
}

.hero-content p {
  font-size: 24px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 840px;
}



</style>
<script setup lang="ts">
</script>