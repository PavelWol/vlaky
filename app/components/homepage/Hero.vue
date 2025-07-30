<template>

  <header class="hero">
    <div class="overlay"></div>
    <nav class="navbar">
      <img src="https://placehold.co/600x400" alt="Logo" class="logo"> <!-- logo -->
      <ul class="nav-links">
        <li><a href="#onas">O nás</a></li>
        <li><a href="#cenik">Ceník</a></li>
        <li><a href="#drezina">Drezina</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
    </nav>

    <div class="hero-content">
      <h1>Železniční park <span class="highlight">plný zábavy!</span></h1>
      <p>
        Vítejte ve světě, kde se sny rozjíždějí po kolejích! Čeká vás den plný smíchu,
        dobrodružství a nových objevů - v historickém motoráčku, mezi atrakcemi, i v přírodě kolem.
        Naskočte do vlaku a hurá na cestu za zážitky, které budou bavit děti i dospělé!
      </p>
      <a href="#onas" class="btn">Více informací</a>
    </div>
  </header>

</template>

<style>

.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 218px;
  color: white;
  overflow: hidden;
}

.overlay {
  background-image: url('https://placehold.co/600x400');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

/* Navigace */
.navbar {
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  z-index: 2;
}

.logo {
  width: 118px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #FFC779;
}

/* Obsah uprostřed */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: auto;
  padding-top: 140px;
}

.hero-content h1 {
  font-size: 80px;
  line-height: 112%;
  max-width: 648px;
  margin: 0 auto;
}

.hero-content .highlight {
  color: #FFC779; /* oranžový text */
}

.hero-content p {
  font-size: 24px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 840px;
}

.btn {
  display: inline-block;
  margin-top: 40px;
  padding: 20px 48px;
  background-color: transparent;
  color: white;
  border: 2px solid #E5595B;
  border-radius: 32px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn:hover {
  border-color: #FFC779;
}

</style>