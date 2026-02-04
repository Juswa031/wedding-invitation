<script setup>
import { ref, onMounted } from 'vue';
import HeroComponent from '@/components/HeroComponent.vue';
import CountdownComponent from '@/components/CountdownComponent.vue';
import CalendarComponent from '@/components/CalendarComponent.vue';
import CeremonyComponent from '@/components/CeremonyComponent.vue';
import DresscodeComponent from '@/components/DresscodeComponent.vue';
import NotesComponent from '@/components/NotesComponent.vue';
import RSVPComponent from '@/components/RSVPComponent.vue';

const isPlaying = ref(true); 
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
    if (audioPlayer.value) {
      audioPlayer.value.play()
        .then(() => {
          // Kapag nag-play na, siguraduhing true ang state
          isPlaying.value = true;
          // Tanggalin ang listeners para hindi na paulit-ulit tumakbo
          window.removeEventListener('click', startAudio);
          window.removeEventListener('scroll', startAudio);
          window.removeEventListener('touchstart', startAudio);
        })
        .catch(() => {
          // Kung hinarang ng browser, mananatiling "not playing" ang audio
          // pero ang icon ay naka-play state na para sa user
          console.log("Waiting for user interaction to unmute...");
        });
    }
  };

  // Makikinig sa kahit anong galaw ng user para i-trigger ang kanta
  window.addEventListener('click', startAudio);
  window.addEventListener('scroll', startAudio, { passive: true });
  window.addEventListener('touchstart', startAudio);
});
</script>

<template>
  <div class="main-layout">
    <button 
      class="music-fab" 
      @click="toggleMusic" 
    >
      <div class="icon">
        {{ isPlaying ? '🎶' : '🔇' }}
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
}

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
}

.icon {
  font-size: 1.4rem;
  color: #191970;
}

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
  animation: musicWave 0.8s infinite alternate;
}

@keyframes musicWave {
  from { height: 20%; transform: scaleY(0.5); }
  to { height: 100%; transform: scaleY(1); }
}
</style>