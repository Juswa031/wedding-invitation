<template>
  <section class="gallery-section">
    <div class="gallery-header">
      <h2 class="gallery-title brittany-font">Jeffrey & Jeana</h2>
      <p class="gallery-subtitle">Ito ang araw na inantay nang kay tagal</p>
      <div class="title-divider"></div>
    </div>

    <div class="gallery-fluid-container">
      <div class="gallery-grid">
        <div 
          v-for="(photoId, index) in galleryPhotos" 
          :key="photoId"
          class="gallery-item"
          :class="['item-style-' + (index % 8), 'reveal-on-scroll']" 
          @click="openLightbox(index)"
        >
          <img :src="getDriveImageUrl(photoId, true)" alt="Gallery Photo" loading="lazy" />
          <div class="gallery-overlay">
            <div class="view-button">
               <span class="view-text">Sulyap</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="lightbox-fade">
      <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
        
        <button class="close-btn" @click="closeLightbox" aria-label="Close">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div class="lightbox-stage" @click.stop>
          <div class="nav-container">
            <button class="nav-btn prev" @click="previousPhoto" aria-label="Previous">
              <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="1.5" fill="none">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <button class="nav-btn next" @click="nextPhoto" aria-label="Next">
              <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="1.5" fill="none">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          <div class="image-wrapper">
            <Transition name="slide-up" mode="out-in">
              <img 
                :key="currentPhotoIndex" 
                :src="getDriveImageUrl(galleryPhotos[currentPhotoIndex], false)" 
                class="main-img" 
              />
            </Transition>
            
            <div class="lightbox-info">
              <span class="info-names brittany-font">Jeffrey & Jeana</span>
              <span class="info-counter">{{ currentPhotoIndex + 1 }} / {{ galleryPhotos.length }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const lightboxOpen = ref(false)
const currentPhotoIndex = ref(0)

// Robust URL helper: thumbnail=true for grid (optimized for mobile), false for high-res lightbox
const getDriveImageUrl = (id, isThumbnail = false) => {
  // We use w600 for thumbnails to ensure they look sharp on mobile "Retina" screens
  const size = isThumbnail ? '=w600-h600-p' : '=w1600';
  return `https://lh3.googleusercontent.com/u/0/d/${id}${size}`;
}

const galleryPhotos = reactive([
  '1IZeafa4g1Zj1O6k3CofUOlhyNi7FDkny', '1mB6XmwuTnDN56lahRVuD-2dsUeEiN6-7',
  '11Kq4Pb6KoF5QLY6a0-_OMMtnDoBcweUe', '1Njhc7sF39NOj0u_6MMrh7OD47aLGwxpB',
  '1-E7WeISv9MPyQvDlDhdfpKJvDVbGR8Hy', '1N18dbf8m6CIh4yEz0PXZcdeyTq5FmilU',
  '1lqSaa1jddHdT_PyOHnQQYTtcMQDsJzzU', '1UD0y4_y7XoimuBJgz8Pt4c8dVwC71EF-',
  '1Arf1UNnXXfvc_WQQihcjTsN6IGK-az4h', '1oD0kShVfOtS17Ajkd88dPW4jLI1aFKMp',
  '1EUCfw_xkbx-bTTsOpOnrASgrs4puXueJ', '1jOufI1ue8BfLC3-x-wdCgO6Ub53x6J6L',
  '1FsDtKoUzCJhRciIU8CubynCFaCs3Wquk', '1efVZZzhmusjsREybQgYf3bWNk2rpCHgw',
  '1ltxyMkLuh85BF4w7_NLpVaFG5TFdSIEz', '17Pwd40uVGlSuuWgB_8n4CIFfkoMZ2kUj',
  '1mkyrM61Xb0_7H8dTAh6Rw2nGmjaWeFtl', '10IexDYcJrJmedWPICYD2p4V_5m9yXuTi',
  '1x9JJnYTbVxuOEHKlVhfltyxpLBvI-Yke', '1sKRmT_BkLSUIH0qPSllhW1qYBC3bNGUb',
  '1rIpEnwWeGObxMfg33fxXGEVlKKsoRv_2', '1sEVleCPhjpc4apzZyKAZXhb18PuRjSa1',
  '18QM7v1kG6k8vwL3NEPLr9KTHHNq3GXL5', '1nHe3B-EJ7QdERLhP390ypE2bxeBXBf4V',
  '1_vrCdH0RhC_hcowzNGQ8rU5EBYrl_HjP', '19vV5NLn_-wMbU4g0ttvl-xaSnG0omSl-',
  '1GmL75XHERJfOFx3KSe3v-1vzvfXpzq9L', '1lVMfbqLyz0BOlnlpCzGPeobVI7nVu2G2',
  '1OwzClJ8NQ2yZTrl9ef0TmX2Y7E8gXB-n', '1jKi9fCW31_ldGy6qPt28i9IKk1640w7n',
  '1G99G1pwzsWfJzSG4CE7EDx9VNKWuolBt', '1tq4KM3lVxcnimqAZ7Npmle5khGCABmR2',
  '1UwCMIe321uUBNZORE7MgqPRCDHh782Ot', '1JBNEuXWJ0bYjTJ16laK82ROm5vGbhLrI',
  '15pAWZknOd4i7r-8_77xi8fpPyLW-KVLP', '1dIvuxHJ7bRmhtLQw64VEh_CUNpXlw-q-',
  '1i8AU2OjXIQgF8XwrLut_VrTXJk1ACYVz', '1yNmt9d6Ps9Z-5hRe-qtweDPE88ByMkSW',
  '1_fq13I2E00iC98rETqcjxKRxfNia8lCS', '1LwAe8OkhDuu9ws1kb02DOtomUqHQoMjs',
  '1nxMBvDrP_JExoXTpXQa4hpQbdvYs4d9i', '1DUuEASwi1I0TW1VuzkklsxUYaVjwmYqf',
  '1MZe8b8EEjlZtmLK8whfyEJa9GyDNeuUW', '1U3s06IcWBv6YUthtRXRy67UjEmmbyX5R',
  '1EelY78yRGSWeuI3FxOxuz5VtO7YRGc7q', '1S8DS9DaElfPXTQac2eEnUjoQ9Z9ap5Su',
  '1ZmcBMcvvanKi1HnrhAJKjwMr9agDk9ux', '1fWxdEK-96HfMSL96sb6DsA6uZH2i_5U3',
  '1eoNT4V48VdOGCdEz_P9XwhMOKPW3kPH7', '1w5UHhgwXy_C5pdf7EMobFNJVhn8D_LbQ',
  '1OquwE4okcGYZ1e62pFxYObuO_juIA3WT', '1GCo3ihA4hJhPUe8l5dZDFel0tW5dLYj8',
  '13IVHJHYrJuhaRFggIErT2WTDpQRG8Qet', '1HoleYXaOCFBxRNvxQmObA37alxpZ1GbP',
  '1tbYyXXlQgwF3tFNbDzoRout4MpdRrSkw', '1yK2iS3Zntsy1ZW6Ev9sm3R9qJn8edd4H',
  '1TJWNOq032faRXyj4E4_gmHd8biUtJ0EU', '1iIqltvcSM1jSe4kvBfyfN30LUtanJHjY',
  '1Z-cxjOfdcr4WcqTAv5TnW-q2gb1Kpqu7', '13Ve3fzprs_-GrrwGRUG56Sz_X2F4bj09',
  '1iba4Y5Ac7A2D4UChUx6F9k3Bz4LuMX3S', '1K_82LqKErk3SeFRUec8TVBNjUH3BzOP5',
  '1REG7EBb1oWfFyQm3EI-cQR6UwIvbh7bS', '1kY3HlMjgIGN0mdgaZMLDrawOwN39xRqm',
  '1AxQlEesnYMgHFWVYok1Rz-4oxoEA-n_Y', '1tKjn90y2J1yUwIwo2OMQ1lKMj8PdBdRp',
  '1fe1Tl3iXWsnI8vobIbRnp_09CcO8ERVC', '1pht9deo2QPmTaCKR9Qvk-uDeAZeYVUmu',
  '1yZ_ix8yvyZbDfbDh0YIRFeHW-8JTfopW', '1bT-h88NHpqAU9XqFfXPS_241TCbqLwKx',
  '1Od4JC2BxXt3CG22LTzuZp97V-q1v124u', '1xEOzmu97DtgFqX4tYjyld16Tt3azPQ3p',
  '1BVfePpSbloe7IHGfYykYlj6BREjO7ZQ7', '1IIJcTAHBsUTRjG9y_FhyqKiCDFeZIBqX',
  '1wKcsNUg-yH5ghio4MaEcvnnT9FZV-mtB', '1UXT6VN1eSCU6cWB3TYNhqeIbGxiv1-A6',
  '1tG20IBb3kT9lHck7hsiNolkmA1Un7jD5', '1n5-Via7rYgBELaJXlUIcl-qmeosmu_H-',
  '17r7_9mAUibQudbq81QkFguIVHZbYTW9p', '1B9QsLqkXYIXCaRtgInb9Iatt5vqsFATY',
  '1PdR3Ft33pnuGLrqSZKxKNzY7bOKZH4Hc', '1xZMrP7bBYWmNBM6O_S6KQ3CuVbnnKE5f',
  '1WyWlXUCmga-yw08w4TjCfyCMvE7Fny9b', '1cYkxG329_h3JGJU8g2m_3HrAE3B6S_KA',
  '1Wf_yZ28Kzp5GN1mGMj8pmeilBFUcA5Dl', '1GkQJM8_3Q5W9WApfVbQ126P-qQxPnhfN',
  '1gkoxcf1C0SXUDBWtiLsNnJqm729v80Q4', '1tchLHtTaRydN9lRnL3I1HdKHEwPmb0iU',
  '1Wkkl8XMGnDqdKkvZDeIXS7GAzbfkjevR', '1ePrMtlZ-Ri2jiSMuvpWFBvv0aJultxCC',
  '1iBiLbMEO9zY6QUiA0ababBjZSRJhpWLX', '1iOWycPf-0ry4yiLp-0LMB0qR43ESBYTW',
  '1pE032Ia2kXnp13k7zk-lgpMfExyGWr4A', '1cV7jEgoP0j-YOub7zPHb3Xjm7x_20BUl',
  '1Hij1aN5aoHv9t84CHGS_YPcHpUw4TVDx', '1Wl0azkpsuOfwDSy-Q0ua4Jk1Y5vGZts7',
  '13gh_uz_BZ8IdSe9gcaYUHcecp12U6A4U', '19zIwILay7Ay51cFb67pZ_f9Skb6wQO_k',
  '1_XZfr77q0DMmsSsW8qagePhs89zHkIra', '1wnK8TcPJ91W1WPjAdQSGkNC8wttcvk9I',
  '1rVP4wHv-1l4fCudN5TG6DPirEn7CXwLW', '1cAY6dTm2LcYCUUpZKEIFtrPK3hfWMX13',
  '1tBmoGDORhfJQPf2Rx4s3_QjJ5g1ayseC', '1EK6B_klB5YO0sTPD2QBAMUZYcsXX_joj',
  '1vvmhc-41cHPBznHvahQSGDfr9a20-yMs', '16Wc_DmHHjvbhGeI_IPefcAgWreS0kx4B',
  '1iUn7sep5NAf4ulTzQg-6_eWoCTynQ1h9', '1cE8fe5IQLRdrYpA675T_Tg-s6Eb3g2Xi',
  '1vXJT3SEe6anAIDFlSijx_DM5wkC2toi-', '1dDGJTc0UAhx2RkGHPAERhSsVfdNF0Ciy',
  '1sfkCDjmMPOGkOqO6nPvu0PYTCjwm4cGs', '18ha7A9nIOzShBeHMB7SPR94VqpGfoUUq',
  '16Sl0UgnhBF1ULLtIGDIXXD9wU6l5tY_3', '1ry_82JaRK3Z5vJSj1LeP-9Yrcx17OtlB',
  '18O348IEJtUXOVEeTZ2_uSRdlva9PVXcu', '1kdnjaMzQiLIkChse87nU26_ky1xvA9DJ',
  '1ndB_O_pi8IEWGScx2CceB8mBlKY_223S', '1MsHmxKO_w0WLcoFlR6jIxrk801c7WbKZ',
  '1NK2uIEGAB_tyrQUWXV-B5LKvFH67hr5R', '119kM5hT0rTpwOl2SFdwO8IXMVvTtZSYv',
  '1VoRqvlsd4kdcCcUPtw48aojcpt4ow-ND', '1L7YxrfR4X0Sijzk8upUV2cX1c968w5aw',
  '1ywQDcumEHQbhaYPka1TD_xbQuv9iBUfo', '1b5pJRzSet9xvGub1BIo_2ZDlpn1MA8XK',
  '1X6NCLz1K8bAqLSzxthek3p4i_f8yV1XQ', '1p0yGZS92ZSf3HmWZx-MxK1aRrBZjk64x',
  '1zQmpb2ygkox5mi8iHp8qVj2Zs6G7dEW-', '1xbsA1CH_p-K9V5qEamlBDj2ibZLtSB5i',
  '1pTvkVWaZdmH2HSqH1yFaCgktc3-ME4mk', '1iUGcAH8QfNWbUqhspTxUs9uXWHS9G-jj',
  '1o-LSnmzoVgY3RtVYTkA4hBX928U1qFDw', '1euPDslofkEsNpWhJHQPn3IMEl88tzOwV',
  '1seXVTaS-nR_Jo8dhTvCsV2n6z-fYQCAx', '18t9Gm8ZlPjS2LKNmUgEeXkoq08Eoc4q5',
  '1kG7AkfoPPplQyJ_9TZr5KzoCmB-phV3i', '1WUEn-e9fH_d7d3SIafCN9cb7Q08JntlB',
  '1371omFUNzvcUadDj4iamdnYJB9EBcdyg', '1z-A54NevQrw6ZKxLIjiVWRIeEnSTlJC_',
  '1F95v9bXYdDDMu4FjC4akotbSDIy7xYAf', '1eCAUTj6l6PjxTPjPJEmZFe1qCCrzU9wI',
  '1zj7AHSebVqKqkKQbpMgBuWokYwaSY3Aa', '1T1-iBFHgfG1PObu6IfVRR7WSj2Rhl4cm',
  '1BqAqnKbXBu4gIC4ZCmwe9l5zQybVROb9', '1N22hwUe_MT-S01eUBmJ9nSpvYcSdo-NZ',
  '11UCB98sRmfZW307cuOXKAi_F81nM08Ff', '1hOzu5zdiiD2rvG7HrJgCsB9_s7xEv_Bz',
  '1yOUvXrNz7SZr3O61u214ab6-RVOTQWiK', '1bNky5no6ka9MllAiLbNeUql4xIRmrbQg',
  '1NqXfN7NwVKSR_26o-1O5W94vd01dKLrC', '1AT5CcNCa9trvrKSdBy0RB2f3eLVG_7kk',
  '10VO6mlR9pw4Ftbm7OJP4uYBLj8G17XNN', '1tTKBOYPY807mweXs4LlaJ-NfGcnaxUkE',
  '1IHsSJLzIkTiQehkHG_wBrokfUtM6d7fQ', '1RYcAifHGBJw96QkmY7OqJ4U9FuZngwKw',
  '1p335k3c_1yJ-MnP7sOlEY3_CCO81R7r_', '1Q7PK7Ai01918QqQMOgS1NT5GYJjzZlRp',
  '1RKCrJIOnBqow5ls1T_nSmMcg_6kjetzP', '1rebqVpJ1SCJtgaztpq-LvU3c1L4JGLPF',
  '1xeg413YRmTH6J0HsiMpU15ZlYJflZGw6', '1gMqraeYiU0nX9W2joM0kU9b1laId3A12',
  '1e_vTL-SUG04UMLYHhcYJMQYDfPb6jlDN', '1-Ln9ek_zf2XVbFf6NyfOjRw9z05ml83x',
  '1pd67qoUhfMKo2CE56gndWWBWIXYv2E1n', '1-f3F4duJ-R17qGqOORaWUIGgtMP-CT4F',
  '1jOKZ-m1OS7VE1yfdk1Y3rH1YnbAK672F', '1Jofv153qcdavaMu_KLUxMvmULOaKkPWX',
  '1P6XTS1KQOjs0gdtvhrjx_guTsBaUzjEw', '1Xil695aizHw6pyxHcXyeKWfOANVgSlz7',
  '1EwVZ-hIpqTXIxFFu0FuyC9jG4p8nvo67', '1FTqoe9KOvoZ67fH9XA44V_REfIMSWx_v',
  '1rE1Gp1yBdP4XHl--Hx-KUUXs6PBdg4cC', '1wQYQiw3PCMMa8cibhEmlb3ey2laGgWr_',
  '1k8bDYzUdSoAX5CuUKJ_ptz3JWreDwHTZ', '167t6uAgJ-9nNshnf5lQcc8hWIQa7mv4q',
  '1M2VZcxQKeSh4Ha9D385AECK-54vRMmaX', '1SfBN-FwRUfPB_EzTXc-O3cklPKi1XQDG',
  '1C6xR7cH9jgYXc8r1fLIDvyhvNaslVorp', '1KacJ73bWm4OEw5ry0UleFsukqz2u2slT',
  '1QlfMxrp_KOvPVp0JJLh3i5zRWIWOgALh', '1rZYJDhseho-wMHCAIKjLTHClaeePs6Kb',
  '1UkPPQyOaB8wciMl_zKtysTZmA0lOiTnb'
])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});

