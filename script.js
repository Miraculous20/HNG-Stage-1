// script.js
document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.querySelector('[data-testid="colorBox"]');
    const colorOptions = document.querySelectorAll('[data-testid="colorOption"]');
    const gameStatus = document.querySelector('[data-testid="gameStatus"]');
    const scoreDisplay = document.querySelector('[data-testid="score"]');
    const newGameButton = document.querySelector('[data-testid="newGameButton"]');
    let score = 0;
    let targetColor;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function startNewGame() {
        const colors = [];
        for (let i = 0; i < 6; i++) {
            colors.push(getRandomColor());
        }
        targetColor = colors[Math.floor(Math.random() * colors.length)];
        colorBox.style.backgroundColor = targetColor;
        colorOptions.forEach((button, index) => {
            button.style.backgroundColor = colors[index];
            button.onclick = () => checkGuess(colors[index]);
        });
        gameStatus.textContent = '';
    }

    function checkGuess(color) {
        if (color === targetColor) {
            gameStatus.textContent = 'Correct!';
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            startNewGame();
        } else {
            gameStatus.textContent = 'Wrong! Try again.';
        }
    }

    newGameButton.onclick = startNewGame;

    startNewGame();
});