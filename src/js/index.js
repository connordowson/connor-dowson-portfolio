import React from 'react'
import ReactDOM from 'react-dom'

import Home from './Home.js'

import projects from './../data/projects.js'


ReactDOM.render(
    
    <Home projects={projects} />,
    
    document.getElementById('app')
    
);

require("./mobile.js")
