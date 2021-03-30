<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>
    
    <div style="margin-top: 5rem;">
      <div class="row">        
            <div class="left-column">
                <NameCard />
                <ForAppointment />
                <TheAccordion    
                  :allTimings="Object.values(theTimings)"
                />
            </div>
            <div class="middle-column">
              <div class="slideShow">
                <component v-if="dynamicComponent" :is="dynamicComponent"></component>
              </div>
              <SubNav />
              <Home v-if="$page.frontmatter.home" />
                  <Page
                    v-else
                    :sidebar-items="sidebarItems"
                  >
                    <template #top>
                      <slot name="page-top" />
                    </template>
                    <template #bottom>
                      <slot name="page-bottom" />
                    </template>
                  </Page>
            </div>
            
            <div class="right-column">
                <ContactForm />
                <div style="padding: 1rem 0.25rem 0.25rem 0.25rem; float: center;">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.139138472408!2d79.70174971482052!3d12.834284190946041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c30b907f94a7%3A0x9489e0ebdcf4c815!2sDr%20V.%20Magesh%20DM%20Cardio%20Om%20Shanthi%20Heart%20Care%20Centre!5e0!3m2!1sen!2sin!4v1606737468287!5m2!1sen!2sin" frameborder="5px" style="border:2px; width:100%; border: 2px solid #555" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    
    
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'

// import HomePage from '../../components/homePage.vue'
import SubNav from '@theme/components/subNav.vue'
import NameCard from '../../components/nameCard'
import TheAccordion from '../../components/theAccordion'
import ForAppointment from '../../components/forAppointment'
import ContactForm from '../../components/contactForm'

// Json Date
import theTimingsEn from '../../jsons/en-US/timings.json'
import theTimingsTa from '../../jsons/ta-IN/timings.json'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    SubNav,
    NameCard, TheAccordion, ForAppointment, ContactForm
  },

  data () {
    return {
      isSidebarOpen: false,
      dynamicComponent: null
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    },
    
     theTimings(){
        return this.$lang === "en-US" ? theTimingsEn : theTimingsTa
      }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    import('../../components/slideShow').then(module => {
      this.dynamicComponent = module.default
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

// @import '../theme/styles/tail-wind.styl'
.row:after
  content ""
  display table
  clear both

.left-column 
  float left
  width 30%

.middle-column 
  float left
  width 50%
  padding 0 1% 0 1%

.right-column 
  float left
  width 17%
  margin 0 1% 0 0
  
.slideShow
    padding 0.25rem 0 0 0
    border-radius 20px
    margin-left 5%
    margin-right 5%
    display block
  
@media screen and (max-width $MQNarrow) {
  .left-column, .right-column, .middle-column, .slideShow{
    width 100%
    padding 0
    margin 0
  }
}



</style>