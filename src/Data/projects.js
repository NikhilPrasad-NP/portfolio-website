import Currency from "../assets/Images/Currency.png";
import EMS from "../assets/Images/EMS.png"
import Weather from "../assets/Images/Whether.png"
import Typing from "../assets/Images/Typing.png"

export const projects = [
    {
        title: "Employee Management System",
        tech: ["JavaScript", "React", "Tailwind CSS", "LocalStorage"],
        description: "A frontend employee management system where admins can assign tasks and employees can accept, complete, or fail them. Built using React and LocalStorage.Task updates are stored using LocalStorage to persist application state.",
        image: EMS,
        github: "https://github.com/NikhilPrasad-NP/employee-management-system",
        live: ""
    },
    {
        title: "Weather App",
        tech: ["HTML", "CSS", "JavaScript", "Weather API"],
        description: "A weather application that fetches real-time weather data using a Weather API. Users can search for any city to view temperature, humidity, wind speed, and current weather conditions with a clean and user-friendly interface.",
        image: Weather,
        github: "https://github.com/NikhilPrasad-NP/weather-App.js",
        live: ""
    },
    {
        title: "Currency Converter",
        tech: ["React", "JavaScript", "Tailwind CSS", "Exchange Rate API"],
        description: "A currency converter that retrieves live exchange rates from an external API, allowing users to convert between multiple currencies instantly through intuitive interface.",
        image: Currency,
        github: "https://github.com/NikhilPrasad-NP/Currency-Converter",
        live: ""
    },
    {
        title: "DemonTyping",
        tech: ["HTML", "CSS", "JavaScript"],
        description: "A typing speed test application that measures Words Per Minute (WPM), typing accuracy, and mistakes in real time. Features character-by-character highlighting, a countdown timer, instant performance feedback, and a custom-designed interface.",
        image: Typing,
        github: "https://github.com/NikhilPrasad-NP/DemonTyping.js",
        live: ""
    }
]