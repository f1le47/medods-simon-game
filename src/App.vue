<template>
  <div id="app">
    <h1 class="title">Саймон говорит</h1>
    <div class="game">
      <Board
        :isBlueOn="isBlueOn"
        :isRedOn="isRedOn"
        :isYellowOn="isYellowOn"
        :isGreenOn="isGreenOn"
        @buttonClick="userButtonClick"
        @buttonClickDown="blueButtonClickDown"
        @buttonClickUp="blueButtonClickUp"
      />
      <div class="rightSide">
        <Start
          @start="startGame"
          :round="round"
          :isGameOvered="isGameOvered"
        />
        <GameOptions
          @level="changeLevel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Board from './components/Board/Board.vue';
import GameOptions from './components/GameOptions/GameOptions.vue';
import Start from './components/Start/Start.vue';
import {randomButton} from './helpers/randomButton';

const delay = {
  'easy': 1500,
  'medium': 1000,
  'hard': 400
};
const blueSound = new Audio(require('@/assets/sounds/blue.mp3'));
const redSound = new Audio(require('@/assets/sounds/red.mp3'));
const yellowSound = new Audio(require('@/assets/sounds/yellow.mp3'));
const greenSound = new Audio(require('@/assets/sounds/green.mp3'));

export default {
    name: "App",
    components: { Board, Start, GameOptions },
    data: () => ({
      round: 0,
      level: 'easy',
      isBlueOn: false,
      isRedOn: false,
      isYellowOn: false,
      isGreenOn: false,
      correctOrder: [],
      userOrder: [],
      isGameOvered: false
    }),
    methods: {
      startGame() {
        this.round = 1;
        this.play();
        this.isGameOvered = false;
      },
      changeLevel({level}) {
        this.level = level
        this.round = 0
      },
      userButtonClick({color}) {
        this.userOrder.push(color);
        this.playSound({color})

        if (this.correctOrder.length === this.userOrder.length) {
          this.compareOrders()
        }
      },
      playSound({color}) {
        if (color === 'blue') {
          blueSound.play();
        } else if (color === 'red') {
          redSound.play();
        } else if (color === 'yellow') {
          yellowSound.play();
        } else if (color === 'green') {
          greenSound.play();
        }
      },
      blueButtonClickDown({color}) {
        if (color === 'blue') {
          this.isBlueOn = true;
        } else if (color === 'red') {
          this.isRedOn = true;
        } else if (color === 'yellow') {
          this.isYellowOn = true;
        } else if (color === 'green') {
          this.isGreenOn = true;
        }
      },
      blueButtonClickUp({color}) {
        if (color === 'blue') {
          this.isBlueOn = false;
        } else if (color === 'red') {
          this.isRedOn = false;
        } else if (color === 'yellow') {
          this.isYellowOn = false;
        } else if (color === 'green') {
          this.isGreenOn = false;
        }
      },
      compareOrders() {
        let isCorrect = true;

        this.correctOrder.forEach((color, index) => {
          if (color !== this.userOrder[index]) {
            isCorrect = false;
            return;
          }
        })

        if (isCorrect) {
          this.round += 1;
          this.play();
        } else {
          this.round = 0;
          this.isGameOvered = true;
        }
      },
      play() {
        const queue = []
        const executeQueue = () => {
          if (queue.length === 0) {
            return;
          }

          // eslint-disable-next-line no-unused-vars
          queue[0]().then(_ => {
            queue.shift();
            executeQueue();
          })
        }

        for (let i = 0; i < this.round; i++) {
          const callbackFn = () => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((res, _) => {
            setTimeout(() => {
              const button = randomButton();
              if (button === 'blue') {
                this.isBlueOn = true;
                this.playSound({color: 'blue'})
                this.correctOrder.push('blue')

                setTimeout(() => {
                  this.isBlueOn = false;
                  res();
                }, 300)
              } else if (button === 'red') {
                this.isRedOn = true;
                this.playSound({color: 'red'})
                this.correctOrder.push('red')

                setTimeout(() => {
                  this.isRedOn = false;
                  res();
                }, 300)
              } else if (button === 'yellow') {
                this.isYellowOn = true;
                this.playSound({color: 'yellow'})
                this.correctOrder.push('yellow')

                setTimeout(() => {
                  this.isYellowOn = false;
                  res();
                }, 300)
              } else if (button === 'green') {
                this.isGreenOn = true;
                this.playSound({color: 'green'})
                this.correctOrder.push('green')

                setTimeout(() => {
                  this.isGreenOn = false;
                  res();
                }, 300)
              }
            }, delay[this.level])
            })
          }

          queue.push(callbackFn);

          if (i + 1 === this.round) {
            executeQueue();
          }
        }
      }
    }
}
</script>

<style lang="scss">
*,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: var(--font);
  }

#app {
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  font-family: sans-serif;
  font-size: 50px;
}

.game {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.rightSide {
  margin-left: 30px;
}
</style>
