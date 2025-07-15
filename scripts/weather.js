const weatherIcon = document.querySelector('.weather-icon');
const currentTemp = document.querySelector('.current-temp');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75051&lon=6.63672&units=metric&appid=514fcabd81719b73521e0fd6cff2f824";



async function apiFetch(){ 
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // displayResults(data)
      } else {
        throw Error(await response.text())
      }  
    } catch (error) {
        console.log(error);
    }
}

apiFetch();