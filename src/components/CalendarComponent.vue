<template>
  <section class="calendar-wedding-section">
    <div class="banner-container">
      <div 
        class="banner-img" 
        :style="{ backgroundImage: `url(${calendarImage})` }"
      >
      </div>
    </div>

    <div class="bible-verse-section">
      <div class="verse-wrapper">
        <p class="verse-text adelia-font">"Mananatili ang pag-ibig, ang pag-asa, at ang pananampalataya; ngunit ang pinakadakila sa mga ito ay ang pag-ibig."</p>
        <p class="verse-reference">1 Corinto 13:13</p>
      </div>
    </div>

    <div class="video-teaser-section">
      <div class="video-container">
        <iframe 
          src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1400101321252561%2F&show_text=false&width=560&t=0" 
          width="560" 
          height="315" 
          style="border:none; overflow:hidden" 
          scrolling="no" 
          frameborder="0" 
          allowfullscreen="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <br/>
      <p class="video-caption adelia-font">Panoorin ang aming kwento</p>
    </div>

    <div class="calendar-invitation-area">
      <div class="card-container">
        
        <div class="polaroid-wrapper">
          <div class="polaroid">
            <img :src="bannerImage" alt="Couple" />
            <div class="polaroid-date">02 . 24 . 26</div> </div>
        </div>

        <div class="calendar-details">
          <p class="invite-label adelia-font">I-SAVE ANG PETSA</p>
          <h3 class="month-year">Pebrero 2026</h3>
          
          <div class="gold-line"></div>

          <div class="days-grid">
            <span class="day-label" v-for="label in ['S','M','T','W','T','F','S']" :key="label">
              {{ label }}
            </span>
            
            <span class="date" v-for="n in 28" :key="n" :class="{ 'highlighted': n === 24 }">
              {{ n }}
              <div v-if="n === 24" class="heart-marker">♥</div>
            </span>
          </div>

          <p class="marriage-status">SA AMING PAG-IISANG DIBDIB</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  calendarImage: { 
    type: String, 
    default: 'https://lh3.googleusercontent.com/d/1UD0y4_y7XoimuBJgz8Pt4c8dVwC71EF-'
  },
  bannerImage: {
    type: String,
    default: 'https://lh3.googleusercontent.com/d/1tbYyXXlQgwF3tFNbDzoRout4MpdRrSkw'
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

/* --- FONT FACE --- */
@font-face {
  font-family: 'Adelia';
  src: url('/public/fonts/adelia.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.adelia-font {
  font-family: 'Adelia', cursive !important;
}

.calendar-wedding-section {
  width: 100%;
  background: #fdfbf7; 
}

/* --- BANNER --- */
.banner-container {
  width: 100%;
  height: 50vh;
  position: relative;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center 25%;
  filter: brightness(1.15) contrast(0.95);
}

/* --- VERSE --- */
.bible-verse-section {
  width: 100%;
  padding: 60px 20px 20px 20px;
  text-align: center;
}

.verse-text {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.verse-reference {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 3px;
  color: #8e8e8e;
  text-transform: uppercase;
}

/* --- VIDEO STYLES --- */
.video-teaser-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 560px;
  /* Kinokontrol ang aspect ratio para sa responsive video */
  aspect-ratio: 16 / 9;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  border-radius: 8px;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-caption {
  margin-top: 20px;
  color: #191970;
  font-size: 1.2rem;
}

/* --- CALENDAR --- */
.calendar-invitation-area {
  padding: 40px 20px 80px 20px;
  display: flex;
  justify-content: center;
}

.card-container {
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1000px;
  width: 100%;
}

.polaroid-wrapper {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.polaroid {
  background: white;
  padding: 15px 15px 50px 15px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  transform: rotate(-2deg);
  width: 100%;
  max-width: 340px;
  text-align: center;
}

.polaroid img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.polaroid-date {
  font-family: 'Playfair Display', serif;
  margin-top: 15px;
  color: #191970;
  font-weight: bold;
  letter-spacing: 2px;
}

.calendar-details {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center;   
}

.invite-label {
  letter-spacing: 4px;
  font-size: 1.2rem;
  color: #8e8e8e;
  margin-bottom: 5px;
}

.month-year {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 15px 0 0 0;
}

.gold-line {
  height: 2px;
  width: 60px;
  background: #d4af37;
  margin: 20px 0;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  width: 100%;
  max-width: 350px;
  font-family: 'Montserrat', sans-serif;
  margin: 0 auto; 
}

.day-label {
  font-size: 0.6rem;
  font-weight: 700;
  color: #d4af37;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.date {
  font-size: 0.9rem;
  color: #444;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.date.highlighted {
  background: #191970;
  color: white;
  border-radius: 50%;
  font-weight: 700;
}

.heart-marker {
  position: absolute;
  top: -12px;
  color: #d4af37;
  font-size: 1.1rem;
}

.marriage-status {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  font-size: 0.8rem;
  color: #7d7d7d;
  margin-top: 30px;
  text-transform: uppercase;
}

/* --- MOBILE --- */
@media (max-width: 850px) {
  .card-container {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
  .polaroid-wrapper { justify-content: center; }
  .verse-text { font-size: 1.2rem; }
  .video-container { width: 100%; }
}
</style>