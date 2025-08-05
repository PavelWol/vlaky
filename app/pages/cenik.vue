<template>
  <div class="cenik-page">
    <BackgroundScroll />
    <div class="container">

      <PriceTable />
      <TimeTable />
      <ContactInfo />

    </div>
  </div>
</template>

<script setup lang="js">

import PriceTable from '~/components/table/PriceTable.vue'
import TimeTable from '~/components/table/TimeTable.vue'
import ContactInfo from "~/components/table/ContactInfo.vue";
import BackgroundScroll from "~/components/BackgroundScroll.vue";

</script>

<style>

.cenik-page {
  font-family: sans-serif;
  line-height: 180%;
  text-align: center;
  position: relative;
}

.section:not(:first-child) {
  padding-top: 80px;
}

.cenik-page h2 {
  line-height: 180%;
  color: #AE4343;
}

table {
  width: 100%;
  margin: 24px auto;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
}

.price-table th, .price-table td {
  background-color: #ffffff;
  color: #353535;
}

.schedule-table th, .schedule-table td {
  background-color: #ffffff;
}

.note {
  font-style: italic;
  font-size: 14px;
}

.open-time {
  font-weight: bold;
  font-size: 24px;
  margin-top: 16px;
}

.contact {
  margin-top: 16px;
  font-size: 16px;
}

</style>
<script setup lang="js">
</script>