Modern Weather App
This is a simple website that tells you the weather. You type in the name of a city, and the app shows you the temperature, the wind speed, and if it is sunny or rainy.

🛠️ How it was Built
I used three main parts to make this project:

1. The Structure (HTML)
The HTML is like the skeleton of the app.

It has a search box for typing the city name.

It has a button with a magnifying glass 🔍 to start the search.

It has "placeholders" (empty spots) where the weather info will show up.

2. The Design (CSS)
The CSS is like the clothes of the app.

I used a blue gradient background to make it look like the sky.

I made a "Glass Card" effect. This means the white box looks like blurry, frosted glass.

I used white text so it is easy to read.

3. The Brains (JavaScript)
The JavaScript is the most important part because it makes the app work.

Getting Data: It connects to the internet to find the city's location (latitude and longitude).

Fetching Weather: Once it knows the location, it asks a "Weather API" for the temperature and wind speed.

Updating the Page: It replaces the old text with real info. For example, if the weather code is "0," it changes the icon to a Sun ☀️ and says "It is Sunny."

Error Handling: If you type a city name that does not exist, the app shows an alert message to tell you the spelling might be wrong.
