<script setup>
import NavBar from '@/components/NavBar.vue'
import ProjectBox from '@/components/ProjectBox.vue'

const datas = [
  {
    title: 'Shortcutter',
    desc: 'Shortcutter is a website designed to teach people how to use shortcuts.',
    tech: ['HTML', 'CSS']
  },
  {
    title: 'Shortcutter1',
    desc: 'Shortcutter is a website designed to teach people how to use shortcuts.',
    tech: ['HTML', 'CSS']
  },
  {
    title: 'Shortcutter2',
    desc: 'Shortcutter is a website designed to teach people how to use shortcuts.',
    tech: ['HTML', 'CSS']
  },
  {
    title: 'Shortcutter3',
    desc: 'Shortcutter is a website designed to teach people how to use shortcuts.',
    tech: ['HTML', 'CSS']
  },
  {
    title: 'Shortcutter4',
    desc: 'Shortcutter is a website designed to teach people how to use shortcuts.',
    tech: ['HTML', 'CSS']
  },
  {
    title: 'Shortcutter5',
    desc: 'Shortcutter is a website designed to teach people how to use shortcuts.',
    tech: ['HTML', 'CSS']
  }
  // eslint-disable-next-line
];
</script>

<template>
    <NavBar />
    <h1>projects will go here</h1>
    <div id="projects">
        <div id="top">
            <ProjectBox width="23rem" height="31rem" :data="datas[0]"/>
            <ProjectBox width="23rem" height="31rem" :data="datas[1]"/>
        </div>
        <div id="rest">
            <ProjectBox
                v-for="(d, i) in datas.slice(2)"
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
