<template>
  <section class="venue-section">
    <div class="background-overlay"></div>

    <div class="solid-white-card">
      <div class="header-group">
        <span class="script-label">Ang Lokasyon</span>
        <h2 class="main-title">Saan at Kailan</h2>
        <div class="title-underline"></div>
      </div>

      <div class="venue-flex">
        <div class="venue-panel">
          <div class="image-frame">
            <img :src="ceremonyImage" alt="Jardin de Miramar Estacion" class="venue-img" />
            <div class="frame-overlay"></div>
          </div>
          
          <div class="content-box">
            <span class="venue-tag">Ang Seremonya</span>
            <h3 class="location-name">Jardin de Miramar</h3>
            <p class="garden-name">Estacion Garden</p>
            
            <div class="details-group">
              <p class="detail-item time">Ika-tatlo ng hapon</p>
              <p class="detail-item address">Buliran Rd, Brgy. San Isidro, Antipolo City</p>
            </div>
            
            <a href="https://maps.google.com/?q=Jardin+de+Miramar" target="_blank" class="blue-button">
              Tingnan sa Mapa
            </a>
          </div>
        </div>

        <div class="venue-panel featured">
          <div class="image-frame">
            <img :src="receptionImage" alt="Jardin de Miramar Reception" class="venue-img" />
            <div class="frame-overlay"></div>
          </div>
          
          <div class="content-box">
            <span class="venue-tag active-blue">Ang Resepsyon</span>
            <h3 class="location-name">Jardin de Miramar</h3>
            <p class="garden-name">Reception Hall</p>
            
            <div class="details-group">
              <p class="detail-item time">Susunod agad pagkatapos</p>
              <p class="detail-item address">Buliran Rd, Brgy. San Isidro, Antipolo City</p>
            </div>
            
            <a href="https://maps.google.com/?q=Jardin+de+Miramar" target="_blank" class="blue-button filled">
              Tingnan sa Mapa
            </a>
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
    default: 'https://jardindemiramareventsvenue.com/jardindemiramareventsvenue/wp-content/uploads/2024/02/Artboard-4.png'
  },
  receptionImage: { 
    type: String, 
    default: 'https://jardindemiramareventsvenue.com/jardindemiramareventsvenue/wp-content/uploads/2024/02/Artboard-2.png'
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@300;400;600&display=swap');

.venue-section {
  position: relative;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a0a1a;
  min-height: 100vh;
  overflow: hidden;
}

.background-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(10, 10, 26, 0.9), rgba(10, 10, 26, 0.9)), 
                    url('https://lh3.googleusercontent.com/d/1y8bLvac8b6IRjoz4W_UhGEXBQ8cSGdII');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

/* SOLID WHITE CARD STYLE */
.solid-white-card {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  width: 100%;
  background: #ffffff;
  padding: 60px 40px;
  border-radius: 12px;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
}

.header-group { text-align: center; margin-bottom: 50px; }
.script-label { font-family: 'Great Vibes', cursive; font-size: 2.2rem; color: #191970; }
.main-title { 
  font-family: 'Playfair Display', serif; 
  color: #1c2833; 
  font-size: 2.5rem; 
  letter-spacing: 4px; 
  text-transform: uppercase;
  margin-top: 5px;
}
.title-underline {
  width: 60px; height: 1px; background: #191970; margin: 15px auto;
}

.venue-flex { display: flex; gap: 40px; }
.venue-panel { 
  flex: 1; 
  display: flex; 
  flex-direction: column; 
  background: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.image-frame {
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 25px;
}

.venue-img { 
  width: 100%; height: 100%; object-fit: cover; 
  transition: transform 0.8s ease;
}

.image-frame:hover .venue-img { transform: scale(1.08); }

.content-box { text-align: center; padding-bottom: 10px; }
.venue-tag {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #64748b;
  display: block;
  margin-bottom: 10px;
}
.venue-tag.active-blue { color: #191970; font-weight: 600; }

.location-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: #1c2833;
  margin-bottom: 2px;
}

.garden-name {
  font-family: 'Great Vibes', cursive;
  font-size: 1.6rem;
  color: #191970;
  margin-bottom: 20px;
}

.details-group { margin-bottom: 25px; }
.detail-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.6;
}
.detail-item.time { font-weight: 600; color: #191970; margin-bottom: 5px; }

/* UPDATED BUTTONS */
.blue-button {
  display: inline-block;
  padding: 12px 25px;
  border: 1px solid #191970;
  color: #191970;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 4px;
  transition: all 0.3s;
}

.blue-button:hover {
  background: #f1f5f9;
  transform: translateY(-2px);
}

.blue-button.filled {
  background: #191970;
  color: #fff;
}

.blue-button.filled:hover {
  background: #000040;
}

@media (max-width: 850px) {
  .venue-flex { flex-direction: column; gap: 30px; }
  .solid-white-card { padding: 40px 20px; }
  .image-frame { height: 200px; }
}
</style>