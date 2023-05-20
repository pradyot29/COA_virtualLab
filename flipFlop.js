// Get a reference to the canvas element
const flipFlopCanvas = document.getElementById('flipFlopCanvas');

// Define the canvas drawing context and settings
const ctx = flipFlopCanvas.getContext('2d');
ctx.lineWidth = 2;
ctx.strokeStyle = '#007bff';

// Define the initial state of the flip-flop
let master = 0;
let slave = 0;

// Define the variables for the waveform graph
const xScale = 2; // pixels per unit of time
const yScale = 50; // pixels per unit of flip-flop state
const yOffset = flipFlopCanvas.height / 2; // vertical center of the canvas
let time = 0;
let waveform = [];

// Set up the clock signal timer
let timer = null;

function startClock() {
  if (timer) {
    clearInterval(timer);
  }
  
  // Get the clock frequency from the input element
  const clockFrequency = Number(clockFrequencyInput.value);
  
  // Set up the clock signal timer
  timer = setInterval(() => {
    // Toggle the clock signal
    const clock = Math.round(Math.random()); // generates random 0 or 1
    
    // Update the flip-flop state based on the clock signal
    if (clock === 1) {
      slave = master;
      master = 1 - master;
    }
    
    // Add the current flip-flop state to the waveform array
    waveform.push(master);
    
    // Draw the waveform graph
    drawWaveform();
    
    // Increment the time variable
    time++;
  }, 1000 / clockFrequency); // convert frequency to milliseconds
}

// Add an event listener to the clock frequency input element
clockFrequencyInput.addEventListener('input', startClock);

// Start the clock initially
startClock();

function drawWaveform() {
  // Clear the canvas
  ctx.clearRect(0, 0, flipFlopCanvas.width, flipFlopCanvas.height);
  
  // Draw the horizontal axis
  ctx.beginPath();
  ctx.moveTo(0, yOffset);
  ctx.lineTo(flipFlopCanvas.width, yOffset);
  ctx.stroke();
  
  // Draw the waveform
  ctx.beginPath();
  ctx.moveTo(0, yOffset - waveform[0] * yScale);
  for (let i = 1; i < waveform.length; i++) {
    ctx.lineTo(i * xScale, yOffset - waveform[i] * yScale);
  }
  ctx.stroke();
}
