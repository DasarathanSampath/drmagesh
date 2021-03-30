<template>
  <main class="page">
    <slot name="top" />

      <!--<div v-if="thisLang" class="langText">
        <a :href="altPath"> 
            {{alternateLang}}
        </a>
      </div>-->
    
    <Content class="theme-default-content" style="margin-top: -60px;"/>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  computed:{
    thisLang(){
      return this.$page.frontmatter.altLang
    },
    alternateLang() {
      return this.$lang =='en-US' ? 'தமிழில்' : 'in English'
    },
    altPath() {
      if(this.$lang == 'en-US') {
        return `/ta${this.$page.path}`
      }
      else {
        return (this.$page.path).substring(3)
      }
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block 
.langText
  padding 1rem 0 0 1.5em 
  font-weight 600 
  font-size 1.1rem 
  color #191970
  text-shadow 1px 1px lighten(#191970, 50%)
.langText > a
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($accentColor, 8%)
</style>
