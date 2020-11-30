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
              <MainContent />
               
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
import SlideShow from './slideShow'
import MainContent from './mainContent'

// Json Date
import theTimings from '../jsons/timings.json'

export default {    
    components:{
        NameCard, TheAccordion, ForAppointment, SlideShow, MainContent
    },
    data () {
      return {
        theTimings: theTimings[this.languageText]
      }
    },
    computed:{
      languageText(){
        return this.$lang
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

