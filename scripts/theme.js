// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 12 2023. Last modified 15/12/2023, 9:36 pm

export default function setTheme(theme) {
    const background = theme.background
    const primary = theme.primary

    const cursor = document.getElementById('cursor')

    // Background and cursor
    document.querySelector('main').style.backgroundColor = background
    cursor.style.backgroundColor = `rgba(${primary}, 1)`
    cursor.style.boxShadow = `${primary} 0 0 8px`

    // Project list borders & counter color
    document.querySelectorAll('#projects ol li').forEach(element => {
        element.style.borderBottom = `1px solid ${primary}`
        element.style.setProperty('--pseudo-color', `${primary}`)
    })

    // Text elements
    document
        .querySelectorAll('article h2, article h3, #descriptions p, a, a:hover, a:active, a:visited, span')
        .forEach(element => element.style.color = primary)
}

export const toggleProjectSwitchAnimation = () => {
    document.querySelectorAll('article nav, h2, h3, #descriptions, img').forEach(element => {
        element.classList.toggle('hide')
    })
}