import { getData } from "./database.js"

export const buildMoods = () => {
    let moodHTML = ''
    const moods = getData()

    for (const mood of moods) {
        moodHTML += `
        <article class="mood">
            <h3>${mood.name}</h3>
            <img src="${mood.imageUrl}" alt="${mood.text}">
            <p class="advice">Macho Advice: </p>
            <p class="quote">${mood.quotes[0]}</p>
            <p class="quote">${mood.quotes[1]}</p>
        </article>
        `
    }
    return moodHTML
}