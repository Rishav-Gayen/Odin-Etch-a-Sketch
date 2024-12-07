const color = document.querySelector('#color');
const buttons = document.querySelectorAll('.control');
const range = document.querySelector('#range');
const rangeLabel = document.querySelector('.range_label');
const sketchBoard = document.querySelector('.panel__sketchboard');
const random = document.querySelector('.controls__random');
const eraser = document.querySelector('.controls__eraser');
const clear = document.querySelector('.controls__clear');

let dragging = false;
document.body.addEventListener('mousedown', () => dragging = true);
document.body.addEventListener('mouseup', () => dragging = false);

let rows = 16;
let cols = 16;

// Helper: Generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Helper: Clear the sketchboard and regenerate squares
function clearBoard() {
    sketchBoard.innerHTML = ''; // Clear the board
    generate_squares(); // Generate fresh squares
}

// Generate squares for the sketchboard
function generate_squares() {
    sketchBoard.innerHTML = ''; // Clear existing squares
    const width = sketchBoard.offsetWidth;
    const height = sketchBoard.offsetHeight;

    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.style.width = `${width / cols}px`;
        square.style.height = `${height / rows}px`;
        square.classList.add('square');
        
        // Event listeners for painting
        square.addEventListener('mousedown', () => square.style.backgroundColor = color.value);
        square.addEventListener('mouseover', () => {
            if (dragging) {
                square.style.backgroundColor = color.value;
            }
        });

        sketchBoard.appendChild(square);
    }
}

// Set up controls
random.addEventListener('click', () => {
    color.value = getRandomColor();
});

eraser.addEventListener('click', () => {
    color.value = '#ffffff'; // Set to white (assuming white background)
});

clear.addEventListener('click', clearBoard);

// Handle active state for buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((button) => button.classList.remove('active'));
        button.classList.add('active');
    });
});

// Handle range changes
range.addEventListener('change', () => {
    rows = range.value;
    cols = range.value;
    rangeLabel.textContent = `${rows}x${cols}`;
    clearBoard(); // Clear and regenerate the board
});

// Initial setup
generate_squares();
