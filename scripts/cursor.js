// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 12 2023. Last modified 15/12/2023, 9:10 pm

const cursor = document.getElementById('cursor')
let offset = 15

document.addEventListener('mousemove', e =>
    cursor.style.transform = `translate(${e.clientX - offset}px, ${e.clientY - offset}px)`
)

const setHover = (element) => {
    const hoverClass = 'cursor-hover'

    element.addEventListener('mouseover', () => {
        cursor.classList.add(hoverClass);
        while (offset < 30)
            offset += .05
    })

    element.addEventListener('mouseout', () => {
        cursor.classList.remove(hoverClass);
        while (offset > 15)
            offset -= .05
    })
}

export const updateCursorHovers = () => {
    document
        .querySelectorAll('article a, article p, h2, h3')
        .forEach(hov => setHover(hov))
}

export const setCursorHovers = () => {
    setTimeout(
        () => document
            .querySelectorAll('#projects ol li, article a, article p, h2, h3, img')
            .forEach(hov => setHover(hov)),
        20
    )
}