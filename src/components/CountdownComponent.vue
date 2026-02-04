<template>
  <div class="wedding-landing">
    <section class="wedding-countdown">
      <div class="hero-bg-container">
        <div 
          class="ken-burns-bg" 
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>
        <div class="romantic-overlay"></div>
      </div>

      <div class="countdown-card">
        <span class="label">Sama-sama nating bilangin ang mga araw</span>
        <h2 class="section-title">Ang Paghihintay ay Matatapos na</h2>
        
        <div class="timer-display">
          <div class="time-block">
            <span class="number">{{ countdown.days }}</span>
            <span class="unit">Araw</span>
          </div>
          
          <div class="time-block">
            <span class="number">{{ countdown.hours }}</span>
            <span class="unit">Oras</span>
          </div>
          
          <div class="time-block">
            <span class="number">{{ countdown.minutes }}</span>
            <span class="unit">Minuto</span>
          </div>
          
          <div class="time-block">
            <span class="number">{{ countdown.seconds }}</span>
            <span class="unit">Segundo</span>
          </div>
        </div>

        <div class="divider"></div>
        <p class="details">Hanggang sa aming pag-iisang dibdib.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  backgroundImage: { 
    type: String, 
    default: 'https://lh3.googleusercontent.com/d/1JhsJLPulsX2LMyGEvIqrcu74of4Btt4Q'
  },
  targetDate: {
    type: String,
    default: '2026-02-24T16:00:00'
  }
});

const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
let timerInterval = null;

const calculateTime = () => {
  const target = new Date(props.targetDate).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff > 0) {
    countdown.value.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.value.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countdown.value.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    countdown.value.seconds = Math.floor((diff % (1000 * 60)) / 1000);
  }
};

onMounted(() => {
  calculateTime();
  timerInterval = setInterval(calculateTime, 1000);
});

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;1,400&family=Montserrat:wght@300;400;600&display=swap');

.wedding-countdown {
  position: relative;
  /* Use min-height and flex to prevent overflow scrolling */
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px; /* Safe padding for mobile */
  background: #0a0a1a;
  overflow: hidden; /* Ensures background/animations don't cause scroll */
  box-sizing: border-box;
}

.hero-bg-container {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.ken-burns-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(6px) brightness(0.4);
}

.romantic-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(25, 25, 112, 0.2) 0%, rgba(10, 10, 26, 0.8) 100%);
}

.countdown-card {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 800px;
  background: #ffffff;
  padding: 60px 30px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #1c2833;
  margin: 15px 0 40px;
  line-height: 1.2;
}

.label {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 600;
}

.timer-display {
  display: flex;
  flex-wrap: wrap; /* Critical for mobile responsiveness */
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.time-block {
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  padding: 20px;
  min-width: 100px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  flex: 1; /* Allows blocks to grow/shrink equally */
  max-width: 140px;
}

.number {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 6vw, 3.5rem);
  color: #191970;
  font-weight: 700;
  line-height: 1;
}

.unit {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #64748b;
  margin-top: 8px;
}

.divider {
  height: 1px;
  width: 60px;
  background: #191970;
  margin: 30px auto;
  opacity: 0.2;
}

.details {
  font-family: 'Montserrat', sans-serif;
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* RESPONSIVE BREAKPOINTS */
@media (max-width: 650px) {
  .timer-display {
    gap: 12px;
  }
  .time-block {
    min-width: calc(50% - 10px); /* Forces a 2x2 grid on mobile */
    padding: 15px 10px;
  }
  .countdown-card {
    padding: 40px 20px;
  }
  .section-title {
    margin-bottom: 25px;
  }
}

@media (max-width: 380px) {
  .number {
    font-size: 1.8rem;
  }
}
</style>