<template>
  <div :class="['section-heading', colorClass, alignClass]">
    <slot name="title">
      <h2 :class="colorClass">Výchozí nadpis</h2>
    </slot>

    <slot name="subtitle">
      <p>Výchozí podnadpis</p>
    </slot>

    <slot name="extra" />
    <div v-if="showCards" class="grid">
      <slot name="cards" />
    </div>
  </div>
</template>

<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'red'
  },
  align: {
    type: String,
    default: 'center'
  },
  showCards: {
    type: Boolean,
    default: false
  }
})

const colorClass = computed(() =>
    props.color === 'yellow' ? 'yellow-heading' : 'red-heading'
)

const alignClass = computed(() =>
    props.align === 'left' ? 'align-left' : 'align-center'
)
</script>

<style>

.section-heading p {
  font-size: 24px;
  max-width: 850px;
  margin: 0 auto;
  margin-top: 24px;
}

.align-center {
  text-align: center;
}

.align-left {
  text-align: left;
}

.red-heading h2 {
  color: #AE4343 !important;
}

.yellow-heading h2 {
  color: #FFC779 !important;
}

img {
  width: 100%;
}

</style>