// const apiKey =
//   "https://api.weatherapi.com/v1/current.json?key=073d234bbe3441ee9a631304250209&q=London&aqi=no"; // यहां OpenWeatherMap से ली हुई API key डालो
// const searchBtn = document.getElementById("searchBtn");
// const weatherDiv = document.getElementById("weather");

// searchBtn.addEventListener("click", () => {
//   const city = document.getElementById("city").value.trim();
//   if (city) {
//     getWeather(city);
//   } else {
//     alert("Please enter a city name!");
//   }
// });

// async function getWeather(city) {
//   const url = `https://api.weatherapi.com/v1/current.json?key=073d234bbe3441ee9a631304250209&q=London&aqi=no;`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     // अगर city गलत है
//     if (data.cod !== 200) {
//       alert("❌ City not found! Please check spelling.");
//       weatherDiv.style.display = "none";
//       return;
//     }

//     // Weather data दिखाओ
//     document.getElementById(
//       "city-name"
//     ).innerText = `📍 ${data.name}, ${data.sys.country}`;
//     document.getElementById("temp").innerHTML = `🌡 Temp: ${Math.round(
//       data.main.temp
//     )}°C`;
//     document.getElementById(
//       "desc"
//     ).innerText = `☁ Weather: ${data.weather[0].description}`;
//     document.getElementById(
//       "humidity"
//     ).innerText = `💧 Humidity: ${data.main.humidity}%`;
//     document.getElementById(
//       "wind"
//     ).innerText = `🌬 Wind: ${data.wind.speed} m/s`;

//     weatherDiv.style.display = "block";
//   } catch (error) {
//     console.error("Error fetching weather:", error);
//     alert("Something went wrong! Please try again.");
//   }
// }

// ✅ Tumhari WeatherAPI key
const apiKey = "073d234bbe3441ee9a631304250209";

// ✅ Search button click par kaam karega
document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("city").value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("⚠️ Please enter a city name!");
  }
});

// ✅ Weather data fetch karne ka function
async function getWeather(city) {
  try {
    // API endpoint
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
      city
    )}&aqi=no`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found or API error");
    }

    const data = await response.json();

    // ✅ Weather details ko show karna
    document.getElementById(
      "city-name"
    ).innerText = `${data.location.name}, ${data.location.country}`;
    document.getElementById(
      "temp"
    ).innerText = `🌡 Temperature: ${data.current.temp_c}°C`;
    document.getElementById(
      "desc"
    ).innerText = `☁️ Condition: ${data.current.condition.text}`;
    document.getElementById(
      "humidity"
    ).innerText = `💧 Humidity: ${data.current.humidity}%`;
    document.getElementById(
      "wind"
    ).innerText = `🌬 Wind: ${data.current.wind_kph} kph`;
  } catch (error) {
    // ✅ Error ke case me sab clear kar dena
    document.getElementById("city-name").innerText = "";
    document.getElementById("temp").innerText = "";
    document.getElementById("desc").innerText = "";
    document.getElementById("humidity").innerText = "";
    document.getElementById("wind").innerText = "";
    alert("❌ Error: " + error.message);
  }
}
