<script setup>
import NavBar from '@/components/NavBar.vue'
import ProjectBox from '@/components/ProjectBox.vue'
</script>

<template>
    <NavBar />
    <h1>projects will go here</h1>
    <div id="projects">
        <ProjectBox />
    </div>
</template>

<style scoped>
#projects {
    padding: 2rem;
}
</style>
