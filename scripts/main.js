// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 12 2023. Last modified 15/12/2023, 8:19 pm

import selectProject from "./projects.js";
import {setProjectList} from "./projectList.js";

// Sets the list of projects where user can select which to view
setProjectList()

// Set project needs a slight delay for hover effect to work properly
const setProject = () => {
    setTimeout(() => {
        selectProject()
    }, 0)
}

setProject() // Sets project on load

// Sets project on each selection
document.querySelectorAll('#projects ol li a')
    .forEach(a => a.addEventListener('click', setProject))