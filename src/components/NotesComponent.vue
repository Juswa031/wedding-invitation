<template>
  <section class="notes-section">
    <div class="background-overlay"></div>

    <div class="solid-white-card">
      <div class="header-group">
        <span class="script-label">Mahalagang Paalala</span>
        <h2 class="main-title">Mga Paunawa</h2>
        <div class="title-underline"></div>
      </div>

      <div class="notes-grid">
        <div class="note-item featured-note">
          <h3 class="note-heading">Eksklusibong Imbitasyon</h3>
          <p class="note-text">
            Ang aming selebrasyon ay may limitadong bilang lamang ng upuan. Hinihiling po namin na <strong>huwag magsama ng hindi kasama sa imbitasyon</strong> (Strictly No Extra Guests). Ang bawat upuan ay nakalaan lamang para sa mga pangalang nasa listahan.
          </p>
        </div>

        <div class="note-item">
          <h3 class="note-heading">Para sa mga Matatanda</h3>
          <p class="note-text">
            Bagama't mahal namin ang inyong mga munting anak, pinili naming gawing eksklusibo para sa mga <strong>matatanda lamang</strong> ang aming pagdiriwang upang masigurado ang kaayusan at kaligtasan ng lahat.
          </p>
        </div>

        <div class="note-item">
          <h3 class="note-heading">Tahimik na Seremonya</h3>
          <p class="note-text">
            Nais naming masaksihan ang inyong mga ngiti, hindi ang inyong mga telepono. Hinihiling po namin na itabi muna ang inyong mga gadget at camera habang nagaganap ang aming pag-iisang dibdib.
          </p>
        </div>

        <div class="note-item gift-guide">
          <h3 class="note-heading">Gabay sa Regalo</h3>
          <p class="note-text">
            Ang inyong pagdalo sa aming espesyal na araw ay sapat na regalo na para sa amin. Ngunit kung nais ninyong magbigay, ang <strong>tulong pinansyal</strong> ay malaking tulong para sa aming pagsisimula bilang mag-asawa at para sa aming bubuuing tahanan.
          </p>
        </div>
      </div>

      <div class="final-note">
        <p>Maraming salamat sa inyong pag-unawa at pagmamahal.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@300;400;600&display=swap');

.notes-section {
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
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(10, 10, 26, 0.9)), 
                    url('https://lh3.googleusercontent.com/d/1tBmoGDORhfJQPf2Rx4s3_QjJ5g1ayseC');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.solid-white-card {
  position: relative;
  z-index: 2;
  max-width: 850px;
  width: 100%;
  background: #ffffff;
  padding: 60px 40px;
  border-radius: 8px;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
}

.header-group { text-align: center; margin-bottom: 40px; }

.script-label { 
  font-family: 'Great Vibes', cursive; 
  font-size: 2.2rem; 
  color: #191970; 
  display: block; 
}

.main-title { 
  font-family: 'Playfair Display', serif; 
  color: #1c2833; 
  font-size: 2.5rem; 
  letter-spacing: 4px; 
  text-transform: uppercase;
}

.title-underline {
  width: 60px; height: 1px; background: #191970; margin: 15px auto;
}

.notes-grid {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.note-item {
  padding: 25px 20px;
  text-align: center;
  border-bottom: 1px solid #f1f5f9;
}

.note-item:last-child { border-bottom: none; }

.note-heading {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #191970;
  margin-bottom: 10px;
}

.note-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

.note-text strong {
  color: #191970;
  font-weight: 600;
}

.featured-note {
  background: rgba(25, 25, 112, 0.04);
  border-radius: 8px;
  border-bottom: none;
  border-left: 4px solid #191970;
}

.gift-guide {
  /* Subtle blue background to separate it from general house rules */
  background: rgba(25, 25, 112, 0.02);
  border-radius: 8px;
  border-bottom: none;
  margin-top: 5px;
}

.final-note {
  text-align: center;
  margin-top: 40px;
  font-family: 'Great Vibes', cursive;
  font-size: 1.8rem;
  color: #191970;
}

@media (max-width: 768px) {
  .solid-white-card { padding: 40px 15px; }
  .main-title { font-size: 1.8rem; }
  .note-heading { font-size: 1.3rem; }
}
</style>