import { buildMoods } from "./moods.js"

const container = document.querySelector('#container')

const moodString = buildMoods()

container.innerHTML = moodString


//play audio on hover
document.addEventListener("DOMContentLoaded", () => {
    const machoManRandySavage = document.querySelectorAll(".mood")
    const audio = document.querySelector("#audio")

    machoManRandySavage.forEach((mood) => {
        mood.addEventListener("mouseenter", () => {
            audio.play()
        })
    })
})


