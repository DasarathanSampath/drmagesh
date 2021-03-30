<template>
    <div>
        <div v-for="article in articles" :key="article.key">
              <h1> {{article.title}} </h1>
              <p> {{article.frontmatter['description']}} </p>
              <a :href="article.path"> {{toRead}} Read → </a>
        </div>
    </div>
</template>

<script>
    export default {
        
        computed: {
            articles () {
                const articles = this.$site.pages.filter(page => page.path.includes('/articles/'))
                var iP = articles.length
                while (iP--) {
                    if (articles[iP].frontmatter.isHome || articles[iP].frontmatter.articleLang !== this.$lang) { 
                        articles.splice(iP, 1)
                    } 
                }
                return articles
            },
            toRead(){
                return this.$themeConfig.locales[this.$localePath].read
            }
        }
    }
</script>