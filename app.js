//openWeatherApi
let API_KEY = "d1c10de4aa956fbf53bfcf8c23d91d5f";

let search = document.getElementById("search");
search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let searchText = e.target.value;
    GetWeather(searchText);
  }
});
async function GetWeather(cityName) {
  let data = await window.fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&&units=metric&appid=${API_KEY}`
  );
  let response = await data.json();
  console.log(response);
  let { name } = response;
  let details = response.weather[0];
  let { main, description, icon } = details;
  document.getElementById("template").innerHTML = `<section id="weatherApp">
    <article>
    <header><h1>${response.main.temp}&deg c</h1></header>
      <main>
      <h2>${name}</h2>
      <p>${main}</p>
      <p>${description}</p>
      <p><img src=http://openweathermap.org/img/wn/${icon}@2x.png /></p>
     
      <p>Max Temp:${response.main.temp_max}&deg c</p>
      <pMin Temp:>${response.main.temp_min}&deg c</p>
      <p>humidity:${response.main.humidity}</p></main>
    </article>
  </section>
  `;
}