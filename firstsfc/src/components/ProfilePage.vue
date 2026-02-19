<template>
  <div class="page">
    <header class="hero">
      <h1>{{ pageTitle }}</h1>
      <p class="subtitle">{{ tagline }}</p>
    </header>

    <main class="container">
      <section class="card">
        <h2>About Me</h2>
        <p class="muted">{{ aboutMe }}</p>
      </section>

      <section class="grid">
        <section class="card">
          <h2>Educational Background</h2>
          <ul>
            <li v-for="(item, i) in education" :key="i">{{ item }}</li>
          </ul>
        </section>

        <section class="card">
          <h2>Course</h2>
          <p class="big">{{ course }}</p>
        </section>
      </section>

      <section class="card">
        <h2>IT Experiences</h2>
        <ul>
          <li v-for="(exp, i) in experiences" :key="i">{{ exp }}</li>
        </ul>
      </section>

      <section class="card">
        <h2>Hobbies & Interests</h2>
        <div class="chips">
          <span class="chip" v-for="(h, i) in hobbies" :key="i">{{ h }}</span>
        </div>
      </section>

      <section class="card">
        <h2>Goals In Life / Dream</h2>
        <p class="muted">{{ goal }}</p>
      </section>

      <section class="card">
        <div class="row">
          <h2>Picture Gallery</h2>
          <button class="btn" @click="shuffleGallery">Shuffle</button>
        </div>

        <div class="gallery">
          <figure
            class="photo"
            v-for="(img, i) in gallery"
            :key="i"
            @click="openModal(img)"
          >
            <img :src="img.src" :alt="img.alt" />
            <figcaption>{{ img.caption }}</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Social Links</h2>
        <ul class="links">
          <li v-for="(s, i) in socials" :key="i">
            <a :href="s.url" target="_blank" rel="noopener">{{ s.label }}</a>
          </li>
        </ul>
      </section>
    </main>

    <!-- MODAL -->
    <div class="modal" v-if="modalOpen" @click.self="closeModal">
      <div class="modal-card">
        <button class="modal-close" @click="closeModal">✕</button>
        <img class="modal-img" :src="selected.src" :alt="selected.alt" />
        <p class="muted">{{ selected.caption }}</p>
      </div>
    </div>

    <footer class="footer">
      <small>© {{ new Date().getFullYear() }} {{ name }} • Vue Profile</small>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = "Zaina Cassandra S. Villanueva";
const pageTitle = "My Personal Profile Web Page";
const tagline = "BSIT • creative • future IT pro ✨";

const aboutMe =
  "Hi! I'm Zai. I’m a BS Information Technology student who loves combining tech, creativity, and design.";

const education = ref([
  "ABM SHS Student — GWA: 98",
  "College Freshman (BSIT)",
]);

const course = "BS INFORMATION TECHNOLOGY";

const experiences = ref([
  "Database creation (ERDs, data dictionaries, SQL scripts)",
  "Cisco VLAN & routing configurations",
  "Python mini-app development",
  "Content creation for events",
  "Basic frontend and app planning",
]);

const hobbies = ref([
  "DIY Crafter",
  "Design & Digital Content",
  "Business & Branding",
  "Aesthetic layouts",
]);

const goal =
  "To become a skilled IT professional and build a successful business that blends tech, creativity, and design.";

const gallery = ref([
  // ✅ If you want local images, use: /img/pic1.jpg then place them in /public/img/
  { src: "/img/pic1.jpg", alt: "Photo 1", caption: "Memory 1" },
  { src: "/img/pic2.jpg", alt: "Photo 2", caption: "Memory 2" },
  { src: "/img/pic3.jpg", alt: "Photo 3", caption: "Memory 3" },
]);

const socials = ref([
  { label: "Facebook", url: "https://facebook.com/" },
  { label: "Instagram", url: "https://instagram.com/" },
  { label: "GitHub", url: "https://github.com/" },
]);

const modalOpen = ref(false);
const selected = ref({ src: "", alt: "", caption: "" });

function openModal(img) {
  selected.value = img;
  modalOpen.value = true;
}
function closeModal() {
  modalOpen.value = false;
}
function shuffleGallery() {
  gallery.value = [...gallery.value].sort(() => Math.random() - 0.5);
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #0f0f14;
  color: rgba(255, 255, 255, 0.92);
}

.hero {
  padding: 36px 16px 18px;
  text-align: center;
}

.subtitle {
  margin: 10px auto 0;
  max-width: 760px;
  color: rgba(255, 255, 255, 0.7);
}

.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 12px 16px 40px;
  display: grid;
  gap: 14px;
}

.card {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  padding: 16px;
}

.grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.muted {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.big {
  margin: 0;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.75);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.chip {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.btn {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(167, 139, 250, 0.18);
  color: rgba(255, 255, 255, 0.92);
  padding: 8px 12px;
  border-radius: 12px;
  cursor: pointer;
}

.gallery {
  margin-top: 12px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
@media (max-width: 900px) {
  .gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 520px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}

.photo {
  margin: 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.18);
  cursor: pointer;
}
.photo img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
}
.photo figcaption {
  padding: 10px 12px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.links a {
  color: #dbeafe;
  text-decoration: none;
}
.links a:hover {
  text-decoration: underline;
}

/* modal */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 50;
}
.modal-card {
  max-width: 560px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(20, 20, 28, 0.92);
  border-radius: 18px;
  padding: 12px;
  position: relative;
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
}
.modal-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 14px;
  display: block;
}

.footer {
  text-align: center;
  padding: 18px 16px 30px;
  color: rgba(255, 255, 255, 0.55);
}
</style>
