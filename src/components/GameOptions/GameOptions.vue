<template>
  <div :class="$style['gameOptions']">
    <h1 :class="$style['title']">Сложность</h1>
    <div :class="$style['levels']">
      <div :class="$style['easyLevel']">
        <input
          type="radio"
          id="easy"
          name="level"
          value="easy"
          v-model="level"
        >
        <label
          for="easy"
          :class="$style['label']"
        >
          Легкая
        </label>
      </div>
      <div :class="$style['mediumLevel']">
        <input
          type="radio"
          id="medium"
          name="level"
          value="medium"
          v-model="level"
        >
        <label
          for="medium"
          :class="$style['label']"
        >
          Средняя
        </label>
      </div>
      <div :class="$style['hardLevel']">
        <input
          type="radio"
          id="hard"
          name="level"
          value="hard"
          v-model="level"
        >
        <label
          for="hard"
          :class="$style['label']"
        >
          Сложная
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gameOptions',
  data: () => ({
    level: 'easy'
  }),
  updated() {
    this.$emit('level', {
      level: this.level
    })
  }
}
</script>

<style module lang="scss">
.gameOptions {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 30px;
  font-family: sans-serif;
  color: #2b2b2b;
}

.label {
  font-size: 16px;
  font-family: sans-serif;
}

</style>