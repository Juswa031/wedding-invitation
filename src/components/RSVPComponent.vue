<template>
  <section class="rsvp-section">
    <Transition name="fade">
      <div v-if="loading" class="global-page-loader">
        <div class="loader-content">
          <div class="main-spinner"></div>
          <p class="loader-text">IPINAPADALA ANG INYONG TUGON...</p>
        </div>
      </div>
    </Transition>

    <div class="background-overlay"></div>

    <div class="solid-white-card" :class="{ 'blur-content': loading }">
      <div class="header-group">
        <span class="script-label">Pagkumpirma</span>
        <h2 class="main-title">RSVP</h2>
        <div class="title-underline"></div>
        <p class="rsvp-deadline">Hinihiling po namin ang inyong tugon bago ang ika-labing-apat ng Enero, 2026</p>
      </div>

      <form @submit.prevent="submitRSVP" class="rsvp-form">
        <div class="input-group">
          <label class="input-label">Buong Pangalan</label>
          <input 
            type="text" 
            v-model="form.name" 
            @input="form.name = form.name.toUpperCase()" 
            class="uppercase-input"
            placeholder="IPASOK ANG INYONG PANGALAN" 
            required 
          />
        </div>

        <div class="input-group">
          <label class="input-label">Dalo Ka Ba?</label>
          <div class="radio-options">
            <label class="radio-container">
              <input type="radio" value="yes" v-model="form.attending" name="attendance" />
              <span class="radio-mark"></span>
              Oo, Malugod akong dadalo
            </label>
            <br/>
            <label class="radio-container">
              <input type="radio" value="no" v-model="form.attending" name="attendance" />
              <span class="radio-mark"></span>
              Paumanhin, hindi ako makakarating
            </label>
          </div>
        </div>

        <div class="input-group">
          <label class="input-label">Mensahe para kina Jeffrey at Jeana</label>
          <textarea 
            v-model="form.message" 
            @input="form.message = form.message.toUpperCase()"
            class="uppercase-input"
            placeholder="ISULAT DITO ANG INYONG PAGBATI..."
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="loading">
          Ipadala ang Tugon
        </button>
      </form>
    </div>

    <Transition name="fade-modal">
      <div v-if="showSuccessModal" class="modal-overlay" @click.self="showSuccessModal = false">
        <div class="success-card">
          <div class="checkmark-wrapper">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h3 class="modal-title">MARAMING SALAMAT!</h3>
          <p class="modal-text">ANG INYONG TUGON AY MATAGUMPAY NAMING NAITALA.</p>
          <button class="modal-close-btn" @click="showSuccessModal = false">ISARA</button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
const showSuccessModal = ref(false);

const form = ref({
  name: '',
  attending: 'yes',
  message: ''
});

