// ASCII art collection for each day
const asciiArt = {
    1: `
    *    *
   ***  ***
  **********
    ||||
  `,
    2: `
     /\\
    /  \\
   /____\\
  /      \\
    `,
    3: `
    _____
   (     )
  (       )
   (_____) 
    `,
    4: `
    |\\  /|
    | \\/ |
    |    |
    |    |
    `,
    5: `
     .-.
    (   )
     '-'
    `,
    6: `
     /\\**/\\
    ( o_o  )
     (u u)_)
    `,
    7: `
      *
     ***
    *****
   *******
    `,
    8: `
    .-"-.
   /  +  \\
   \\ *** /
    '--'
    `,
    9: `
     _____
    /     \\
   /_______\\
    |  |  |
    `,
    10: `
     ,\\
    /  \\
   /____\\
    |  |
    `,
    11: `
     ^..^
    (o o)
     (-)
    `,
    12: `
    .---.
   /_____\\
    |   |
    |___|
    `,
    13: `
     /\\
    /**\\
   /****\\
  /******\\
    `,
    14: `
    .--.
   /    \\
   \\    /
    '--'
    `,
    15: `
     /\\
    /  \\
    |  |
    |__|
    `,
    16: `
    .*.*.
   *'*'*'*
    .*.*.
     '*'
    `,
    17: `
     ^
    / \\
   /   \\
  /_____\\
    `,
    18: `
    _||_
   /    \\
   \\    /
    \\__/
    `,
    19: `
     /\\
    /##\\
   /####\\
    ||||
    `,
    20: `
    .===.
    |   |
    |   |
    '==='
    `,
    21: `
     /\\
    /''\\
   /    \\
  /______\\
    `,
    22: `
    .----.
   /      \\
   \\      /
    '----'
    `,
    23: `
     /\\
    /  \\
   /----\\
    |__|
    `,
    24: `
    *****
   *   *
   *   *
   *****
    `,
    25: `
     /\\
    /||\\
   /||||\\
  /*****\\
    [|]
    `
};

// Function to generate a seeded random number
function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Function to shuffle array with seed
function shuffleArray(array, seed) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(seed + i) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Function to get opened doors from local storage
function getOpenedDoors() {
    const opened = localStorage.getItem('openedDoors');
    return opened ? JSON.parse(opened) : [];
}

// Function to save opened door to local storage
function saveOpenedDoor(day) {
    const opened = getOpenedDoors();
    if (!opened.includes(day)) {
        opened.push(day);
        localStorage.setItem('openedDoors', JSON.stringify(opened));
    }
}

// Initialize calendar
function initializeCalendar() {
    const calendar = document.getElementById('calendar');
    const positions = Array.from({length: 25}, (_, i) => i + 1);
    const seed = 2023; // Using 2023 as seed for consistent randomization
    const shuffledPositions = shuffleArray(positions, seed);
    const openedDoors = getOpenedDoors();

    shuffledPositions.forEach(day => {
        const door = document.createElement('div');
        door.className = 'door';
        if (openedDoors.includes(day)) {
            door.classList.add('opened');
        }
        door.dataset.day = day;

        const front = document.createElement('div');
        front.className = 'door-front';
        front.textContent = day;

        const back = document.createElement('div');
        back.className = 'door-back';
        back.textContent = '🎄';

        door.appendChild(front);
        door.appendChild(back);

        door.addEventListener('click', () => openDoor(door));
        calendar.appendChild(door);
    });

    updateDoors();
}

// Function to check if a door can be opened
function canOpenDoor(day) {
    const today = new Date();
    const isDecember = today.getMonth() === 11; // December is 11 (0-based)
    const currentDay = today.getDate();
    
    return isDecember && day <= currentDay;
}

// Function to open a door
function openDoor(door) {
    const day = parseInt(door.dataset.day);
    
    if (!canOpenDoor(day)) {
        alert("You can't open this door yet! Please wait until December " + day);
        return;
    }

    door.classList.add('opened');
    saveOpenedDoor(day);
    showModal(day);
}

// Function to show the modal with ASCII art
function showModal(day) {
    const modal = document.getElementById('modal');
    const asciiArtElement = document.getElementById('ascii-art');
    asciiArtElement.textContent = asciiArt[day] || 'Art coming soon!';
    modal.style.display = 'block';
}

// Function to update doors based on current date
function updateDoors() {
    const doors = document.querySelectorAll('.door');
    doors.forEach(door => {
        const day = parseInt(door.dataset.day);
        if (!canOpenDoor(day)) {
            door.classList.add('disabled');
        } else {
            door.classList.remove('disabled');
        }
    });
}

// Close modal when clicking the close button or outside the modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize the calendar when the page loads
document.addEventListener('DOMContentLoaded', initializeCalendar);