const openLightbox = (i) => {
  currentPhotoIndex.value = i;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = 'auto';
};

const nextPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % galleryPhotos.length;
};

const previousPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value - 1 + galleryPhotos.length) % galleryPhotos.length;
};
</script>

<style scoped>
/* --- CORE STYLES --- */
.gallery-section {
  width: 100%;
  background: #fdfbf7;
  padding: 60px 0;
}

.gallery-header {
  text-align: center;
  padding: 0 20px;
  margin-bottom: 40px;
}

.gallery-title { font-size: clamp(2.5rem, 7vw, 5.5rem); color: #191970; }
.gallery-subtitle { font-family: 'Montserrat', sans-serif; font-size: 0.7rem; color: #8e8e8e; letter-spacing: 3px; text-transform: uppercase; margin-top: 15px;}
.title-divider { height: 1px; width: 50px; background: #d4af37; margin: 20px auto; }

/* --- GRID --- */
.gallery-fluid-container { width: 100%; padding: 0 10px; box-sizing: border-box;}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 200px;
  gap: 8px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  background: #eee;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.gallery-item.active { opacity: 1; transform: translateY(0); }

/* Desktop Bento Logic */
.item-style-0 { grid-column: span 3; grid-row: span 2; }
.item-style-1 { grid-column: span 3; grid-row: span 1; }
.item-style-2 { grid-column: span 1; grid-row: span 1; }
.item-style-3 { grid-column: span 2; grid-row: span 2; }

.gallery-item img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-overlay {
  position: absolute; inset: 0;
  background: rgba(25, 25, 112, 0.2);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s ease;
}

@media (hover: hover) {
  .gallery-item:hover .gallery-overlay { opacity: 1; }
  .gallery-item:hover img { transform: scale(1.05); }
}

.view-button {
  padding: 8px 16px; border: 1px solid white;
  background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(4px);
}
.view-text { color: white; font-family: 'Montserrat', sans-serif; letter-spacing: 2px; font-size: 0.65rem; text-transform: uppercase; }

/* --- MOBILE LIGHTBOX (The Fix) --- */
.lightbox-overlay {
  position: fixed; inset: 0; background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px); z-index: 10000;
  display: flex; align-items: center; justify-content: center;
}

.lightbox-stage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-img {
  max-width: 100%;
  max-height: 65vh;
  object-fit: contain;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.lightbox-info {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-container {
  position: absolute;
  bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  z-index: 10;
}

.nav-btn, .close-btn {
  background: #191970;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.nav-btn { width: 55px; height: 55px; }
.close-btn { 
  position: absolute; 
  top: 20px; 
  right: 20px; 
  width: 45px; 
  height: 45px; 
  z-index: 11;
}

/* --- MOBILE SPECIFIC --- */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }
  
  /* Resetting bento grid for simple 2-column mobile view */
  .gallery-item {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
  
  /* Make every 5th image wider for variety */
  .gallery-item:nth-child(5n) {
    grid-column: span 2 !important;
  }

  .main-img { max-height: 50vh; }
  
  .info-names { font-size: 1.2rem; color: #191970; }
  .info-counter { font-size: 0.6rem; }
}

/* Transitions */
.lightbox-fade-enter-active, .lightbox-fade-leave-active { transition: opacity 0.3s ease; }
.lightbox-fade-enter-from, .lightbox-fade-leave-to { opacity: 0; }
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.4s ease; }
.slide-up-enter-from { opacity: 0; transform: scale(0.95); }
.slide-up-leave-to { opacity: 0; transform: scale(1.05); }
</style>