const submitRSVP = async () => {
  loading.value = true;
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxfFE1BO04jI0deJnFcMlioUdHMdzZklrYATePFAnRKz__V18PVIVVvX5zntuCj3ltV/exec';

  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    });

    loading.value = false;
    showSuccessModal.value = true;
    form.value = { name: '', attending: 'yes', message: '' };
  } catch (error) {
    loading.value = false;
    alert('May error sa pagpapadala. Pakisubukang muli.');
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@300;400;600&display=swap');

/* --- LOADER STYLES --- */
.global-page-loader {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 26, 0.9);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-spinner {
  width: 60px; height: 60px;
  border: 4px solid rgba(25, 25, 112, 0.1);
  border-top: 4px solid #191970;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

.loader-text {
  color: #191970; 
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 0.8rem;
  background: white;
  padding: 8px 20px;
  border-radius: 30px;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* --- RSVP SECTION STYLES --- */
.rsvp-section {
  position: relative;
  padding: 80px 20px;
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
  background-image: linear-gradient(rgba(10, 10, 26, 0.85), rgba(10, 10, 26, 0.85)), 
                    url('https://images.unsplash.com/photo-1519741497674-611481863552');
  background-size: cover;
  background-position: center;
}

/* SOLID WHITE CARD DESIGN */
.solid-white-card {
  position: relative;
  z-index: 2;
  max-width: 650px;
  width: 100%;
  background: #fcfcff; /* Solid Arctic White */
  padding: 60px 50px;
  border-radius: 12px; /* Sleeker, less rounded for a formal look */
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.blur-content { filter: blur(5px); pointer-events: none; transition: filter 0.3s ease; }

.header-group { text-align: center; margin-bottom: 45px; }
.script-label { font-family: 'Great Vibes', cursive; font-size: 2.5rem; color: #191970; display: block; }
.main-title { font-family: 'Playfair Display', serif; color: #1c2833; font-size: 3rem; letter-spacing: 8px; margin: 0; }
.title-underline { height: 1px; width: 80px; background: #d1d5db; margin: 20px auto; }
.rsvp-deadline { font-family: 'Montserrat', sans-serif; font-size: 0.8rem; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; }

.rsvp-form { display: flex; flex-direction: column; gap: 30px; }
.input-group { display: flex; flex-direction: column; gap: 12px; }

.input-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #191970;
  font-weight: 600;
}

/* Inputs on White background */
input[type="text"], textarea {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 16px;
  border-radius: 8px;
  color: #1e293b;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
}

input:focus, textarea:focus { 
  outline: none; 
  border-color: #191970; 
  background: #fff;
  box-shadow: 0 0 0 4px rgba(25, 25, 112, 0.05);
}

.uppercase-input { text-transform: uppercase; }

.radio-container {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #334155;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
}

input[type="radio"] { display: none; }
.radio-mark {
  width: 20px; height: 20px;
  border: 2px solid #cbd5e1;
  border-radius: 50%;
  transition: all 0.2s;
}

input[type="radio"]:checked + .radio-mark {
  border-color: #191970;
  background: #191970;
  box-shadow: inset 0 0 0 4px #fff;
}

.submit-btn {
  margin-top: 15px;
  padding: 20px;
  background: #191970;
  border: none;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.submit-btn:hover:not(:disabled) { 
  background: #000040; 
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(25, 25, 112, 0.2);
}

/* --- MODAL STYLES --- */
.modal-overlay {
  position: fixed; inset: 0; z-index: 10000;
  background: rgba(10, 10, 26, 0.9);
  backdrop-filter: blur(8px);
  display: flex; justify-content: center; align-items: center; padding: 20px;
}

.success-card {
  background: #ffffff;
  padding: 50px; border-radius: 8px; text-align: center;
  max-width: 450px; width: 100%;
  box-shadow: 0 40px 100px rgba(0,0,0,0.3);
}

.modal-title { font-family: 'Playfair Display', serif; color: #191970; font-size: 2rem; margin: 25px 0 10px; }
.modal-text { font-family: 'Montserrat', sans-serif; color: #64748b; font-size: 0.95rem; margin-bottom: 35px; line-height: 1.6; }
.modal-close-btn {
  background: #191970; color: #ffffff; border: none; padding: 14px 50px;
  border-radius: 4px; font-weight: 600; cursor: pointer; text-transform: uppercase; letter-spacing: 2px;
}

.checkmark { width: 80px; height: 80px; stroke: #191970; stroke-width: 2; fill: none; }
.checkmark__circle { stroke-dasharray: 166; stroke-dashoffset: 166; animation: stroke 0.6s forwards; }
.checkmark__check { stroke-dasharray: 48; stroke-dashoffset: 48; animation: stroke 0.3s 0.6s forwards; }

@keyframes stroke { to { stroke-dashoffset: 0; } }

/* TRANSITIONS */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.fade-modal-enter-active, .fade-modal-leave-active { transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-modal-enter-from { opacity: 0; transform: scale(0.9); }
.fade-modal-leave-to { opacity: 0; transform: scale(0.9); }

@media (max-width: 600px) {
  .solid-white-card { padding: 40px 25px; margin: 10px; }
  .main-title { font-size: 2.2rem; }
}
</style>