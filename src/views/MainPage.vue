<script setup>
import { ref, onMounted } from 'vue';
import HeroComponent from '@/components/HeroComponent.vue';
import CountdownComponent from '@/components/CountdownComponent.vue';
import CalendarComponent from '@/components/CalendarComponent.vue';
import CeremonyComponent from '@/components/CeremonyComponent.vue';
import DresscodeComponent from '@/components/DresscodeComponent.vue';
import NotesComponent from '@/components/NotesComponent.vue';
import RSVPComponent from '@/components/RSVPComponent.vue';

// --- MUSIC LOGIC ---
const isPlaying = ref(false);
const audioPlayer = ref(null);

const toggleMusic = () => {
  if (audioPlayer.value.paused) {
    audioPlayer.value.play();
    isPlaying.value = true;
  } else {
    audioPlayer.value.pause();
    isPlaying.value = false;
  }
};

onMounted(() => {
  const startAudio = () => {
    if (audioPlayer.value && !isPlaying.value) {
      audioPlayer.value.play()
        .then(() => {
          isPlaying.value = true;
          window.removeEventListener('click', startAudio);
          window.removeEventListener('scroll', startAudio);
        })
        .catch(() => console.log("Waiting for interaction..."));
    }
  };

  window.addEventListener('click', startAudio);
  window.addEventListener('scroll', startAudio, { passive: true });
});
</script>

<template>
  <div class="main-layout">
    <button 
      class="music-fab" 
      @click="toggleMusic" 
      :aria-label="isPlaying ? 'Mute Music' : 'Play Music'"
    >
      <div class="icon">
        {{ isPlaying ? '🎶' : '𝇇' }}
      </div>
      
      <div v-if="isPlaying" class="waves">
        <span></span><span></span><span></span>
      </div>
    </button>

    <audio ref="audioPlayer" loop>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
    </audio>

    <HeroComponent />
    <CountdownComponent />
    <CalendarComponent />
    <CeremonyComponent />
    <DresscodeComponent />
    <NotesComponent />
    <RSVPComponent />
  </div>
</template>

<style>
/* Reset and Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  width: 100%;
  overflow-x: hidden;
  background: #0a0a1a;
  -webkit-font-smoothing: antialiased;
}

.main-layout {
  width: 100%;
  position: relative;
}

/* MUSIC BUTTON (FAB) */
.music-fab {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 9999;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(25, 25, 112, 0.1);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.music-fab:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 12px 30px rgba(25, 25, 112, 0.3);
}

.music-fab .icon {
  font-size: 1.4rem;
  line-height: 1;
  color: #191970; /* Midnight Blue */
}

/* Equalizer Waves Animation */
.waves {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 12px;
  margin-top: 4px;
}

.waves span {
  width: 3px;
  background: #191970;
  border-radius: 2px;
  animation: musicWave 0.8s infinite alternate;
}

.waves span:nth-child(1) { height: 60%; animation-delay: 0.1s; }
.waves span:nth-child(2) { height: 100%; animation-delay: 0.3s; }
.waves span:nth-child(3) { height: 80%; animation-delay: 0.5s; }

@keyframes musicWave {
  from { height: 20%; transform: scaleY(0.5); }
  to { height: 100%; transform: scaleY(1); }
}

/* Mobile Adjustments */
@media (max-width: 600px) {
  .music-fab {
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
  }
  .music-fab .icon { font-size: 1.2rem; }
}
</style>