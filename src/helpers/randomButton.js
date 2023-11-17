export function randomButton() {
  const buttons = {
    1: 'blue',
    2: 'red',
    3: 'yellow',
    4: 'green'
  }
  const button = Math.floor(Math.random() * (4 - 1 + 1) + 1);

  return buttons[button]
}