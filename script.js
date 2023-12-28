const apiKey = "3563f871efaf8417858abe02f8ba94b2";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");

      const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
          var data = await response.json();

          // console.log(data)

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°c";
          document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

          if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/clouds.png";
          } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "assets/clear.png";
          } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/rain.png";
          } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/drizzle.png";
          } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/mist.png";
          }

          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
        }
      }

      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });

      checkWeather();


      
      //     const apiKey = "3563f871efaf8417858abe02f8ba94b2";
      // const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      // const searchBox = document.querySelector(".search input");
      // const searchBtn = document.querySelector(".search button");

      // async function checkWeather(city) {
      //     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      //     const data = await response.json();

      //     console.log(data);

      //     document.querySelector(".city").innerHTML = data.name;
      //     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      //     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      //     document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
      // }

      // searchBtn.addEventListener("click", () => {
      //     const city = searchBox.value.trim(); // Get the value and trim any extra spaces
      //     if (city !== "") {
      //         checkWeather(city);
      //     } else {
      //         alert("Please enter a city name.");
      //     }
      // });

      // // You may want to provide a default city or ask the user to enter one
      // // For example:
      // // checkWeather("London");