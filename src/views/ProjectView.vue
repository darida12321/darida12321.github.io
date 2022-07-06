<script setup>
import NavBar from '@/components/NavBar.vue'
import ProjectBox from '@/components/ProjectBox.vue'
import { projects } from '../assets/projects.json'

</script>

<template>
    <NavBar />
    <h1>projects will go here</h1>
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
