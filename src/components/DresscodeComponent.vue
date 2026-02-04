<template>
  <section class="dress-code-section">
    <div class="background-overlay"></div>

    <div class="solid-white-card">
      <div class="header-group">
        <span class="script-label">Gabay sa Kasuotan</span>
        <h2 class="main-title">Dress Code</h2>
        <div class="title-underline"></div>
      </div>

      <div class="attire-flex">
        <div class="attire-panel">
          <div class="panel-content">
            <div class="text-top">
              <h3 class="role-title">Mga Panauhin</h3>
              <span class="style-tag">Semi-Pormal na Kasuotan</span>
              <p class="description">
                Inaanyayahan ang lahat na magsuot ng kahit anong shade ng 
                <strong>Midnight Blue</strong> o <strong>Navy Blue</strong>.
              </p>
            </div>
            
            <div class="shade-alignment-wrapper">
              <div class="shade-container">
                <span class="shade-label">Guest Color Palette</span>
                <div class="gradient-bar blue-range"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="attire-panel featured-panel">
          <div class="panel-content">
            <div class="text-top">
              <h3 class="role-title">Ninong at Ninang</h3>
              <span class="style-tag primary-blue">Pormal na Kasuotan</span>
              <p class="description">
                Hinihiling po namin ang inyong pakikiisa sa pagsusuot ng kahit anong shade ng 
                <strong>Midnight Blue</strong> o ng mga kulay sa ibaba:
              </p>
            </div>
            
            <div class="shade-alignment-wrapper">
              <div class="shade-container">
                <span class="shade-label">Principal Sponsor Palette</span>
                <div class="gradient-bar custom-to-midnight"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="thank-you-note">
        Salamat sa inyong pag-unawa at pakikiisa sa aming espesyal na araw.
      </p>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@300;400;600&display=swap');

.dress-code-section {
  position: relative;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a0a1a;
  overflow: hidden;
  min-height: 100vh;
}

.background-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(10, 10, 26, 0.9), rgba(10, 10, 26, 0.9)), 
                    url('https://lh3.googleusercontent.com/d/13_juiul0qGmLUKDDFFjGCQdGR7Lf8bvl');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

/* SOLID WHITE CARD STYLE */
.solid-white-card {
  position: relative;
  z-index: 2;
  max-width: 950px;
  width: 100%;
  background: #ffffff; /* Solid White */
  padding: 60px 40px;
  border-radius: 12px;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
}

.header-group {
  text-align: center;
  margin-bottom: 50px;
}

.script-label {
  font-family: 'Great Vibes', cursive;
  font-size: 2.2rem;
  color: #191970; /* Midnight Blue */
  display: block;
}

.main-title {
  font-family: 'Playfair Display', serif;
  color: #1c2833;
  font-size: 2.8rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-top: -5px;
}

.title-underline {
  width: 60px;
  height: 1px;
  background: #191970;
  margin: 15px auto;
}

.attire-flex {
  display: flex;
  gap: 25px;
  margin-bottom: 40px;
  align-items: stretch;
}

.attire-panel {
  flex: 1;
  background: #f8fafc; /* Very light grey background for the inner boxes */
  border: 1px solid #e2e8f0;
  padding: 40px 30px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.featured-panel {
  border-top: 4px solid #191970; /* Diin para sa Sponsors */
}

.panel-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
}

.text-top {
  flex-grow: 1;
}

.role-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.7rem;
  color: #191970;
  margin-bottom: 8px;
}

.style-tag {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #64748b; /* Slate blue-grey */
  display: block;
  margin-bottom: 25px;
  font-weight: 600;
}

.style-tag.primary-blue {
  color: #191970;
}

.description {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.8;
  margin-bottom: 20px;
}

.description strong {
  color: #191970;
}

/* PALETTE COLORS */
.shade-alignment-wrapper {
  margin-top: auto;
  width: 100%;
  padding-top: 20px;
}

.shade-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.shade-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #94a3b8;
}

.gradient-bar {
  width: 100%;
  height: 24px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.blue-range {
  /* Guest palette: focused on dark/navy blues */
  background: linear-gradient(to right, #4682b4, #000080, #191970, #000033);
}

.custom-to-midnight {
  /* Sponsors palette: slightly more expansive but still in the blue family */
  background: linear-gradient(to right, #b0c4de, #4682b4, #191970, #05051a);
}

.thank-you-note {
  text-align: center;
  font-family: 'Great Vibes', cursive;
  font-size: 1.8rem;
  color: #191970;
  margin-top: 30px;
  opacity: 0.8;
}

@media (max-width: 850px) {
  .attire-flex { flex-direction: column; }
  .main-title { font-size: 2rem; }
  .solid-white-card { padding: 40px 20px; }
  .attire-panel { padding: 30px 20px; }
}
</style>