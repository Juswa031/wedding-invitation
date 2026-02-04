<template>
  <section class="calendar-section">
    <div class="background-overlay"></div>

    <div class="calendar-card">
      <div class="image-side">
        <img :src="calendarImage" alt="Wedding Couple" />
        <div class="gradient-edge"></div>
      </div>

      <div class="calendar-side">
        <div class="calendar-content">
          <h3 class="month-year">Pebrero 2026</h3>
          
          <div class="days-grid">
            <span class="day-label" v-for="label in ['L','M','M','H','B','S','L']" :key="label">{{ label }}</span>
            <span class="date empty"></span><span class="date empty"></span><span class="date empty"></span>
            <span class="date empty"></span><span class="date empty"></span><span class="date empty"></span>
            <span class="date" v-for="n in 28" :key="n" :class="{ 'highlighted': n === 24 }">
              {{ n }}
            </span>
          </div>

          <p class="tagline">I-save ang petsa sa inyong mga puso.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  calendarImage: { 
    type: String, 
    default: 'https://lh3.googleusercontent.com/d/1EelY78yRGSWeuI3FxOxuz5VtO7YRGc7q'
  }
});
</script>

<style scoped>
/* Reset for this specific section only to ensure no scroll */
.calendar-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Fixed height to match viewport */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a0a1a;
  padding: 0;
  margin: 0;
  overflow: hidden; /* This removes the scrollbar for this section */
  box-sizing: border-box;
}

.background-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(10, 10, 26, 0.9), rgba(10, 10, 26, 0.9)), 
                    url('https://lh3.googleusercontent.com/d/1tbYyXXlQgwF3tFNbDzoRout4MpdRrSkw');
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.calendar-card {
  position: relative;
  z-index: 2;
  display: flex;
  width: 90%;
  max-width: 900px;
  height: auto;
  max-height: 90vh; /* Ensures card doesn't exceed screen height */
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
}

.image-side {
  flex: 1.2;
  position: relative;
  display: block;
}

.image-side img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gradient-edge {
  position: absolute;
  top: 0; right: 0; bottom: 0;
  width: 80px;
  background: linear-gradient(to right, transparent, #ffffff);
}

.calendar-side {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #191970;
}

.calendar-content { width: 100%; }

.month-year {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.day-label {
  font-size: 0.65rem;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 8px;
}

.date {
  font-size: 0.85rem;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
}

.date.highlighted {
  background: #191970;
  color: #ffffff;
  border-radius: 50%;
  font-weight: bold;
}

.tagline {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-top: 25px;
  text-align: center;
  color: #191970;
}

/* RESPONSIVE FIXES */
@media (max-width: 768px) {
  .calendar-card {
    flex-direction: column;
    max-width: 350px;
    max-height: 85vh;
  }
  .image-side {
    height: 200px;
    flex: none;
  }
  .gradient-edge {
    width: 100%;
    height: 40px;
    top: auto;
    background: linear-gradient(to bottom, transparent, #ffffff);
  }
  .calendar-side {
    padding: 1.5rem;
  }
}

/* Super Small Screens */
@media (max-height: 600px) {
  .calendar-card { transform: scale(0.9); }
  .month-year { margin-bottom: 10px; }
}
</style>