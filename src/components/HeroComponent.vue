<template>
  <section class="wedding-hero">
    <div class="hero-bg-container">
      <div 
        class="ken-burns-bg" 
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      ></div>
      <div class="romantic-overlay"></div>
    </div>
    
    <transition name="card-fade" appear>
      <div class="invite-card">
        <div class="card-image-side">
          <img :src="coupleImage" alt="Jeffrey and Jeana" />
          <div class="image-inner-glow"></div>
        </div>

        <div class="card-text-side">
          <div class="content">
            <span class="label">Inaanyayahan po namin kayong sumaksi</span>
            
            <div class="couple-names">
              <span class="name ghost-text">Jeffrey</span>
              <span class="ampersand">at</span>
              <span class="name ghost-text-delayed">Jeana</span>
            </div>
            
            <p class="announcement">Sa aming Pag-iisang Dibdib</p>
            
            <div class="divider"></div>
            
            <!-- <p class="details">Ika-24 ng Pebrero, 2026 • Antipolo City</p> -->
            
            <!-- <button class="rsvp-btn">Mag-RSVP</button> -->
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
defineProps({
  backgroundImage: { 
    type: String, 
    default: 'https://images.unsplash.com/photo-1519741497674-611481863552' 
  },
  coupleImage: { 
    type: String, 
    default: 'https://drive.google.com/drive/folders/1Lyk-3-cNKSEHWFgtOgXpFjNicMHSWBiE' 
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;1,400&family=Montserrat:wght@300;400&display=swap');

.wedding-hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #0a0a1a; /* Midnight Blue Base */
}

.hero-bg-container {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.ken-burns-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(8px) brightness(0.6); /* Slightly darker for blue theme */
  animation: slowZoom 40s infinite alternate ease-in-out;
}

.romantic-overlay {
  position: absolute;
  inset: 0;
  /* Blue-tinted radial gradient */
  background: radial-gradient(circle, rgba(25, 25, 112, 0.1) 0%, rgba(10, 10, 26, 0.7) 100%);
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.12); }
}

.invite-card {
  position: relative;
  z-index: 10;
  display: flex;
  width: 100%;
  height: 520px;
  background: #fcfcff; /* "Arctic White" with a hint of blue */
  box-shadow: inset 0 0 30px rgba(255,255,255,1), 0 30px 60px rgba(0,0,0,0.5);
}

.card-image-side {
  flex: 1.2;
  position: relative;
  overflow: hidden;
}

.card-image-side img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-inner-glow {
  position: absolute;
  inset: 0;
  box-shadow: inset -60px 0 80px -20px #fcfcff;
}

.card-text-side {
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.label {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #5d6d7e; /* Steel Blue-Gray */
  margin-bottom: 1.5rem;
}

.couple-names {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(3.5rem, 6vw, 5rem);
  color: #191970; /* Midnight Blue */
  margin-bottom: 0.5rem;
}

.ampersand {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.6rem;
  color: #2c3e50;
  margin: 0 15px;
}

.announcement {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #1c2833;
}

.divider {
  height: 1px;
  width: 50px;
  background: #7f8c8d; /* Silver-ish divider */
  margin: 1.5rem 0;
}

.details {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  color: #515a6b;
  letter-spacing: 1px;
}

.rsvp-btn {
  margin-top: 2rem;
  padding: 10px 35px;
  background: transparent;
  border: 1px solid #191970;
  color: #191970;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.4s;
}

.rsvp-btn:hover {
  background: #191970;
  color: white;
  box-shadow: 0 4px 15px rgba(25, 25, 112, 0.3);
}

/* --- GHOST REVEAL ANIMATIONS --- */
.ghost-text {
  display: inline-block;
  animation: ghostReveal 2s ease-out forwards 0.5s; 
  opacity: 0;
}

.ghost-text-delayed {
  display: inline-block;
  animation: ghostReveal 2s ease-out forwards 1s; 
  opacity: 0;
}

@keyframes ghostReveal {
  0% { opacity: 0; filter: blur(10px); transform: translateY(10px); }
  100% { opacity: 1; filter: blur(0); transform: translateY(0); }
}

.card-fade-enter-active {
  transition: opacity 2.5s ease;
}
.card-fade-enter-from {
  opacity: 0;
}

@media (max-width: 900px) {
  .invite-card {
    width: 90%;
    height: auto;
    flex-direction: column;
    border-radius: 10px;
  }
  .card-image-side { height: 280px; }
  .image-inner-glow { box-shadow: inset 0 -60px 80px -20px #fcfcff; }
  .card-text-side { padding: 3rem 1.5rem; }
}
</style>