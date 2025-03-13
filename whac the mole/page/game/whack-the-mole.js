const squares = document.querySelectorAll('.square');
const timeLeft = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 30;
let timerId = null;

// Function to randomly place the mole
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

// Detecting the hit on the mole
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            scoreDisplay.textContent = result;
            hitPosition = null;
        }
    });
});

// Move the mole at intervals
function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}

// Countdown Timer
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
    }
}


moveMole();
let countDownTimerId = setInterval(countDown, 1000);
// Get the current user and store their game scores
auth.onAuthStateChanged(user => {
    if (user) {
        // User is logged in, get the username
        const username = user.email.split('@')[0]; // Use email username as player name

        // Function to submit score
        function submitScore(score) {
            db.collection("highscores").add({
                username: username,
                score: score,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }).then(() => {
                console.log("Score added");
                loadLeaderboard();
            });
        }

        // Example: Submit score (You can change it based on actual game logic)
        submitScore(150);  // Submit a score of 150 as an example

        // Function to load leaderboard
        function loadLeaderboard() {
            db.collection("highscores")
                .orderBy("score", "desc")
                .limit(3)
                .get()
                .then(snapshot => {
                    const leaderboardList = document.getElementById('leaderboard-list');
                    leaderboardList.innerHTML = '';
                    snapshot.forEach(doc => {
                        const data = doc.data();
                        const li = document.createElement('li');
                        li.textContent = `${data.username} - ${data.score}`;
                        leaderboardList.appendChild(li);
                    });
                });
        }

        // Load leaderboard on page load
        loadLeaderboard();
    } else {
        // User is not logged in, redirect to login page
        window.location.href = "login.html";
    }
});
// Example submit score
function submitScore(score) {
    db.collection("highscores").add({
        username: username, // Use the email or any player name
        score: score,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        console.log("Score added successfully!");
        loadLeaderboard();
    }).catch(error => {
        console.error("Error adding score: ", error);
    });
}

