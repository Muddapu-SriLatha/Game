

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase authentication login
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Successful login
            const user = userCredential.user;
            console.log("Logged in as:", user.email);

            // Retrieve user details from Firestore if needed (like highest score, gameName)
            const db = firebase.firestore();
            db.collection("players").doc(user.uid).get()
                .then(doc => {
                    if (doc.exists) {
                        console.log("Player data:", doc.data());
                        // You can store these values in your localStorage or use them within the app
                    } else {
                        console.log("No player data found.");
                    }
                })
                .catch((error) => {
                    console.error("Error retrieving player data:", error);
                });

            // Redirect to game page
            window.location.href = "whack-the-mole.html";
        })
        .catch(error => {
            // Handle errors (e.g., incorrect credentials)
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});
