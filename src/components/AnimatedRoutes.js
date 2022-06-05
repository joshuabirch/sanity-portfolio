import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Home from './Home'
import About from './About'
import SinglePost from './SinglePost'
import Post from './Post'
import Project from './Project'
import Contact from './Contact'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {

    const location = useLocation()
    
    return (
    <AnimatePresence>
        <Switch location={location} key={location.pathname}>
            <Route component={Home} path='/' exact />
            <Route component={About} path='/about' />
            <Route component={SinglePost} path='/post/:slug' />
            <Route component={Post} path='/post' />
            <Route component={Project} path='/project' />
            <Route component={Contact} path='/contact' />
        </Switch>
    </AnimatePresence>
    )
}

export default AnimatedRoutes