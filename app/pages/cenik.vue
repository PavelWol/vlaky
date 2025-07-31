<template>
  <div class="cenik-page">
    <div class="container">
      <!-- Sekce 1: Ceník -->
      <section class="section">
        <h2>Ceník platný od 1.7.2025</h2>
        <p>Nádraží Uhřice – Janův dvůr</p>
        <table class="price-table">
          <thead>
          <tr>
            <th></th>
            <th>Jízda vláčkem</th>
            <th>Dětský park</th>
            <th>Obě atrakce</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Dítě do 3,9 let</td>
            <td>- Kč</td>
            <td>50 Kč</td>
            <td>50 Kč</td>
          </tr>
          <tr>
            <td>Dítě 4 – 17,9 let</td>
            <td>110 Kč</td>
            <td>150 Kč</td>
            <td>240 Kč</td>
          </tr>
          <tr>
            <td>Dospělý (doprovod)</td>
            <td>99 Kč</td>
            <td>-</td>
            <td>99 Kč</td>
          </tr>
          <tr>
            <td>Rodinné (1 dospělý + 2 děti)</td>
            <td>279 Kč</td>
            <td>179 Kč</td>
            <td>349 Kč / 519 Kč*</td>
          </tr>
          <tr>
            <td>Rodinné (2 dospělí + 2 děti)</td>
            <td>379 Kč</td>
            <td>179 Kč</td>
            <td>409 Kč / 589 Kč*</td>
          </tr>
          </tbody>
        </table>
        <p class="note">* S dětmi nad 4 roky / kombinace</p>
      </section>

      <!-- Sekce 2: Jízdní řád -->
      <section class="section">
        <h2>Jízdní řád – projížďky vlakem každou sobotu</h2>
        <table class="schedule-table">
          <thead>
          <tr>
            <th>Uhřice</th>
            <th>Bohumilice</th>
            <th>Bohumilice</th>
            <th>Uhřice</th>
          </tr>
          </thead>
          <tbody>
          <tr><td>11:30</td><td>11:40</td><td>11:50</td><td>12:00</td></tr>
          <tr><td>12:30</td><td>12:40</td><td>12:50</td><td>13:00</td></tr>
          <tr><td>13:30</td><td>13:40</td><td>13:50</td><td>14:00</td></tr>
          <tr><td>14:30</td><td>14:40</td><td>14:50</td><td>15:00</td></tr>
          <tr><td>15:30</td><td>15:40</td><td>15:50</td><td>16:00</td></tr>
          <tr><td>16:30</td><td>16:40</td><td>–</td><td>–</td></tr>
          </tbody>
        </table>
        <p class="note">Jízdenka platí celý den, nejen na jednu jízdu.</p>
      </section>

      <!-- Sekce 3: Drezína a kontakt -->
      <section class="section">
        <h2>Šlapací drezína</h2>
        <p>
          Šlapací drezína pro 6 osob (cca 6 km po trati).<br>
          Půjčovné 460 Kč / 2 hodiny<br>
          Rezervujte na tel.: <strong>774 686 350</strong>
        </p>
        <p class="open-time">Otevřeno denně 11:00 – 18:00</p>
        <p class="contact">
          Uhřice u Kyjova 200<br>
          GPS: 49.0223742N, 16.9649011E<br>
          facebook: zážitková železnice Čejč - Uhřice<br>
          instagram: zazitkovazeleznice<br>
          #zazitkovazeleznice
        </p>
      </section>
    </div>
  </div>
</template>

<style>

.cenik-page {
  font-family: sans-serif;
  line-height: 180%;
  background: #FFF8ED;
  text-align: center;
}

.section:not(:first-child) {
  padding-top: 80px;
}

h2 {
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
<script setup lang="ts">
</script>