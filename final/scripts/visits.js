const visitsDisplay = document.querySelector(".visits");
const lastVisit = Number(localStorage.getItem("lastVisit")) || 0;
const now = Date.now();

if (!lastVisit) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const differenceInMs = now - lastVisit;
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

    if (differenceInDays < 1) {
        visitsDisplay.textContent = "Back so soon! Awesome!";
    } else {
        visitsDisplay.textContent = `You last visited ${differenceInDays} day${differenceInDays === 1 ? "" : "s"} ago.`;
    }
}

localStorage.setItem("lastVisit", now);