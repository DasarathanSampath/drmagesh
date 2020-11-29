<template>
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
                <SlideShow />
              </div>
              <h2> About </h2>
              <p>
                In our constant effort to provide best possible user experience, we will have to capture some information, 
                which is non-personal in nature. E.g. Total visitors to website, total time spent on website, flow of user navigation, 
                etc. This information is essential to understanding user behavior on our website which will culminate in an attempt to 
                make the website more user friendly. We may share this info with any third party with sole intention of analysis. We may 
                place cookies which will further help us in tracking user activity. It is a common practice to use cookies. User can decide 
                about deleting these cookies. Tracking-non personalized data depends on the website objectives and may defer from site to site. 
                From time-to-time, we may announce changes to the above policy with the intent to improve user experience.
              </p> 
            </div>
            
            <div class="right-column">
                This information is related to user activities while surfing 
                information on internet and can be captured using some analytics codes, cookies etc.
            </div>
        </div>
</template>

<script>
// components
import NameCard from './nameCard'
import TheAccordion from './theAccordion'
import ForAppointment from './forAppointment'
// import imgSlider from './imgSlider'
// import imgCarousal from './imgCarousal'
// import imgVueCarousal from './imgVueCarousal'
import SlideShow from './slideShow'
// Json Date
import theTimings from '../jsons/timings.json'
// import VueCarousel from './vueCarousel.vue'

export default {    
    components:{
        NameCard, TheAccordion, ForAppointment, SlideShow
    },
    data () {
      return {
        theTimings: theTimings
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
  width 18%

@media screen and (max-width $MQNarrow) {
  .left-column, .right-column .middle-column{
    width 100%
  }
}

.slideShow
    padding 0.25rem 0 0 0
    border-radius 20px
    // border-radius 20%

</style>

