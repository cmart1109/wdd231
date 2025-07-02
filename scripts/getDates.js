const today = new Date();
const year = document.querySelector("#year");
const copy = "©"
const lastModified = document.querySelector("#lastModified")


function getYear() {
    year.textContent = `${copy} - ${today.getFullYear()}  - ` 
    return year
}

function getLastModified() {
    lastModified.textContent =  ` Last Modification: ${document.lastModified}`
}

getYear();
getLastModified();
