const today = new Date();
const copy = "©"
const lastModified = document.querySelector("#last-modified")

function getLastModified() {
    lastModified.textContent =  ` Last Modification: ${document.lastModified}`
}


getLastModified();
