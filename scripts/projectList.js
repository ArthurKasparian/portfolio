// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 12 2023. Last modified 15/12/2023, 8:03 pm

// This file is used as a 'database' of sorts, first I tried a JSON file but that was a headache to use, so I decided on a simple JS file instead
const projects = [
    {
        title: "Myself",
        type: "Personal Growth",
        thumbnail: "",
        theme: {
            background: "#E1E5DB",
            primary: "#3D4F53"
        },
        descriptions: [
            "I'm a passionate software engineer, designer out of necessity, third year Computer Science major, and always on the lookout for new opportunities. In my free time I'm usually working on side projects, enjoying myself with a hobby I love, or just generally spending time with friends and family.",
            "You probably noticed how I've categorized myself as a project, because it is my belief that we are never a complete product as people, that there is always a ‘bug’ to be fixed or ‘feature’ to be added within us, be it through learning or constructive criticism."
        ],
        socials: [
            { title: "LinkedIn", url: "https://linkedin.com/in/arthurkasparian" },
            { title: "X/Twitter", url:"https://x.com/kasparianarthur" },
            { title: "Github", url: "https://github.com/arthurkasparian" },
            { title: "StackOverflow", url: "https://stackoverflow.com/users/19454251/arthur-kasparian" },
            { title: "Instagram", url: "https://instagram.com/arthur.kasparian" },
            { title: "Resume", url: "./res/resume.pdf" },
            { title: "Email", url: "mailto:contact@arthurkasparian.dev" },
        ]
    },
    {
        title: "Httpster Clone",
        type: "Clone Website",
        thumbnail: "./res/thumbnails/httpster-clone.png",
        theme: {
            background: "#ffffff",
            primary: "#131313"
        },
        descriptions: [
            "This is a simple clone of httpster.net, which is one of the many websites I go to for design inspiration. It's not a 1:1 copy but it's something!",
            "This project was started as a midterm project for one of my university courses, where the goal was to recreate a website of our choice using react, redux and other react-libraries."
        ],
        socials: [
            { title: "Website", url: "https://httpster-clone.arthurkasparian.dev" },
            { title: "Source Code", url: "https://github.com/arthurkasparian/httpster-clone" },
            { title: "Original", url: "https://httpster.net" },
        ]
    },
]

export const setProjectList = () => {
    projects.forEach(project => {
        const li = document.createElement('li')
        const title = project.title

        li.innerHTML = `
            <a href="#${title}"><span id="${title}">${title}</span></a>
        `

        document.querySelector('#projects ol').appendChild(li)
    })
}

// Sets the flipped state (visual) of the (un)selected projects in the project list
export const setListFlip = (project) => {
    const preFlipped = document.querySelector('.flipped')

    if (preFlipped !== null)
        document.querySelector('.flipped').classList.remove('flipped')

    document.getElementById(project.title).classList.add('flipped')
}

export const getSelectedProject = () => {
    return projects.find(p => {
        const hash = window.location.hash

        if (hash === '')
            return projects[0].title
        else
            return p.title === decodeURIComponent(hash).slice(1)
    })
}