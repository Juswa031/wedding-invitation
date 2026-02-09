<template>
  <div class="invitation-landing">
    <div class="info-card reveal-on-scroll">
      <p class="top-label">IKAW AY MALUGOD NA INAANYAYAHAN SA KASAL NINA</p>
      
      <h1 class="couple-names brittany-font">Jeffrey & Jeana</h1>
      
      <div class="date-display">
        <span>02</span>
        <span class="gold-dot">•</span>
        <span>24</span>
        <span class="gold-dot">•</span>
        <span>2026</span>
      </div>

      <p class="location-preview">Antipolo City</p>

      <router-link to="/details" class="enter-button">
        BUKSAN ANG IMBITASYON
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.invitation-landing {
  height: 100vh;
  width: 100%;
  /* Deep Navy background para sa mga blankong space sa mobile */
  background-color: #0a0a2d;
  background-image: url('https://lh3.googleusercontent.com/u/0/d/1Hij1aN5aoHv9t84CHGS_YPcHpUw4TVDx');
  
  /* DEFAULT PARA SA DESKTOP */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-card {
  text-align: center;
  color: white;
  padding: 50px 40px;
  background: rgba(10, 10, 45, 0.85); 
  border: 1.5px solid #d4af37;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 4px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: 2; /* Siguradong nasa ibabaw ng image */
}

/* ... (ang ibang styles mo para sa text/fonts ay mananatili) ... */
.top-label { letter-spacing: 3px; font-size: 0.7rem; margin-bottom: 25px; font-weight: 300; color: #f8f9fa; }
.couple-names { font-size: clamp(2.8rem, 10vw, 5.5rem); margin-bottom: 15px; line-height: 1.1; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); }
.date-display { font-size: 1.8rem; letter-spacing: 6px; margin-bottom: 15px; font-weight: 300; display: flex; align-items: center; justify-content: center; }
.gold-dot { color: #d4af37; margin: 0 15px; font-size: 1.2rem; }
.location-preview { font-size: 0.9rem; letter-spacing: 4px; color: #d4af37; margin-bottom: 40px; text-transform: uppercase; }

.enter-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 40px;
  background: #0a0a2d; 
  color: #d4af37; 
  border: 1px solid #d4af37;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
  border-radius: 2px;
}

.enter-button:hover {
  background: #d4af37;
  color: #0a0a2d;
  transform: translateY(-5px);
}

/* PARA SA SMALL SCREEN / MOBILE */
@media (max-width: 768px) {
  .invitation-landing {
    /* Pinapakita ang BUONG image nang walang crop */
    background-size: contain;
    /* Inilalagay ang image sa itaas o gitna para hindi matakpan ng card */
    background-position: top center;
  }

  .info-card {
    padding: 35px 25px;
    /* Inililipat ang card nang bahagya sa ibaba para makita ang mukha sa litrato */
    margin-top: 200px; 
  }

  .couple-names {
    font-size: 2.8rem;
  }
}
</style>