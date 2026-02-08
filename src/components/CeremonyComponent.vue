<template>
  <section class="venue-section">
    <div class="background-overlay"></div>

    <div class="solid-white-card">
      <div class="header-group">
        <span class="script-label adelia-font">Ang Lokasyon</span>
        <h2 class="main-title">Saan at Kailan</h2>
        <div class="title-underline"></div>
      </div>

      <div class="venue-container">
        
        <div class="venue-row top-row">
          <div class="image-frame">
            <img :src="ceremonyImage" alt="Ang Seremonya" class="venue-img" />
          </div>

          <div class="content-box polaroid-style right-overlap">
            <div class="polaroid-image-inner">
              <img :src="'https://jardindemiramareventsvenue.com/jardindemiramareventsvenue/wp-content/uploads/2024/02/Artboard-4.png'" alt="Ang Seremonya" />
            </div>

            <span class="venue-tag">Ang Seremonya</span>
            <h3 class="location-name">Jardin de Miramar</h3>
            <p class="garden-name adelia-font">Estacion Garden</p>
            
            <div class="details-group">
              <p class="detail-item time">Ika-tatlo ng hapon</p>
              <p class="detail-item address">Antipolo City</p>
            </div>
            
            <a href="https://maps.google.com" target="_blank" class="navy-button">
              Mapa
            </a>
          </div>
        </div>

        <div class="venue-row bottom-row">
          <div class="content-box polaroid-style left-overlap">
            <div class="polaroid-image-inner">
              <img :src="'https://jardindemiramareventsvenue.com/jardindemiramareventsvenue/wp-content/uploads/2024/02/Artboard-2.png'" alt="Ang Resepsyon" />
            </div>

            <span class="venue-tag">Ang Resepsyon</span>
            <h3 class="location-name">Jardin de Miramar</h3>
            <p class="garden-name adelia-font">Reception Hall</p>
            
            <div class="details-group">
              <p class="detail-item time">Susunod agad</p>
              <p class="detail-item address">Antipolo City</p>
            </div>
            
            <a href="https://maps.google.com" target="_blank" class="navy-button filled">
              Mapa
            </a>
          </div>

          <div class="image-frame">
            <img :src="receptionImage" alt="Ang Resepsyon" class="venue-img" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  ceremonyImage: { 
    type: String, 
    default: '/public/images/church.jpg'
  },
  receptionImage: { 
    type: String, 
    default: '/public/images/reception.jpg'
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

@font-face {
  font-family: 'Adelia';
  src: url('/public/fonts/adelia.ttf') format('truetype');
}

.adelia-font { font-family: 'Adelia', cursive !important; }

.venue-section {
  position: relative;
  padding: 40px 10px;
  display: flex;
  justify-content: center;
  background: #fdfbf7;
}

.solid-white-card {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  width: 100%;
  background: #ffffff;
  padding: 40px 10px;
}

.header-group { text-align: center; margin-bottom: 40px; }
.main-title { 
  font-family: 'Playfair Display', serif; 
  font-size: clamp(1.3rem, 5vw, 2.5rem); 
  letter-spacing: 2px; 
  color: #001f3f;
  text-transform: uppercase;
}
.title-underline { width: 40px; height: 1.5px; background: #001f3f; margin: 10px auto; }

.venue-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

/* --- OVERLAP LAYOUT (Mobile & Desktop) --- */
.venue-row { 
  display: flex; 
  align-items: center; 
  position: relative; 
  width: 100%; 
}

.image-frame {
  flex: 0 0 62%; /* Controls the large background image width */
  height: clamp(180px, 35vw, 420px);
  overflow: hidden;
  border: 4px solid #ffffff;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  z-index: 1;
}

.venue-img { width: 100%; height: 100%; object-fit: cover; }

.polaroid-style {
  flex: 0 0 52%; /* Controls the overlapping box width */
  background: #ffffff;
  padding: 8px 8px 25px 8px; 
  z-index: 2;
  position: relative;
  box-shadow: 0 8px 25px rgba(0, 31, 63, 0.12);
  border: 1px solid #e2e8f0;
}

/* Overlap margins - stays active on mobile */
.right-overlap { margin-left: -15%; }
.left-overlap { margin-right: -15%; text-align: right; }

.polaroid-image-inner {
  width: 100%;
  height: clamp(75px, 18vw, 200px);
  overflow: hidden;
  margin-bottom: 10px;
  background: #f0f0f0;
}
.polaroid-image-inner img { width: 100%; height: 100%; object-fit: cover; }

/* Typography Scaling */
.venue-tag { font-family: 'Montserrat'; font-size: 0.5rem; letter-spacing: 1px; color: #64748b; text-transform: uppercase; display: block; }
.location-name { font-family: 'Playfair Display'; font-size: clamp(0.8rem, 3vw, 1.8rem); color: #001f3f; line-height: 1.2; }
.garden-name { font-size: clamp(0.75rem, 3vw, 1.6rem); color: #003366; margin-bottom: 8px; }
.detail-item { font-family: 'Montserrat'; font-size: 0.6rem; color: #1e293b; line-height: 1.3; }

.navy-button {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 12px;
  border: 1px solid #001f3f;
  color: #001f3f;
  text-decoration: none;
  font-size: 0.55rem;
  font-weight: 600;
  text-transform: uppercase;
}
.navy-button.filled { background: #001f3f; color: white; }

/* DESKTOP ENHANCEMENTS */
@media (min-width: 850px) {
  .venue-section { padding: 80px 20px; }
  .solid-white-card { padding: 80px 60px; }
  .venue-container { gap: 100px; }
  .polaroid-style { flex: 0 0 42%; padding: 25px 25px 50px 25px; }
  .right-overlap { margin-left: -10%; }
  .left-overlap { margin-right: -10%; }
  .polaroid-image-inner { height: 200px; margin-bottom: 20px; }
  .detail-item { font-size: 0.9rem; }
  .navy-button { font-size: 0.7rem; padding: 10px 25px; }
}
</style>