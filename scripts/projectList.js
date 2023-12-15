// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 12 2023. Last modified 15/12/2023, 8:03 pm

// This file is used as a 'database' of sorts, first I tried a JSON file but that was a headache to use, so I decided on a simple JS file instead
export const projects = [
    {
        title: "Myself",
        type: "Personal Website",
        thumbnail: "../res/thumbnails/myself.png",
        descriptions: [
            "The city buzzed with life, streets teeming with people and energy. Lights sparkled, creating a vibrant urban tapestry. In the tranquil park, leaves rustled gently, whispering tales of nature's timeless beauty. A serene oasis amidst the urban hustle.",
            "As you probably noticed, I’ve categorized myself as a ‘project’, because I believe we are never done learning and improving, there is always a ‘bug’ to be fixed or a ‘feature’ to be added/improved in ourselves, be it through learning to by listening to criticism."
        ],
        socials: [
            { title: "LinkedIn", url: "https://linkedin.com/arthurkasparian" },
            { title: "X/Twitter", url:"https://x.com/kasparianarthur" },
            { title: "Github", url: "https://github.com/arthurkasparian" },
            { title: "StackOverflow", url: "https://stackoverflow.com/users/19454251/arthur-kasparian" },
            { title: "Instagram", url: "https://instagram.com/arthur.kasparian" },
            { title: "Resume", url: "./res/resume.pdf", filename: 'Arthur Kasparian - Resume.pdf' },
        ]
    },
    {
        title: "Httpster Clone",
        type: "Clone Website",
        thumbnail: "../res/thumbnails/httpster-clone.png",
        descriptions: [
            "This is a simplified clone of Httpster, which is a website I use often for web design inspiration. It's not perfect, but it's something!",
            "The goal of this project is to showcase my ability to work with React and various other technologies, check the sidebar for more information."
        ],
        socials: [
            { title: "Website", url: "https://httpster-clone.arthurkasparian.dev" },
            { title: "Source Code", url: "https://github.com/arthurkasparian/httpster-clone" },
            { title: "Original Website", url: "https://httpster.net" },
        ]
    },
    { title: "Temporary Project" },
]

export default projects

export function setProjectList() {
    projects.forEach(project => {
        const li = document.createElement('li')
        const title = project.title

        li.innerHTML = `
            <a href="#${title}" id="${title}">${title}</a>
        `

        document.querySelector('#projects ol').appendChild(li)
    })
}