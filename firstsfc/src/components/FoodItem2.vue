<template>
  <div class="peaches">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Peaches',
      message: 'I love Peaches'
    }
  }
};
</script>

<style>
.peaches {
  border: dashed pink 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: palevioletred;
}
</style>
