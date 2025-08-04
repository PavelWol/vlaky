<template>
  <div class="green">
    <section class="container form-section">
      <h2>Kontaktujte nás</h2>
      <p class="intro-text">Máte dotaz? Vyplňte formulář a my se vám ozveme.</p>

      <form class="contact-form" @submit.prevent="handleSubmit">

        <input type="text" name="text" placeholder="Vaše jméno" v-model="form.name" required />

        <div class="row">
          <input type="email" name="email" placeholder="E-mail" v-model="form.email" required />
          <input type="tel" name="tel" placeholder="Telefon" v-model="form.phone" />
        </div>

        <textarea placeholder="Vaše zpráva" name="textarea" rows="4" v-model="form.message"></textarea>

        <SecondaryButton class="btn" href="/rezervace">Odeslat formulář</SecondaryButton>
      </form>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import SecondaryButton from "~/components/interactive/button/SecondaryButton.vue";

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Odesláno:', form)
  // Zde volání API nebo další logiku
}
</script>

<style scoped>

.green {
  background-color: #124432;
}

.form-section {
  text-align: center;
}

.form-section h2 {
  color: #FFC779;
}

.intro-text {
  margin: 24px auto 40px auto;
  color: #ffffff;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 12px 15px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: "Readex Pro", sans-serif;
  color: #353535;
}

.contact-form textarea {
  min-height: 250px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.row input {
  flex: 1;
}

.btn {
  max-width: 230px;
  margin: 40px auto 0 auto;
}

@media (max-width: 640px) {
  .row {
    flex-direction: column;
  }
}
</style>