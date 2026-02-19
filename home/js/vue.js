
const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Zai 💻✨",
      course: "BS Information Technology",
      dream: "To become a skilled IT professional & tech entrepreneur",
      mood: "Focused and building my future 🚀",
      moods: [
        "Focused and building my future 🚀",
        "Motivated and unstoppable 💜🔥",
        "Chill but productive 😌✅",
        "Creative mode ON 🎨✨",
        "Coffee + code kind of day ☕💻"
      ]
    };
  },
  methods: {
    changeMood() {
      const randomIndex = Math.floor(Math.random() * this.moods.length);
      this.mood = this.moods[randomIndex];
    }
  }
}).mount("#app");

