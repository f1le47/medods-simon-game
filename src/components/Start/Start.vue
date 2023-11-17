<template>
  <div :class="$style['start']">
    <span
      :class="$style['round']"
    >
      Раунд: {{ round }}
    </span>
    <button
      v-on:click="start"
      :class="$style['button']"
    >
      Старт
    </button>
    <span
      :class="$style['gameover']"
      v-if="isGameOvered"
    >
      Не правильно! Игра окончена.
    </span>
  </div>
</template>

<script>
export default {
  name: 'startComponent',
  props: {
    round: Number,
    isGameOvered: Boolean
  },
  methods: {
    start() {
      this.$emit('start');
    }
  }
}
</script>

<style module lang="scss">
  .start {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .round {
    font-family: sans-serif;
    font-size: 30px;
    color: #2b2b2b;
  }

  .button {
    margin-top: 10px;
    padding: 10px;
    font-size: 30px;
    font-family: sans-serif;
    color: #fff;
    background-color: rgb(62, 62, 245);
    border: none;
    border-radius: 10px;
    outline: none;
    width: 200px;
    cursor: pointer;
  }

  .gameover {
    margin-top: 10px;
    color: red;
  }
</style>