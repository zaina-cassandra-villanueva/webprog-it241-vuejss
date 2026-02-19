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
      ],

      // NEW: v-for gallery data
      manyFoods: [
        { name: "Burrito", url: "https://www.w3schools.com/vue/img_burrito.svg" },
        { name: "Salad", url: "https://www.w3schools.com/vue/img_salad.svg" },
        { name: "Cake", url: "https://www.w3schools.com/vue/img_cake.svg" },
        { name: "Soup", url: "https://www.w3schools.com/vue/img_soup.svg" },
        { name: "Fish", url: "https://www.w3schools.com/vue/img_fish.svg" },
        { name: "Pizza", url: "https://www.w3schools.com/vue/img_pizza.svg" },
        { name: "Rice", url: "https://www.w3schools.com/vue/img_rice.svg" }
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
