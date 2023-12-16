// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 12 2023. Last modified 15/12/2023, 7:20 pm

import {getSelectedProject, setListFlip} from "./projectList.js";
import {updateCursorHovers} from "./cursor.js";
import setTheme, {toggleProjectSwitchAnimation} from "./theme.js";

let current

export const selectProject = () => {
    const project = getSelectedProject()

    if (project === current && current != null)
        return

    toggleProjectSwitchAnimation()
    setListFlip(project)

    setTimeout(() => {

        // Sets data
        document.querySelector('h2').innerText = project.title === 'Myself' ? "Arthur Kasparian" : project.title
        document.querySelector('h3').innerText = project.type
        setImage(project)
        setDescriptions(project.descriptions)
        setSocials(project.socials)

        document.querySelectorAll('a, img').forEach(element => {
            element.setAttribute('draggable', 'false')
        })

        updateCursorHovers()
        setTheme(project.theme)
        toggleProjectSwitchAnimation()
    }, 200)

    current = project
}

const setImage = (project) => {
    if (project.thumbnail === "") {
        document.querySelector('figure').style.display = 'none'
    } else {
        document.querySelector('figure').style.display = 'block'

        const image = document.querySelector('figure img')
        image.src = project.thumbnail
        image.alt = `Thumbnail of ${project.title}`
        document.querySelector('figure').style.boxShadow = `${project.theme.primary} 0 0 16px`
    }
}

const setDescriptions = (descriptions) => {
    const descriptionsHTML = document.getElementById('descriptions')

    // Resets previous info before filling
    descriptionsHTML.innerHTML = ""

    descriptions.forEach(description => {
        const d = document.createElement('p')
        d.innerText = description.toString()

        descriptionsHTML.appendChild(d)
    })
}

const setSocials = (socials) => {
    // Resets previous info before filling
    document.querySelector('article nav ul').innerHTML = ""

    socials.forEach(social => {
        const li = document.createElement('li')
        const a = document.createElement('a')

        a.innerText = social.title

        if (social.title === "Email") {
            a.onclick = () => navigator.clipboard.writeText(social.url);
            a.title = "Copy Address"
        } else {
            a.href = social.url
            a.target = "_blank"
        }

        li.appendChild(a)

        document.querySelector('article nav >ul').appendChild(li)
    })
}