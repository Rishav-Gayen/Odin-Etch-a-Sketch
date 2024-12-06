const color = document.querySelector('#color');
const buttons = document.querySelectorAll('.control');
const range = document.querySelector('#range');
const rangeLabel = document.querySelector('.range_label');
const sketchBoard = document.querySelector('.panel__sketchboard');
const squares = document.querySelectorAll('.square')


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((button) => button.classList.remove('active'));
        button.classList.add('active');
    })
})


range.addEventListener('change', () => {
    rangeLabel.textContent = `${range.value}x${range.value}`;
})



