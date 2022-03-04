import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from '../components/Home'
import AboutComponent from '../components/About'
import ContactComponent from '../components/Contact'
import ProjectsComponent from '../components/Projects'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsComponent
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router