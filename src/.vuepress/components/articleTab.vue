<template>
    <div>
        <div>
            <h3> {{$frontmatter.articleName1}}</h3>
            <p> {{$frontmatter.articleText1}} </p>
            <a :href="this.getRouterName('article1')"> Read → </a>
        </div>
        <div>
            <h3> {{$frontmatter.articleName2}}</h3>
            <p> {{$frontmatter.articleText2}} </p>
            <a :href="this.getRouterName('article1')"> Read → </a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getRouterName(fileName) {
            return this.$lang === "en-US" ? `/articles/${fileName}` : `/ta/articles/${fileName}` 
        },
    }
}
</script>