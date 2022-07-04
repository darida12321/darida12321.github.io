
<script setup>
import GithubIcon from '../assets/github-icon.svg'
import RightIcon from '../assets/right-icon.svg'
</script>

<template>
    <div id="project-box-outer">
        <div id="project-box">
            <h2>PintOS</h2>
            <div id="seperation"></div>
            <div id="content">
                <div id="picture"></div>
                <p>Pintos is an operating system written in C.
                    Its main features are concurrency with
                    priority donation, a file system and
                    virtual memory.</p>
                <div id="tools">
                    <p>C</p>
                    <p>GDB</p>
                </div>
                <div id="buttons">
                    <div id="github-button" class="button">
                        <p>Github link</p>
                        <img :src="GithubIcon" alt="">
                    </div>
                    <div id="learn-button" class="button">
                        <p>Learn more</p>
                        <img :src="RightIcon" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#project-box-outer {
    --border-size: 0.2rem;
    --inner-margin: 0.9rem;
    --width: 20rem;
    --height: 25rem
}
#project-box-outer {
    width: var(--width);
    height: var(--height);
    background: var(--base-color-light);
    border-radius: 1rem;
    box-sizing: border-box;
    padding-top: var(--border-size);
}

#project-box{
    margin-left: var(--border-size);
    width: calc(100% - 2*var(--border-size));
    height: calc(100% - var(--border-size));
    background: var(--base-color);
    border-radius: 1rem;
}

h2 {
    margin: 0;
    text-align: center;
    font-size: calc(var(--height) * 0.08);
    line-height: calc(var(--height) * 0.08);
}

#seperation {
    width: 100%;
    height: var(--border-size);
    background: var(--base-color-light);
}

#content {
    height: calc(100% - 2*var(--inner-margin) - var(--border-size) - var(--height)*0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: var(--inner-margin);
}

#picture {
    margin: 0 auto;
    width: calc(95%);
    aspect-ratio: 16/9;
    background: black;
    border-radius: 1rem;
}

p {
    margin: 0;
    font-size: 1.1rem;
}

#tools {
    margin: 0;
    display: flex;
    gap: 1rem;
}

#tools > p {
    margin: 0;
    padding: 0.2rem 0.4rem;
    background: var(--secondary-color);
    border-radius: 0.4rem;
    cursor: default;
}

#buttons {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    height: 2rem;
    background: var(--primary-color);
    border-radius: 0.5rem;
    box-sizing: border-box;
    padding: 0 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.button > p {
    margin: 0;
}
.button > img {
    height: 80%;
}

.button:hover {
    background: red;
}

#github-button {
    width: 50%;
}

#learn-button {
    width: 45%;
}

</style>
