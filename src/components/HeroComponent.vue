<template>
  <section class="wedding-hero">
    <div class="banner-container">
      <TransitionGroup name="fade-carousel">
        <div 
          v-for="(img, index) in backgroundImages" 
          :key="img"
          v-show="currentSlide === index"
          class="banner-img" 
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </TransitionGroup>

      <div class="carousel-indicators">
        <button 
          v-for="(img, index) in backgroundImages" 
          :key="'dot-' + index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
          aria-label="Go to slide"
        ></button>
      </div>

      <div class="banner-overlay">
        <div class="script-overlay">
          <div class="names-wrapper adelia-font">
            <span class="first-name ghost-text">Jeffrey</span>
            <span class="ampersand-hero">&</span>
            <span class="last-name ghost-text-delayed">Jeana</span>
          </div>
          <p class="tagline">pag-ibig na itinakda</p>
        </div>
      </div>
    </div>

    <div class="invitation-section">
      <div class="card-container">
        <div class="polaroid-wrapper">
          <div class="polaroid">
            <div class="photo-inner">
              <img :src="'https://lh3.googleusercontent.com/u/0/d/1nLhUfIpXDygtnM4a0EaygkB1OIvyrlXs'" alt="Jeffrey at Jeana" />
            </div>
          </div>
        </div>

        <div class="invite-details">
          <header class="invite-header">
            <p class="invite-label">KAYO AY INAANYAYAHAN</p>
            <br/>
            <br/>
            <br/>
            <div class="script-names adelia-font">
               Jeffrey
              <span class="ampersand">&</span>
               Jeana
            </div>
          </header>
          <br/>
            <br/>
            <br/>
          
          <div class="invite-body">
            <p class="marriage-status">SA AMING PAG-IISANG DIBDIB</p>
            <div class="divider"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  backgroundImages: { 
    type: Array, 
    default: () => [
      'https://lh3.googleusercontent.com/d/1A54ELq5rqytOG9hgKkvFvTZh8kDLolM_',
      'https://lh3.googleusercontent.com/u/0/d/1nLhUfIpXDygtnM4a0EaygkB1OIvyrlXs',
      'https://lh3.googleusercontent.com/d/1RYcAifHGBJw96QkmY7OqJ4U9FuZngwKw'
    ]
  },
  coupleImage: { 
    type: String, 
    default: 'https://lh3.googleusercontent.com/u/0/d/1nLhUfIpXDygtnM4a0EaygkB1OIvyrlXs' 
  }
});

const currentSlide = ref(0);
let timer = null;

const startCarousel = () => {
  stopCarousel(); // Clear existing to prevent duplicates
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % props.backgroundImages.length;
  }, 5000);
};

const stopCarousel = () => {
  if (timer) clearInterval(timer);
};

const goToSlide = (index) => {
  currentSlide.value = index;
  startCarousel(); // Reset timer when user manually clicks
};

onMounted(() => {
  startCarousel();
});

onUnmounted(() => {
  stopCarousel();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Playfair+Display:ital@0;1&display=swap');

@font-face {
  font-family: 'Adelia';
  src: url('/fonts/adelia.ttf') format('truetype');
}

.adelia-font { font-family: 'Adelia', cursive !important; }

/* --- CAROUSEL STYLES --- */
.banner-container { 
  width: 100%; 
  height: 70vh; 
  position: relative; 
  overflow: hidden; 
  background: #000;
}

.banner-img { 
  position: absolute;
  inset: 0;
  width: 100%; 
  height: 100%; 
  background-size: cover; 
  background-position: center; 
  animation: slowZoom 20s infinite alternate; 
}

/* Indicators */
.carousel-indicators {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot.active {
  background: white;
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.banner-overlay { 
  position: absolute; 
  inset: 0; 
  background: rgba(0,0,0,0.3);
  display: flex; 
  align-items: center; 
  justify-content: center; 
  z-index: 2;
}

/* Transitions */
.fade-carousel-enter-active,
.fade-carousel-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-carousel-enter-from,
.fade-carousel-leave-to {
  opacity: 0;
}

/* --- THE REST OF YOUR CSS --- */
.names-wrapper { display: flex; flex-direction: column; align-items: center; color: white; }
.first-name, .last-name { font-size: clamp(3.5rem, 12vw, 10rem); line-height: 1; text-shadow: 2px 4px 10px rgba(0,0,0,0.2); }
.ampersand-hero { font-size: 1.5rem; margin: 10px 0; }
.tagline { color: white; font-family: 'Montserrat'; letter-spacing: 4px; font-size: clamp(0.8rem, 3vw, 2rem); margin-top: 2rem; display: flex; justify-content: center; }

.invitation-section { padding: clamp(40px, 8vw, 100px) 24px; background-color: #fdfbf7; display: flex; justify-content: center; }
.card-container { display: grid; grid-template-columns: 1fr; gap: 40px; max-width: 1000px; width: 100%; align-items: center; }
.polaroid { background: white; padding: 15px 15px 50px 15px; box-shadow: 0 20px 40px rgba(0,0,0,0.06); transform: rotate(-2deg); width: 100%; max-width: 380px; }
.photo-inner { width: 100%; aspect-ratio: 1/1; overflow: hidden; background: #eee; }
.photo-inner img { width: 100%; height: 100%; object-fit: cover; display: block; }

.script-names { font-size: clamp(2.8rem, 8vw, 4.5rem); color: #2c3e50; line-height: 1.1; }
.ampersand { font-family: 'Playfair Display', serif; font-style: italic; font-size: 0.6em; color: #d4af37; margin: 0 10px; }
.divider { height: 1px; width: 60px; background: #d4af37; margin: 30px auto; }

@media (min-width: 850px) {
  .card-container { grid-template-columns: 1fr 1fr; gap: 80px; }
  .names-wrapper { flex-direction: row; gap: 30px; }
}

@keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
.ghost-text { animation: ghostReveal 1.5s ease-out forwards 0.5s; opacity: 0; }
.ghost-text-delayed { animation: ghostReveal 1.5s ease-out forwards 1.2s; opacity: 0; }
@keyframes ghostReveal {
  0% { opacity: 0; filter: blur(8px); transform: translateY(20px); }
  100% { opacity: 1; filter: blur(0); transform: translateY(0); }
}

.invite-details {
  text-align: center;
}
</style>