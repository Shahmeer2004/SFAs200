
function switchToSignUp() {
    document.getElementById('sign-in-form').classList.add('hidden');
    document.getElementById('sign-up-form').classList.remove('hidden');
}


function switchToSignIn() {
    document.getElementById('sign-up-form').classList.add('hidden');
    document.getElementById('sign-in-form').classList.remove('hidden');
}


function handleSignIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    
    if (email === "test@example.com" && password === "password") {
        alert("Sign In Successful!");
    } else {
        alert("Invalid email or password.");
    }
}


function handleSignUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    alert(Welcome ${name}! Your account has been created.);
    switchToSignIn();
}