const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=14.06530&lon=-87.19025&units=metric&appid=514fcabd81719b73521e0fd6cff2f824";




async function apiFetch(){ 
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data)
      } else {
        throw Error(await response.text())
      }  
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) { 
    currentTemp.innerHTML = `${data.main.temp} &deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;    
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc); 
    captionDesc.textContent = `${desc}`;
}

apiFetch();