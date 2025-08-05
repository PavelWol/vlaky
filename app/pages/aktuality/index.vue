<template>
  <div ref="aktualityRef" class="container">
    <h2>Akce a aktuality</h2>
    <div class="aktuality">
      <NuxtLink
          v-for="post in posts.posts"
          :key="post.slug"
          :to="`/aktuality/${post.slug}`"
          class="pImage"
      >
        <img :src="post.image" :alt="post.title" />
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

  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import {ScrollSmoother} from "gsap/ScrollSmoother";

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  const aktualityRef = ref(null)

  onMounted(() => {
    const proxy = { skew: 0 }
    const skewSetter = gsap.quickSetter(".pImage", "skewY", "deg")
    const clamp = gsap.utils.clamp(-20, 20)

    gsap.from(aktualityRef.value, {
      scrollTrigger: {
        trigger: aktualityRef.value,
        start: 'top 80%',
      },
      x: -20,
      opacity: 0.5,
      duration: 0.8,
      ease: 'power2.Out'
    })

    ScrollTrigger.create({
      trigger: ".container",
      start: "top top",
      end: "bottom 150",
      scrub: true,
      onUpdate: (self) => {
        const velocity = self.getVelocity()
        const skew = clamp(velocity / -700)

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew

          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => {
              skewSetter(proxy.skew)
            }
          })
        }
      }
    })

    gsap.set(".pImage", {
      transformOrigin: "center center",
      force3D: true
    })
  })

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
