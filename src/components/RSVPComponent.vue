<template>
  <section class="rsvp-section">
    <Transition name="fade">
      <div v-if="loading" class="global-page-loader">
        <div class="loader-content">
          <div class="main-spinner"></div>
          <p class="loader-text">{{ step === 1 ? 'SINUSURI ANG GUEST LIST...' : 'IPINAPADALA ANG TUGON...' }}</p>
        </div>
      </div>
    </Transition>

    <div class="background-overlay"></div>

    <div class="solid-white-card" :class="{ 'blur-content': loading }">
      <div class="header-group">
        <span class="script-label">Pagkumpirma</span>
        <h2 class="main-title">RSVP</h2>
        <div class="title-underline"></div>
        
        <p v-if="step === 1" class="rsvp-deadline">
          Pakisulat ang inyong buong pangalan upang makumpirma ang inyong pagdalo sa aming espesyal na araw.
        </p>
        <div v-else class="welcome-header">
          <p class="greeting-text adelia-font">Mabuhay, {{ form.name }}!</p>
          <p class="rsvp-deadline">Nahanap namin ang iyong pangalan. Pakikumpleto ang detalye sa ibaba.</p>
        </div>
      </div>

      <div v-if="step === 1" class="form-container">
        <div class="input-group">
          <label class="input-label">Buong Pangalan</label>
          <input 
            type="text" 
            v-model="form.name" 
            @input="form.name = form.name.toUpperCase()" 
            class="uppercase-input"
            placeholder="IPASOK ANG INYONG PANGALAN" 
            @keyup.enter="verifyName"
          />
        </div>
        <button @click="verifyName" class="submit-btn">Suriin ang Listahan</button>
      </div>

      <form v-else @submit.prevent="submitRSVP" class="rsvp-form">
        <div class="input-group">
          <label class="input-label">Dalo Ka Ba?</label>
          <div class="radio-options">
            <label class="radio-container">
              <input type="radio" value="yes" v-model="form.attending" name="attendance" />
              <span class="radio-mark"></span>
              Oo, Malugod akong dadalo
            </label>
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

        <div class="button-group">
          <button type="button" @click="step = 1" class="back-link">Bumalik at palitan ang pangalan</button>
          <br/>
          <br/>
          <button type="submit" class="submit-btn">Ipadala ang Tugon</button>
        </div>
      </form>

      <Transition name="fade">
        <div v-if="errorMessage" class="error-box">{{ errorMessage }}</div>
      </Transition>
    </div>

    <Transition name="fade-modal">
      <div v-if="showSuccessModal" class="modal-overlay">
        <div class="success-card">
          <div class="checkmark-circle">✓</div>
          <h3 class="modal-title">MARAMING SALAMAT!</h3>
          <p class="modal-text">ANG INYONG TUGON AY MATAGUMPAY NAMING NAITALA.</p>
          
          <div class="confirmation-box" v-if="form.attending === 'yes'">
            <div class="box-header">OFFICIAL CONFIRMATION</div>
            <div class="box-content">
              <div class="info-row">
                <span class="info-label">GUEST NAME:</span>
                <span class="info-value">{{ form.name }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">STATUS:</span>
                <span class="info-value status-check">CONFIRMED ATTENDING</span>
              </div>
              <div class="info-row">
                <span class="info-label">REF NO:</span>
                <span class="info-value">{{ receiptRef }}</span>
              </div>
            </div>
            <div class="box-footer">Paki-screenshot ito bilang patunay sa mismong event.</div>
          </div>

          <button class="modal-close-btn" @click="closeModal">ISARA</button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const step = ref(1);
const loading = ref(false);
const showSuccessModal = ref(false);
const errorMessage = ref('');
const receiptRef = ref(''); // State para sa unique reference number

const form = ref({
  name: '',
  attending: 'yes',
  message: ''
});

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyFXRacbuSTRhHonUipXxy190_-IZhhSmq5nfAWmUfRzftaxCYtaIE-92Tj1oaU0ViV/exec';

const verifyName = async () => {
  if (!form.value.name || !form.value.name.trim()) {
    errorMessage.value = 'Pakisulat po ang inyong pangalan.';
    return;
  }
  loading.value = true;
  errorMessage.value = '';
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'verify', name: form.value.name.trim() })
    });
    const result = await response.text();
    if (result === 'SUCCESS') {
      step.value = 2;
    } else {
      errorMessage.value = 'Paumanhin, ang pangalang ito ay wala sa aming listahan.';
    }
  } catch (e) {
    errorMessage.value = 'Error sa koneksyon. Pakisubukang muli.';
  } finally {
    loading.value = false;
  }
};

const submitRSVP = async () => {
  loading.value = true;
  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(form.value)
    });
    // Gumawa ng simpleng Reference Number
    receiptRef.value = 'RSVP-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    showSuccessModal.value = true;
  } catch (e) {
    errorMessage.value = 'Error sa pagpapadala.';
  } finally {
    loading.value = false;
  }
};

const closeModal = () => {
  showSuccessModal.value = false;
  step.value = 1;
  form.value = { name: '', attending: 'yes', message: '' };
};
</script>

