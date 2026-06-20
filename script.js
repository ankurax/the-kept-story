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

document.addEventListener("DOMContentLoaded", () => {

    document
        .getElementById("openBtn")
        .addEventListener("click", startStory);

    document
        .getElementById("nextBtn")
        .addEventListener("click", nextScene);

    document
        .getElementById("prevBtn")
        .addEventListener("click", previousScene);

});

function startStory() {

    currentScene = 0;

    scenes.forEach(scene =>
        scene.classList.remove("active"));

    scenes[0].classList.add("active");

    document
        .getElementById("cover")
        .style.display = "none";

    document
        .getElementById("cinematic")
        .style.display = "flex";

    cinematicStarted = true;

    updateCounter();
}

document.addEventListener("keydown", function(e) {

    if (!cinematicStarted)
        return;

    if (e.key === "ArrowRight")
        nextScene();

    if (e.key === "ArrowLeft")
        previousScene();
});

function updateCounter() {

    document.getElementById("sceneCounter")
        .textContent =
            `${currentScene + 1} / ${scenes.length}`;
}

function nextScene() {

    if (currentScene >= scenes.length - 1)
        return;

    scenes[currentScene]
        .classList.remove("active");

    currentScene++;

    scenes[currentScene]
        .classList.add("active");

    updateCounter();
}

function previousScene() {

    if (currentScene <= 0)
        return;

    scenes[currentScene]
        .classList.remove("active");

    currentScene--;

    scenes[currentScene]
        .classList.add("active");

    updateCounter();
}

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", function(e) {

    touchStartX =
        e.changedTouches[0].screenX;
});

document.addEventListener("touchend", function(e) {

    touchEndX =
        e.changedTouches[0].screenX;

    handleSwipe();
});

function handleSwipe() {

    const swipeDistance =
        touchEndX - touchStartX;

    if (swipeDistance > 60) {

        previousScene();
    }

    if (swipeDistance < -60) {

        nextScene();
    }
}

document
    .getElementById("beginBtn")
    .addEventListener("click", beginStory);

function beginStory() {

    document
        .getElementById("cinematic")
        .style.display = "none";

    document
        .getElementById("chapter1")
        .style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document
    .getElementById("chapter2Btn")
    .addEventListener("click", openChapter2);

function openChapter2() {

    document
        .getElementById("chapter1")
        .style.display = "none";

    document
        .getElementById("chapter2")
        .style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document
    .getElementById("backToChapter1")
    .addEventListener("click", openChapter1);

function openChapter1() {

    document
        .getElementById("chapter2")
        .style.display = "none";

    document
        .getElementById("chapter1")
        .style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document
    .getElementById("chapter3Btn")
    .addEventListener("click", openChapter3);

function openChapter3() {

    document
        .getElementById("chapter2")
        .style.display = "none";

    document
        .getElementById("chapter3")
        .style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document
    .getElementById("backToChapter2")
    .addEventListener("click", openChapter2);

function openChapter2() {

    document
        .getElementById("chapter3")
        .style.display = "none";

    document
        .getElementById("chapter2")
        .style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


