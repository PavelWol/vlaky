<template>
  <div class="container">
    <h2>Akce a aktuality</h2>
    <div class="aktuality">
      <NuxtLink
          v-for="post in posts.posts"
          :key="post.slug"
          :to="`/aktuality/${post.slug}`"
          class="block bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
      >
        <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
        <div class="text">
          <h3 class="">{{ post.title }}</h3>
          <p>{{ post.date }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  import { usePostStore } from '~~/stores/posts'
  const posts = usePostStore()
</script>

<style scoped>

.container {
  padding-top: 140px;
}

a {
  text-decoration: none;
}

h2 {
  text-align: center;
  color: #AE4343;
}

h3 {
  color: #AE4343;
  margin: 24px 0 16px 0;
}

p {
  font-size: 16px;
  color: #353535;
}

.aktuality {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  position: relative;
  margin-top: 72px;
}

.aktuality img {
  cursor: pointer;
  max-width: 420px;
  width: 100%;
  border-radius: 16px;
}

.text {
  text-align: center;
}

</style>
