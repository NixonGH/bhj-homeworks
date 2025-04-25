(() => {
    let playing = true,
        activeHole = 1,
        dead = 0,
        lost = 0,
        totalMoles = 10,
        totalMisses = 5;

    const stop = () => playing = false,
        getHole = index => document.getElementById(`hole${index}`),
        deactivateHole = index => getHole(index).className = 'hole',
        activateHole = index => getHole(index).className = 'hole hole_has-mole',
        updateStatus = () => {
            document.getElementById('dead').textContent = dead;
            document.getElementById('lost').textContent = lost;
        },
        checkGameOver = () => {
            if (dead >= totalMoles) {
                alert("Вы победили!");
                resetGame();
            } else if (lost >= totalMisses) {
                alert("Вы проиграли!");
                resetGame();
            }
        },
        resetGame = () => {
            dead = 0;
            lost = 0;
            updateStatus();
        };

    const holeClickHandler = (index) => {
        const hole = getHole(index);
        if (hole.classList.contains('hole_has-mole')) {
            dead++;
        } else {
            lost++;
        }
        updateStatus();
        checkGameOver();
    };

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', () => holeClickHandler(i));
    }

    const next = () => setTimeout(() => {
        if (!playing) return;
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
    }, 800);

    next();
})();