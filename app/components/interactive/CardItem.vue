<template>

  <div class="card">
    <img :src="image" :alt="heading">
    <h3 v-if="heading">{{ heading }}</h3>
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script setup>

defineProps({
  image: String,
  heading: String,
  text: String
})

</script>

<style scoped>

.card {
  border-radius: 16px;
  text-align: center;
  width: 100%;
}

.card img {
  max-width: 420px;
  width: 100%;
  border-radius: 16px;
}

.card:nth-child(1),
.card:nth-child(2) {
  margin-right: 20px;
}

.card h3 {
  font-size: 32px;
  color: #FFC779;
  margin-bottom: 16px;
  margin-top: 24px;
}

.card p {
  font-size: 16px;
  color: #FFF8ED;
}

</style>