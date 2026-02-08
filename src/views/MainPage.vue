<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeroComponent from '@/components/HeroComponent.vue';
import CountdownComponent from '@/components/CountdownComponent.vue';
import CalendarComponent from '@/components/CalendarComponent.vue';
import CeremonyComponent from '@/components/CeremonyComponent.vue';
import DresscodeComponent from '@/components/DresscodeComponent.vue';
import EntourageComponent from '@/components/EntourageComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import NotesComponent from '@/components/NotesComponent.vue';
import RSVPComponent from '@/components/RSVPComponent.vue';
import GalleryComponent from '@/components/GalleryComponent.vue';

// --- SCROLL LOGIC ---
const showScrollTop = ref(false);
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// --- SOUND LOGIC ---
const isPlaying = ref(false);
const audioRef = ref(null);
// Palitan ang URL na ito ng link ng inyong kanta
const audioUrl = '/public/audio/wedding-song.mp3';

const toggleSound = () => {
  if (isPlaying.value) {
    audioRef.value.pause();
  } else {
    audioRef.value.play().catch(e => console.log("Autoplay blocked: ", e));
  }
  isPlaying.value = !isPlaying.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="main-layout">
    <SidebarComponent />

    <audio ref="audioRef" src="/public/audio/wedding-song.mp3" loop></audio>

    <div class="floating-controls">
      <button 
        class="fab sound-fab" 
        :class="{ 'active-sound': isPlaying }"
        @click="toggleSound"
      >
        <div v-if="!isPlaying" class="icon">🔇</div>
        <div v-else class="sound-bars">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <span class="label">{{ isPlaying ? 'STOP' : 'PLAY' }}</span>
      </button>

      <Transition name="fade">
        <button 
          v-if="showScrollTop"
          class="fab scroll-top-fab" 
          @click="scrollToTop"
        >
          <div class="arrow-icon">↑</div>
          <span class="label">ITAAS</span>
        </button>
      </Transition>
    </div>

    <section id="hero"><HeroComponent /></section>
    <section id="countdown"><CountdownComponent /></section>
    <section id="calendar"><CalendarComponent /></section>
    <section id="ceremony"><CeremonyComponent /></section>
    <section id="dresscode"><DresscodeComponent /></section>
    <section id="entourage"><EntourageComponent /></section>
    <section id="notes"><NotesComponent /></section>
    <section id="rsvp"><RSVPComponent /></section>
    <section id="gallery"><GalleryComponent /></section>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  overflow-x: hidden;
  background: #fdfbf7;
  scroll-behavior: smooth;
}

/* --- Floating Controls Container --- */
.floating-controls {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* --- Base FAB Style --- */
.fab {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(25, 25, 112, 0.1);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.fab:hover {
  transform: translateY(-5px);
  background: #191970;
}

.fab:hover .label, 
.fab:hover .arrow-icon, 
.fab:hover .icon {
  color: #ffffff;
}

/* --- Sound Button Specific --- */
.active-sound {
  background: #191970 !important;
  border-color: #d4af37;
}

.active-sound .label {
  color: #ffffff !important;
}

.sound-bars {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 15px;
  margin-bottom: 2px;
}

.bar {
  width: 3px;
  height: 100%;
  background: #d4af37;
  animation: play-wave 0.6s infinite alternate;
}

.bar:nth-child(2) { animation-delay: 0.2s; }
.bar:nth-child(3) { animation-delay: 0.4s; }

@keyframes play-wave {
  from { height: 4px; }
  to { height: 15px; }
}

/* --- Icons and Labels --- */
.arrow-icon, .icon {
  font-size: 1.2rem;
  font-weight: bold;
  color: #191970;
  line-height: 1;
}

.label {
  font-size: 0.55rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #191970;
  margin-top: 2px;
  text-transform: uppercase;
}

/* --- Transition --- */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 480px) {
  .floating-controls {
    right: 15px;
    bottom: 15px;
  }
}
</style>