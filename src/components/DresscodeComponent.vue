<template>
  <section class="dress-code-hero-layout">
    <div class="banner-container">
      <div 
        class="banner-img" 
        :style="{ backgroundImage: `url(${calendarImage})` }"
      >
        <div class="banner-overlay"></div>
      </div>
    </div>

    <div class="card-overlap-area">
      <div class="solid-white-card">
        
        <div class="header-group">
          <span class="banner-script adelia-font">Gabay sa Kasuotan</span>
          <h2 class="sub-title">Klasiko at Elegante</h2>
          <div class="title-underline"></div>
          <p class="sub-title-spacing">PORMAL AT SEMI-PORMAL</p>
        </div>

        <div class="palette-section">
          <div class="shade-alignment-wrapper">
            <span class="shade-label">Paleta ng mga Kulay</span>
            <div class="circle-palette">
              <div 
                v-for="color in navyPalette" 
                :key="color" 
                class="color-circle" 
                :style="{ backgroundColor: color }"
              ></div>
            </div>
          </div>
        </div>

        <hr class="section-divider" />

        <div class="unified-attire-container">
          
          <div class="side-illustration side-left">
            <div class="illustration-box">
              <img src="/public/images/female-formal.png" alt="Kasuotang Pambabae" class="art-img big-display" />
            </div>
          </div>

          <div class="central-content">
            <div class="info-block">
              <h3 class="role-title">Mga Pangunahing Saksi</h3>
              <br/>
              <p class="role-desc">Ninong at Ninang</p>
              <p class="value-text">Pormal na Kasuotan</p>
            </div>

            <div class="info-block">
              <br/>
              <h3 class="role-title">Mga Panauhin</h3>
              <br/>
              <div class="message-box">
                <p class="description">
                  Hinihiling po namin ang inyong pakikiisa sa pagsusuot ng kahit anong shade ng 
                  <br><strong class="navy-accent">Midnight Blue</strong> o <strong class="navy-accent">Navy Blue</strong>.
                </p>
              </div>
            </div>
          </div>

          <div class="side-illustration side-right">
            <div class="illustration-box">
              <img src="/public/images/male-formal.webp" alt="Kasuotang Panlalaki" class="art-img big-display" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  calendarImage: { 
    type: String, 
    default: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070'
  }
});

const navyPalette = ref([
  '#b0c4de', '#4682b4', '#191970', '#000080', '#05051a'
]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@300;400;600&display=swap');

@font-face {
  font-family: 'Adelia';
  src: url('/public/fonts/adelia.ttf') format('truetype');
}

.adelia-font { font-family: 'Adelia', cursive !important; }

.dress-code-hero-layout {
  width: 100%;
  background: #fdfbf7;
  padding-bottom: 40px;
  overflow: hidden; /* Prevents horizontal scroll from large images */
}

.banner-container {
  width: 100%;
  height: 40vh;
  position: relative;
}

.banner-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.card-overlap-area {
  padding: 0 10px;
  display: flex;
  justify-content: center;
  margin-top: -100px;
}

.solid-white-card {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  width: 100%;
  background: #ffffff;
  padding: 40px 10px;
  border-radius: 4px;
  box-shadow: 0 20px 50px rgba(0, 31, 63, 0.1);
}

.header-group { text-align: center; margin-bottom: 20px; }
.banner-script { font-size: clamp(1.8rem, 8vw, 2.5rem); color: #191970; }
.sub-title { font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 5vw, 2rem); letter-spacing: 2px; text-transform: uppercase; margin-top: 15px; }
.title-underline { width: 40px; height: 3px; background: #191970; margin: 10px auto; }

.palette-section { margin-bottom: 20px; text-align: center; }
.circle-palette { display: flex; justify-content: center; gap: 8px; }
.color-circle { width: 35px; height: 35px; border-radius: 50%; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }

.section-divider { border: 0; border-top: 1px solid #edf2f7; margin: 30px 0; }

/* THE BIGGER SIDE-BY-SIDE LAYOUT */
.unified-attire-container {
  display: flex;
  flex-direction: row !important; /* Persistent side-by-side */
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding: 20px 0;
}

.side-illustration {
  flex: 1.8; /* Increased flex to make images bigger */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.side-left { margin-left: -40px; } /* Pulls image more into the view */
.side-right { margin-right: -40px; }

.art-img.big-display {
  width: 100%;
  max-width: 600px; /* Increased max width */
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 15px 30px rgba(0,0,0,0.15));
  display: block;
  /* Massive scale that adjusts per screen size */
  transform: scale(3.5); 
}

.central-content {
  flex: 2; /* Gives text space without being squashed */
  text-align: center;
  z-index: 5;
  padding: 0 5px;
}

.info-block .role-title { font-family: 'Playfair Display', serif; font-size: clamp(1rem, 4vw, 1.6rem); color: #191970; }
.description { font-family: 'Montserrat', sans-serif; font-size: clamp(0.75rem, 3vw, 1rem); line-height: 1.6; color: #4a5568; }

/* MOBILE SPECIFIC IMAGE SCALE */
@media (max-width: 600px) {
  .art-img.big-display {
    transform: scale(2.2); /* Slightly smaller on tiny phones to prevent covering text */
  }
  .side-left { margin-left: -20px; }
  .side-right { margin-right: -20px; }
}

/* DESKTOP REFINEMENTS */
@media (min-width: 900px) {
  .solid-white-card { padding: 80px 60px; }
  .art-img.big-display { transform: scale(4.5); } /* Full impact on large screens */
  .side-left { margin-left: -80px; }
  .side-right { margin-right: -80px; }
  .central-content { flex: 1.5; }
}
</style>