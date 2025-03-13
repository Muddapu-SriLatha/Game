// signup.js

/*document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase authentication sign-up
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Account created successfully
            const user = userCredential.user;
            console.log("Account created for:", user.email);

            // Store player details in Firestore (for storing highest score, etc.)
            const db = firebase.firestore();
            db.collection("players").doc(user.uid).set({
                email: user.email,
                highestScore: 0,  // You can initialize the score to 0 or whatever default value
                gameName: "Player_" + user.uid  // Example game name
            }).then(() => {
                console.log("Player data stored in Firestore.");
                window.location.href = "whack-the-mole.html"; // Redirect to game page
            }).catch((error) => {
                console.error("Error adding player data to Firestore:", error);
            });
        })
        .catch(error => {
            // Handle errors (e.g., weak password, invalid email)
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});*/
// signup.js

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase authentication sign-up
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Account created successfully
            const user = userCredential.user;
            console.log("Account created for:", user.email);

            // Store player details in Firestore (for storing highest score, etc.)
            const db = firebase.firestore();
            db.collection("players").doc(user.uid).set({
                email: user.email,
                highestScore: 0,  // You can initialize the score to 0 or whatever default value
                gameName: "Player_" + user.uid  // Example game name
            }).then(() => {
                console.log("Player data stored in Firestore.");
                window.location.href = "whack-the-mole.html"; // Redirect to game page
            }).catch((error) => {
                console.error("Error adding player data to Firestore:", error);
            });
        })
        .catch(error => {
            // Handle errors (e.g., weak password, invalid email)
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});

