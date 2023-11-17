<template>
  <div :class="$style['board']">
    <div :class="$style['layer']">
      <span
        :class="[$style['blue'], $style['button'], isBlueOn && $style['blue__glow']]"
        v-on:click="$emit('buttonClick', { color: 'blue' })"
        v-on:mousedown="$emit('buttonClickDown', { color: 'blue' })"
        v-on:mouseup="$emit('buttonClickUp', { color: 'blue' })"
      ></span>
      <span
        :class="[$style['red'], $style['button'], isRedOn && $style['red__glow']]"
        v-on:click="$emit('buttonClick', { color: 'red' })"
        v-on:mousedown="$emit('buttonClickDown', { color: 'red' })"
        v-on:mouseup="$emit('buttonClickUp', { color: 'red' })"
      ></span>
    </div>
    <div :class="$style['layer']">
      <span
        :class="[$style['yellow'], $style['button'], isYellowOn && $style['yellow__glow']]"
        v-on:click="$emit('buttonClick', { color: 'yellow' })"
        v-on:mousedown="$emit('buttonClickDown', { color: 'yellow' })"
        v-on:mouseup="$emit('buttonClickUp', { color: 'yellow' })"
      ></span>
      <span
        :class="[$style['green'], $style['button'], isGreenOn && $style['green__glow']]"
        v-on:click="$emit('buttonClick', { color: 'green' })"
        v-on:mousedown="$emit('buttonClickDown', { color: 'green' })"
        v-on:mouseup="$emit('buttonClickUp', { color: 'green' })"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'boardComponent',
  methods: {
    handleClick() {
      
    }
  },
  props: {
    isBlueOn: Boolean,
    isRedOn: Boolean,
    isYellowOn: Boolean,
    isGreenOn: Boolean
  }
}
</script>

<style module lang="scss">
  .board {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .layer {
    display: flex;
    align-items: center;
  }
  
  .button {
    height: 100px;
    width: 100px;
    cursor: pointer;
  }

  .blue {
    background-color: #78bcff;
    &__glow {
      background-color: #3c9eff;
    }
    &:hover {
      border-top: 2px solid #8b8b8b;
      border-left: 2px solid #8b8b8b;
    }
  }

  .red {
    background-color: #ff9a8e;
    &__glow {
      background-color: #fd6453;
    }
    &:hover {
      border-top: 2px solid #8b8b8b;
      border-right: 2px solid #8b8b8b;
    }
  }

  .yellow {
    background-color: #fef585;
    &__glow {
      background-color: #fff23b;
    }
    &:hover {
      border-bottom: 2px solid #8b8b8b;
      border-left: 2px solid #8b8b8b;
    }
  }

  .green {
    background-color: #d8eb73;
    &__glow {
      background-color: #cbe933;
    }
    &:hover {
      border-bottom: 2px solid #8b8b8b;
      border-right: 2px solid #8b8b8b;
    }
  }
</style>