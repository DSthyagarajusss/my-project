function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for button click
document.getElementById('changeColorBtn').addEventListener('click', function() {
    changeBackgroundColor();
});