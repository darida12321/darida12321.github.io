
<script setup>
import GithubIcon from '../assets/github-icon.svg'
import RightIcon from '../assets/right-icon.svg'

import { defineProps } from 'vue'
const props = defineProps({
  width: String,
  height: String,
  data: {
    title: String,
    desc: String,
    tech: [String]
  }
  // eslint-disable-next-line
});

</script>

<template>
    <div id="project-box-outer">
        <div id="project-box">
            <h2>{{props.data.title}}</h2>
            <div id="seperation"></div>
            <div id="content">
                <div id="picture"></div>
                <p>{{props.data.desc}}</p>
                <div id="tools">
                    <p v-for="(t, i) in props.data.tech" :key="i">
                        {{t}}
                    </p>
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
    --width: v-bind('props.width');
    --height: v-bind('props.height');
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
    font-size: calc(var(--height) * 0.05);
    line-height: calc(var(--height) * 0.05);
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
    font-size: calc(var(--height) * 0.05);
    line-height: calc(var(--height) * 0.05);
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
    font-size: calc(var(--height) * 0.045);
    line-height: calc(var(--height) * 0.045);
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
