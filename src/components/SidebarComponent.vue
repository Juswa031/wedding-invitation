<template>
  <nav class="sidebar">
    <!-- Hamburger button for mobile -->
    <button class="hamburger" :class="{ open: isOpen }" @click="isOpen = !isOpen">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Menu items container -->
    <div class="menu-container" :class="{ open: isOpen }">
      <ul>
        <li v-for="item in items" :key="item.id">
          <button
            @click="handleItemClick(item.id)"
            :class="{ active: activeSection === item.id }"
          >
            {{ item.label }}
          </button>
        </li>
      </ul>
    </div>

    <!-- Overlay for closing menu on click -->
    <div :class="{ open: isOpen }" class="overlay" @click="isOpen = false"></div>
  </nav>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeSection = ref('hero')

const items = reactive([
  { id: 'hero', label: 'Home' },
  { id: 'countdown', label: 'Countdown' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'ceremony', label: 'Ceremony' },
  { id: 'dresscode', label: 'Dress Code' },
  { id: 'entourage', label: 'Entourage' },
  { id: 'notes', label: 'Notes' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'gallery', label: 'Gallery' },
])

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleItemClick = (id) => {
  scrollTo(id)
  isOpen.value = false
  activeSection.value = id
}

const handleScroll = () => {
  const sections = items.map(item => document.getElementById(item.id)).filter(Boolean)
  if (!sections.length) return

  // Choose the section whose top is closest to 100px from viewport top
  let closest = sections[0]
  let closestDist = Math.abs(sections[0].getBoundingClientRect().top - 100)
  for (const section of sections) {
    const rect = section.getBoundingClientRect()
    const dist = Math.abs(rect.top - 100)
    if (dist < closestDist) {
      closest = section
      closestDist = dist
    }
  }
  activeSection.value = closest.id
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.sidebar {
  position: fixed;
  z-index: 9998;
}

/* Hamburger button */
.hamburger {
  position: fixed;
  right: 18px;
  top: 20px;
  z-index: 9999;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(25, 25, 112, 0.1);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  padding: 0;
}

.hamburger span {
  width: 24px;
  height: 3px;
  background: #191970;
  border-radius: 2px;
  transition: all 0.3s ease;
  display: block;
  position: relative;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Menu container - desktop view */
.menu-container {
  position: fixed;
  right: -300px;
  top: 0;
  width: 280px;
  height: 100vh;
  z-index: 9998;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 240, 255, 0.98) 100%);
  border-left: 2px solid rgba(25, 25, 112, 0.2);
  backdrop-filter: blur(10px);
  transition: right 0.3s ease;
  box-shadow: -8px 0 25px rgba(25, 25, 112, 0.15);
}

.menu-container.open {
  right: 0;
}

.menu-container ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
}

.menu-container button {
  background: rgba(25, 25, 112, 0.08);
  border: 1.5px solid rgba(25, 25, 112, 0.2);
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  color: #191970;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
  font-size: 14px;
  letter-spacing: 0.3px;
}

.menu-container button:hover {
  background: rgba(25, 25, 112, 0.15);
  border-color: rgba(25, 25, 112, 0.35);
  transform: translateX(-4px);
  box-shadow: 0 6px 16px rgba(25, 25, 112, 0.15);
}

.menu-container button.active {
  background: linear-gradient(135deg, rgba(25, 25, 112, 0.9) 0%, rgba(75, 0, 130, 0.9) 100%);
  color: white;
  font-weight: 700;
  border-color: rgba(25, 25, 112, 0.8);
  box-shadow: 0 8px 20px rgba(25, 25, 112, 0.3);
  transform: translateX(-4px);
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9997;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay.open {
  opacity: 1;
}

/* Mobile styles */
@media (max-width: 768px) {
  .menu-container {
    right: -300px;
    width: 250px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 80px;
    justify-content: flex-start;
    background: rgba(255, 255, 255, 0.98);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: -2px 0 15px rgba(0, 0, 0, 0.2);
  }

  .menu-container.open {
    right: 0;
  }

  .overlay {
    display: block;
  }

  .overlay.hidden {
    display: none;
  }
}
</style>
