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

let cinematicStarted = false;

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

    cinematicStarted = true;
}

document.addEventListener("click", function(event) {

    if (!cinematicStarted)
        return;

    if (event.target.id === "openBtn")
        return;

    const cinematic =
        document.getElementById("cinematic");

    if (cinematic.style.display !== "flex")
        return;

    scenes[currentScene]
        .classList.remove("active");

    currentScene++;

    if (currentScene >= scenes.length) {

        currentScene = scenes.length - 1;

        scenes[currentScene]
            .classList.add("active");

        return;
    }

    scenes[currentScene]
        .classList.add("active");
});