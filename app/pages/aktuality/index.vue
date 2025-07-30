<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
    <NuxtLink
        v-for="post in posts.posts"
        :key="post.slug"
        :to="`/aktuality/${post.slug}`"
        class="block bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
    >
      <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h2 class="text-lg font-bold">{{ post.title }}</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  import { usePostStore } from '~~/stores/posts'
  const posts = usePostStore()
</script>
