// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 12 2023. Last modified 15/12/2023, 7:20 pm

import projects from "./projectList.js";

export default function selectProject() {
    const project = projects.find(p => {
        const hash = window.location.hash

        if (hash === '')
            return projects[0].title
        else
            return p.title === decodeURIComponent(hash).slice(1)
    })

    document.getElementById('title').innerText = project === projects[0] ? "Arthur Kasparian" : project.title
    document.getElementById('type').innerText = project.type
    // document.querySelector('figure img').src = project.thumbnail TODO: Enable when added content

    setDescriptions(project)
    setSocials(project)
}

const setDescriptions = (project) => {
    // Resets previous info before filling
    document.getElementById('descriptions').innerHTML = ""

    project.descriptions.forEach(description => {
        const d = document.createElement('p')
        d.innerText = String(description) // description.toString()
        document.getElementById('descriptions').appendChild(d)
    })
}

const setSocials = (project) => {
    // Resets previous info before filling
    document.querySelector('#socials >ul').innerHTML = ""

    project.socials.forEach(social => {
        const li = document.createElement('li')
        const a = document.createElement('a')

        a.title = social.title
        a.href = social.url
        a.target = "_blank"
        a.innerText = social.title

        if (social.title === 'Resume')
            a.download = social.filename

        li.appendChild(a)

        document.querySelector('#socials >ul').appendChild(li)
    })
}