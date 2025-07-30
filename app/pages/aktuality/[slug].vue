<template>
  <div class="max-w-3xl mx-auto p-6">
    <img :src="post.image" :alt="post.title" class="w-full rounded mb-6" />
    <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
    <p class="text-gray-800 leading-relaxed">{{ post.content }}</p>
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
</script>