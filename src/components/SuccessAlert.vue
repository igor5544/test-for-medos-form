<template>
  <div>
    <p>{{formFields.name + ' ' + formFields.lastName }}</p>
    <p>Успешно зарегестрирован!</p>
  </div>
</template>

<script>
export default {
  props: ["formFields"]
};
</script>

<style scoped>
div {
  border: 1px solid #30cf07;
  border-radius: 20px;
  padding: 20px;
}

p {
  margin: 10px;
  font-size: 24px;
  text-align: center;
}
</style>