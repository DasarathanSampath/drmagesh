<template>
    <div>
        <div>
            <h3> {{$frontmatter.presentationName1}}</h3>
            <p> {{$frontmatter.presentationText1}} </p>
            <a :href="this.getRouterName('presentation1')"> Read → </a>
        </div>
        <div>
            <h3> {{$frontmatter.presentationName2}}</h3>
            <p> {{$frontmatter.presentationText2}} </p>
            <a :href="this.getRouterName('presentation2')"> Read → </a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getRouterName(fileName) {
            return this.$lang === "en-US" ? `/presentations/${fileName}` : `/ta/presentations/${fileName}` 
        },
    }
}
</script>