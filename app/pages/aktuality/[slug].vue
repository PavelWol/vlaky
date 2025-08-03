<template>
  <div ref="clanekRef" class="container">
    <div class="post">
      <h2 class="">{{ post.title }}</h2>
      <p>{{ post.date }}</p>
      <img :src="post.image" :alt="post.title" class="post-img" />
      <div class="content" v-html="post.content">
      </div>
      <div class="post-imgs">
        <img :src="post.image" :alt="post.title" class="post-img" />
        <img :src="post.image" :alt="post.title" class="post-img" />
      </div>
      <div class="content" v-html="post.last">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { usePostStore } from '~~/stores/posts'

  const route = useRoute()
  const posts = usePostStore()

  const post = posts.getBySlug(route.params.slug)

  if (!post) {
    throw createError({ statusCode: 404, message: 'Článek nebyl nalezen.' })
  }

  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  const clanekRef = ref(null)

  onMounted(() => {
    gsap.from(clanekRef.value, {
      scrollTrigger: {
        trigger: clanekRef.value,
        start: 'top 80%',
      },
      x: -20,
      opacity: 0.5,
      duration: 0.8,
      ease: 'power2.Out'
    })
  })

</script>

<style>

.container {
  padding-top: 140px;
}

.post {
  text-align: center;
}

.post > p {
  font-size: 16px;
  margin: 24px 0 80px 0;
}

h2 {
  color: #AE4343;
}

.content {
  max-width: 860px;
  margin: 80px auto 0 auto;
}

.content p {
  text-align: left;
  font-size: 18px;
  margin-top: 24px;
}

.post-img {
  max-width: 1300px;
}

.post-imgs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 860px;
  margin: 80px auto 80px auto;
}

.post-imgs img {
  max-width: 420px;
}

@media (max-width: 1024px) {
  .post-imgs {
    flex-direction: column;
    gap: 20px;
  }

  .post > p {
    margin: 24px 0 40px 0;
  }
}

</style>