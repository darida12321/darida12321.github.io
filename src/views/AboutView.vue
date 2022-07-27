<script setup>
import NavBar from '@/components/NavBar.vue'
import UserIcon from '../assets/icons/user.svg'
const skills = [
  { name: 'C++', percent: 94 },
  { name: 'Python', percent: 77 },
  { name: 'Haskell', percent: 10 },
  { name: 'Rust', percent: 50 }
// eslint-disable-next-line
];
const tools = [
  { name: 'Haskell', val: 3 },
  { name: 'C', val: 2 },
  { name: 'C++', val: 2 },
  { name: 'NodeJS', val: 1 },
  { name: 'Python', val: 1 },
  { name: 'HTML', val: 1 },
  { name: 'CSS', val: 1 },
  { name: 'React', val: 0 },
  { name: 'Vue', val: 0 },
  { name: 'Rust', val: 0 }
// eslint-disable-next-line
];
</script>

<template>
  <NavBar/>
  <div id="profile">
    <div id="picture">
      <img :src="UserIcon" alt="">
    </div>
    <div id="about">
      <h1>About me</h1>
      <hr/>
      <p>I am a computer science student at Imperial
        College London.<br/>
        <br/>
        My passion from programming started at a
        young age, and I have been doing game design,
        web development and general hobby programming
        ever since.</p>
    </div>
  </div>
  <div id="skills">
    <h1>Skills</h1>
    <hr/>
    <div id="skill-list">
      <div v-for="skill in skills" :key="skill" class="skill">
        <svg>
          <circle cx="5rem" cy="5rem" r="4.6rem"></circle>
          <circle cx="5rem" cy="5rem" r="4.6rem"

          :style="{
              'stroke-dashoffset': (462 - (462*skill.percent)/100)
            }"></circle>
        </svg>
        <p class="skill-percent">{{skill.percent}}%</p>
        <p class="skill-language">{{skill.name}}</p>
      </div>
    </div>
  </div>
  <div id="tools">
    <h1>Other tools I know</h1>
    <hr/>
    <div id="tool-list">
      <div v-for="(tool,i) in tools" :key="i" class="tool">
        <p class="tool-name">{{tool.name}}</p>
        <div class="boxes">
          <div v-for="j in [...Array(tool.val).keys()]" :key="j" class="tool-box filled"></div>
          <div v-for="j in [...Array(3-tool.val).keys()]" :key="j" class="tool-box empty"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#profile {
  width: 50rem;
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
}

#picture {
  width: 15rem;
  height: 18rem;
  background: var(--base-color);
  border-radius: 2rem;
}

#picture > img {
  margin: 2.5rem;
  width: 10rem;
  height: 15rem;
}

#about {
  width: 35rem;
  box-sizing: border-box;
  padding-left: 2rem;
}

h1 {
  margin: 0;
  font-weight: 200;
  font-size: 3rem;
  line-height: 3rem;
}

#about > hr {
  margin: 1rem 0;
  width: 90%;
  background: var(--text-color);
  border: 0.15rem solid var(--text-color);
  border-radius: 0.15rem;
}

#about > p {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 100;
}

#skills {
  width: 50rem;
  margin: 2rem auto;
}

#skill-list {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}

.skill {
  width: 10rem;
  height: 13rem;
}

svg {
  position: absolute;
  width: 10rem;
  height: 10rem;
}

circle {
  fill: none;
  stroke: #000;
  stroke-width: 0.8rem;
  stroke-dasharray: 462;
  stroke-dashoffset: 462;
}

circle:first-child {
  stroke-dashoffset: 0;
  stroke: var(--base-color-light);
}
circle:last-child {
  stroke: var(--secondary-color);
  stroke-linecap: round;
}

.skill-percent {
  margin: 3.5rem auto;
  width: 10rem;
  height: 3rem;
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
}

.skill-language {
  margin-top: 4rem;
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;
}

#skills > hr {
  margin: 0.5rem 0;
  width: 60%;
  background: var(--text-color);
  border: 0.15rem solid var(--text-color);
  border-radius: 0.15rem;
}

#tools {
  width: 50rem;
  margin: 2rem auto;
}

#tools > h1 {
  font-size: 2rem;
  line-height: 2rem;
}

#tools > hr {
  margin: 0.5rem 0;
  width: 45%;
  background: var(--text-color);
  border: 0.08rem solid var(--text-color);
  border-radius: 0.10rem;
}

#tool-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 5.5rem;
}

.tool {
  width: 13rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tool-name {
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.boxes {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}
.tool-box {
  width: 2.0rem;
  height: 2.0rem;
  border-radius: 0.5rem;
}
.filled {
  background: var(--secondary-color);
}
.empty {
  background: var(--base-color);
}
</style>
