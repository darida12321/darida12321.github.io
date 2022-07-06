<script setup>
import NavBar from '@/components/NavBar.vue'
import ProjectBox from '@/components/ProjectBox.vue'
import projectsData from '../assets/projects.json'

// eslint-disable-next-line
var projects = projectsData.projects;

</script>

<template>
    <NavBar />
    <h1>Some projects I worked on</h1>
    <hr id="underline"/>
    <div id="projects">
        <div id="top">
            <ProjectBox width="23rem" height="31rem" :data="projects[0]"/>
            <ProjectBox width="23rem" height="31rem" :data="projects[1]"/>
        </div>
        <div id="rest">
            <ProjectBox
                v-for="(d, i) in projects.slice(2)"
                :key="i"
                width="15rem"
                height="20rem"
                :data="d"
            />
        </div>
    </div>
</template>

<style scoped>
h1 {
    margin: 1rem auto 0 auto;
    text-align: center;
    font-size: 3rem;
    line-height: 3rem;
}

#underline {
    margin: 0.5rem auto 2rem auto;
    width: 41rem;
    background: var(--text-color);
    border: 0.15rem solid var(--text-color);
    border-radius: 0.15rem;
}

#projects {
    margin-bottom: 3rem;
}

#top {
    width: 50rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

#rest {
    width: 50rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

#rest > * {
    margin-top: 3rem;
}
</style>