<style scoped>
/* (Base Styles same as original) */
.rsvp-section { position: relative; padding: 80px 20px; display: flex; justify-content: center; align-items: center; background: #0a0a1a; min-height: 100vh; }
.background-overlay { position: absolute; inset: 0; background-image: linear-gradient(rgba(10, 10, 26, 0.4), rgba(10, 10, 26, 0.9)), url('https://lh3.googleusercontent.com/d/1RYcAifHGBJw96QkmY7OqJ4U9FuZngwKw'); background-size: cover; background-position: center; }
.solid-white-card { position: relative; z-index: 2; max-width: 600px; width: 100%; background: #ffffff; padding: 60px 45px; border-radius: 8px; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5); }
.header-group { text-align: center; margin-bottom: 40px; }
.script-label { font-family: 'Great Vibes', cursive; font-size: 2.2rem; color: #191970; }
.main-title { font-family: 'Playfair Display', serif; color: #1c2833; font-size: 2.8rem; letter-spacing: 5px; margin-top: -10px; }
.title-underline { height: 1px; width: 60px; background: #d4af37; margin: 15px auto; }
.rsvp-deadline { font-family: 'Montserrat', sans-serif; font-size: 0.75rem; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; line-height: 1.6; }
.greeting-text { font-size: 1.5rem; color: #191970; margin-bottom: 5px; }

/* (Form elements same as original) */
.rsvp-form, .form-container { display: flex; flex-direction: column; gap: 25px; }
.input-group { display: flex; flex-direction: column; gap: 10px; }
.input-label { font-family: 'Montserrat', sans-serif; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #191970; }
.uppercase-input { padding: 15px; border: 1px solid #e2e8f0; border-radius: 4px; font-family: 'Montserrat', sans-serif; background: #f8fafc; text-transform: uppercase; width: 100%; }
.radio-options { display: flex; flex-direction: column; gap: 15px; }
.radio-container { display: flex; align-items: center; gap: 12px; font-family: 'Montserrat', sans-serif; font-size: 0.9rem; cursor: pointer; color: #334155; }
input[type="radio"] { display: none; }
.radio-mark { width: 18px; height: 18px; border: 2px solid #cbd5e1; border-radius: 50%; position: relative; }
input[type="radio"]:checked + .radio-mark { background: #191970; border-color: #191970; box-shadow: inset 0 0 0 3px #fff; }
textarea { min-height: 120px; resize: vertical; }

.submit-btn { background: #191970; color: white; padding: 18px; border: none; border-radius: 4px; font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; transition: 0.3s; }
.submit-btn:hover { background: #000040; transform: translateY(-2px); }
.back-link { background: none; border: none; color: #6b7280; font-family: 'Montserrat', sans-serif; font-size: 0.7rem; text-decoration: underline; cursor: pointer; text-align: center; }

/* --- ERROR BOX & LOADER --- */
.error-box { background: #fff1f2; border: 1px solid #fda4af; color: #e11d48; padding: 12px; margin-top: 20px; border-radius: 4px; font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; text-align: center; }
/* --- LOADER (CENTERED FIX) --- */
.global-page-loader {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 9999;
  display: flex;         /* Ginagawa itong flex container */
  align-items: center;    /* Gitna vertically */
  justify-content: center; /* Gitna horizontally */
}

.loader-content {
  display: flex;
  flex-direction: column; /* Pag-iscladin ang spinner at text */
  align-items: center;    /* Gitna ang mga items sa loob */
  gap: 15px;              /* Space sa pagitan ng spinner at text */
}

.main-spinner {
  width: 45px;
  height: 45px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #191970;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loader-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: #191970;
  letter-spacing: 1px;
  margin: 0;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* --- SUCCESS MODAL --- */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px; }
.success-card { background: white; padding: 40px; border-radius: 8px; text-align: center; max-width: 450px; width: 100%; box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
.checkmark-circle { width: 60px; height: 60px; border: 2px solid #191970; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; color: #191970; margin: 0 auto 20px; }
.modal-title { font-family: 'Playfair Display', serif; color: #191970; font-size: 1.8rem; margin-bottom: 5px; }
.modal-text { font-family: 'Montserrat', sans-serif; color: #64748b; font-size: 0.85rem; margin-bottom: 25px; }
.modal-close-btn { background: #191970; color: white; border: none; padding: 12px 40px; border-radius: 4px; font-weight: 600; cursor: pointer; width: 100%; text-transform: uppercase; letter-spacing: 2px; }

/* --- CONFIRMATION BOX STYLES --- */
.confirmation-box {
  background: #f8fafc;
  border: 1px dashed #191970;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  text-align: left;
}
.box-header {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 0.7rem;
  color: #191970;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 8px;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
}
.info-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-family: 'Montserrat', sans-serif; font-size: 0.8rem; }
.info-label { color: #64748b; font-weight: 500; }
.info-value { color: #1e293b; font-weight: 700; }
.status-check { color: #191970; }
.box-footer {
  margin-top: 15px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  color: #94a3b8;
  font-style: italic;
  text-align: center;
}
</style>