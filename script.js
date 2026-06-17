function checkPassword() {

    const password =
        document.getElementById("password-input").value;

    const correctPassword =
        "112233";

    if (password === correctPassword) {

        document.getElementById(
            "password-screen"
        ).style.display = "none";

        document.getElementById(
            "main-content"
        ).style.display = "block";

    } else {

        document.getElementById(
            "error-message"
        ).textContent =
            "Incorrect password";
    }
}

const scenes =
    document.querySelectorAll(".scene");

let currentScene = 0;

document
    .getElementById("openBtn")
    .addEventListener("click", startStory);

function startStory() {

    document
        .getElementById("cover")
        .style.display = "none";

    document
        .getElementById("cinematic")
        .style.display = "flex";
}

document.addEventListener("click", function() {

    const cinematic =
        document.getElementById("cinematic");

    if(cinematic.style.display !== "flex")
        return;

    scenes[currentScene]
        .classList.remove("active");

    currentScene++;

    if(currentScene >= scenes.length)
        currentScene = scenes.length - 1;
        return;

    scenes[currentScene]
        .classList.add("active");
});