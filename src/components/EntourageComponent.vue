<template>
  <section class="entourage-section">
    <div class="flower-decoration corner-top-left">
      <svg viewBox="0 0 100 100"><path d="M10,90 Q30,40 80,20 M10,90 Q60,70 90,10" fill="none" stroke="#191970" stroke-width="0.5" opacity="0.3"/></svg>
    </div>
    <div class="flower-decoration corner-bottom-right">
      <svg viewBox="0 0 100 100" style="transform: rotate(180deg)"><path d="M10,90 Q30,40 80,20 M10,90 Q60,70 90,10" fill="none" stroke="#191970" stroke-width="0.5" opacity="0.3"/></svg>
    </div>

    <div class="entourage-header">
      <div class="flower-line-art">
        <svg height="40" width="200" viewBox="0 0 200 40">
          <path d="M10,20 Q50,0 100,20 T190,20" fill="none" stroke="#d4af37" stroke-width="1" />
          <circle cx="100" cy="20" r="3" fill="#191970" />
        </svg>
      </div>
      <h2 class="section-title">Salosa at Adeva</h2>
      <h2 class="section-title">Mga Abay</h2>
      <div class="title-divider"></div>
    </div>

    <div class="entourage-container">
      <div class="parents-section">
        <div v-for="(group, index) in parentGroups" :key="index" class="parent-group">
          <h3 class="subsection-title">{{ group.title }}</h3>
          <p v-for="name in group.names" :key="name" class="parent-name">{{ name }}</p>
        </div>
      </div>

      <div class="mid-section-divider">
        <span class="flower-icon">✿</span>
      </div>

      <div class="sponsors-section">
        <h3 class="sponsors-title">Pangunahing Ninong at Ninang</h3>
        <div class="sponsors-columns">
          <div class="sponsor-column">
            <h4 class="sponsor-role">Ninong</h4>
            <div class="name-list">
              <p v-for="sponsor in ninongs" :key="sponsor.id" class="sponsor-name">G. {{ sponsor.name }}</p>
            </div>
          </div>
          <div class="sponsor-column">
            <h4 class="sponsor-role">Ninang</h4>
            <div class="name-list">
              <p v-for="sponsor in ninangs" :key="sponsor.id" class="sponsor-name">Gng. {{ sponsor.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="secondary-section">
        <div class="badge-container">
          <h3 class="sponsors-title">Pangalawang Tagapagtaguyod</h3>
        </div>
        <div class="secondary-grid">
          <div v-for="(item, index) in secondarySponsors" :key="index" class="secondary-group">
            <h4 class="sponsor-role">{{ item.role }}</h4>
            <p v-for="name in item.names" :key="name" class="sponsor-name">{{ name }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="polaroid-wrapper">
      <div class="polaroid-gallery">
        <div v-for="(photo, index) in polaroids" :key="index" class="polaroid">
          <div class="tape"></div>
          <img :src="photo.src" :alt="photo.caption" />
          <div class="caption">{{ photo.caption }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const parentGroups = [
  { title: 'Mga Magulang ng Lalaki', names: ['Alex Salosa', 'Alice Salosa'] },
  { title: 'Mga Magulang ng Babae', names: ['Noel Adeva', 'Myrna Adeva'] }
]

const ninangs = reactive([
  { id: 0, name: 'Charito Bagon' },{ id: 1, name: 'Jean Rose Viesca' }, { id: 2, name: 'Jocelyn Polido' },
  { id: 3, name: 'Cristina Toralba' },{ id: 4, name: 'Liezl Macarandang' }, { id: 5, name: 'Imelda Maranan' }, 
  { id: 6, name: 'Jeanette Dimla' }, { id: 7, name: 'Maricel Acuzar' }, { id: 8, name: 'Jocelyn Marquez' },
  { id: 9, name: 'Rowena Hernandez' }, { id: 10, name: 'Lilibeth Posedio' }, { id: 11, name: 'Norma Hayag' },
  { id: 12, name: 'Abigail Villegas' }, { id: 13, name: 'Rosalyn Tolentino' }, { id: 14, name: 'Amelita Angeles' },
  { id: 15, name: 'Rory Gertos' }, { id: 16, name: 'Leonora Velasco' }, { id: 17, name: 'Leoncia Garcia' }, 
])

const ninongs = reactive([
  { id: 15, name: 'Jumar Bagon' }, { id: 1, name: 'Johnwell Viesca' }, { id: 2, name: 'Cherrybril Polido' },
  { id: 3, name: 'Dindo Toralba' }, { id: 4, name: 'Arni Macarandang' }, { id: 5, name: 'Rony Maranan' },
  { id: 6, name: 'Rogelio Dimla' }, { id: 7, name: 'Arman Salosa' }, { id: 8, name: 'Marcelino Marquez' },
  { id: 9, name: 'Cornelio Hernandez' }, { id: 10, name: 'Benjamin Posedio Jr.' }, { id: 11, name: 'Archimedes Hayag' }, 
  { id: 12, name: 'Arnaldo Villegas' }, { id: 13, name: 'Rowel Tolentino' }, { id: 14, name: 'Manolito Sanchez' },
])

const secondarySponsors = [
  { role: 'Punong Abay', names: ['Jerwin Naval'] },
  { role: 'Punong Abay na Babae', names: ['Baby Ruth Adeva'] },
  { role: 'Mga Abay sa Kordon', names: ['Jessa Salosa', 'Vincent Moises Tandico'] },
  { role: 'Mga Abay sa Belo', names: ['Jenny Salosa', 'Nico Joaquin Ramos'] },
  { role: 'Mga Abay sa Kandila', names: ['Kaycel Marcelo', 'Mark Steven Montañez'] },
  { role: 'Mga Batang Tagasaboy ng Bulaklak', names: ['Jessica Aisha Adeva', 'Hermione Marcelo'] },
  { role: 'Tagadala ng Bibliya', names: ['Boaz Adriel Bagon'] },
  { role: 'Tagadala ng Singsing', names: ['Nigel Nico Adeva'] },
  { role: 'Mga Abay na Lalaki', names: ['Jeffrey Neil Santos', 'Miko Adeva', 'Joshua Sandoval'] },
  { role: 'Mga Abay na Babae', names: ['Kristine Mae Maranan', 'Joyce Ann Manzanilla', 'Hannah Tumambing'] }
]

const polaroids = [
  { src: 'https://lh3.googleusercontent.com/d/1yK2iS3Zntsy1ZW6Ev9sm3R9qJn8edd4H', caption: 'Ang Simula' },
  { src: 'https://lh3.googleusercontent.com/d/1UD0y4_y7XoimuBJgz8Pt4c8dVwC71EF-', caption: 'Paglalakbay' },
  { src: 'https://lh3.googleusercontent.com/d/1nLhUfIpXDygtnM4a0EaygkB1OIvyrlXs', caption: 'Habang Buhay' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allura&family=Inter:wght@300;400;600&display=swap');

.entourage-section {
  position: relative;
  width: 100%;
  background: #fdfbf7;
  padding: 100px 20px 0 20px;
  overflow: visible;
  text-align: center; /* Global center for simple text */
}

.entourage-container {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
}

/* Titles */
.section-title {
  font-family: 'Allura', cursive;
  font-size: clamp(3rem, 10vw, 4.5rem);
  color: #191970;
  margin: 10px 0;
}

.title-divider {
  height: 1px;
  width: 150px;
  background: #d4af37;
  margin: 0 auto 80px;
}

.subsection-title, .sponsor-role {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #191970;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
  text-align: center;
}

.parent-name, .sponsor-name {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  color: #555;
  margin: 8px 0;
  letter-spacing: 1px;
  text-align: center;
}

/* Secondary Sponsors Centering */
.badge-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.section-badge {
  padding: 8px 25px;
  border: 1px solid #d4af37;
  color: #191970;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 50px;
}

.secondary-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px 40px;
  justify-items: center; /* Centers the group columns */
}

.secondary-group {
  text-align: center;
}

/* Sections Layout */
.parents-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.sponsors-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background: rgba(255, 255, 255, 0.4);
  padding: 30px;
  border-radius: 20px;
}

/* Decorations */
.flower-decoration {
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 0;
  pointer-events: none;
}
.corner-top-left { top: -50px; left: -50px; }
.corner-bottom-right { bottom: -50px; right: -50px; }

/* Polaroids (Maintains space-between layout) */
.polaroid-wrapper {
  position: relative;
  z-index: 20;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.polaroid-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  margin-bottom: -120px;
}

.polaroid {
  background: white;
  padding: 15px 15px 45px 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  width: 260px;
}

.polaroid img { width: 100%; height: 230px; object-fit: cover; }
.polaroid .caption { font-family: 'Allura', cursive; font-size: 2.2rem; color: #191970; margin-top: 15px; }

@media (max-width: 768px) {
  .parents-section, .sponsors-columns, .secondary-grid {
    grid-template-columns: 1fr;
  }
  .polaroid-gallery {
    justify-content: center;
    gap: 30px;
  }
}
</style>