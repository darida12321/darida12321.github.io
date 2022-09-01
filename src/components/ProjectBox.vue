
<script setup>
import GithubIcon from '../assets/icons/github.svg'
import ItchioIcon from '../assets/icons/itch-io.svg'
import RightIcon from '../assets/icons/right.svg'

import { defineProps } from 'vue'
const props = defineProps({
  width: String,
  height: String,
  data: {
    title: String,
    desc: String,
    tools: [String]
  }
})

</script>

<template>
    <div id="project-box-outer">
        <div id="project-box">
            <h2 id="title">{{props.data.title}}</h2>
            <div id="seperation"></div>
            <div id="content">
                <img
                    id="picture"
                    :src="props.data.image"
                    alt=""
                >
                <p id="desc">{{props.data.desc}}</p>
                <div id="tools">
                    <p v-for="(t, i) in props.data.tools" :key="i">
                        {{t}}
                    </p>
                </div>
                <div id="buttons">
                    <div id="code-button" class="button">
                        <img v-if="props.data.srcIcon === 'github'" :src="GithubIcon" alt="">
                        <img v-else :src="ItchioIcon" alt="">
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
    box-sizing: border-box;
    padding-top: 0.3rem;
}

#title {
    margin: 0 0 0.3rem 0;
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
    aspect-ratio: 16 / 9;
    background: black;
    border-radius: 1rem;
}

#desc {
    margin: 0;
    font-size: calc(var(--height) * 0.04);
    line-height: calc(var(--height) * 0.04);
}

#tools {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--height) * 0.02);
}

#tools > p {
    margin: 0;
    padding: calc(var(--height) * 0.006) calc(var(--height) * 0.01);
    background: var(--secondary-color);
    border-radius: calc(var(--height) * 0.015);
    cursor: default;
    font-size: calc(var(--height) * 0.035);
    line-height: calc(var(--height) * 0.035);
}

#buttons {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: calc(var(--width)*0.06);
}

.button {
    height: calc(var(--height)*0.1);
    background: var(--primary-color);
    border-radius: 0.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.button:hover {
    background: var(--primary-color-dark);
}

#code-button {
    padding: 0 calc(var(--height)*0.01);
    aspect-ratio: 1 / 1;
}
#code-button > img {
    width: 100%;
}

#learn-button {
    padding: 0 calc(var(--height)*0.02);
    width: 100%;
}
#learn-button > p {
    margin: 0;
    font-size: calc(var(--height) * 0.07);
    line-height: calc(var(--height) * 0.07);
}
#learn-button > img {
    height: 80%;
}

</style>
