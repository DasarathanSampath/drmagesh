<template>    
  <div class="name-card">
    <img class="name-card-img" src="/card-img.png" alt="">
    <div class="name-card-caption">
        <p class="name-card-head">
          {{nameCards.cardTitle}}
        </p>
      <span>
      <div class="name-card-txt">
        {{nameCards.qualification1}}       
      </div>
      <div class="name-card-txt">
        {{nameCards.qualification2}}
      </div>
      <div class="name-card-txt">
         {{nameCards.qualification3}} 
      </div>
      </span>
      <p class="name-card-head">
          {{nameCards.address1}}
        </p>  
      <p style="line-height:0.6rem"> {{nameCards.address2}} </p>
      <p style="line-height:0.6rem"> {{nameCards.address3}} </p>
      <p style="line-height:0.6rem"> {{nameCards.address4}} </p>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        nameCards(){
            return this.$themeConfig.locales[this.$localePath].nameCards
        }
    }
}
</script>

<style lang="stylus" scoped>

// @import '../theme/styles/tail-wind.styl'
.name-card
  background-color alpha(#EAEF8E, 0.4)
  border-radius 2%
  padding 1rem 1rem 1rem 1rem
  margin 0rem 1rem 1rem 1rem

.name-card-img
  border-radius 50%
  width 74%
  padding 2% 13% 0 13%

.name-card-caption
  padding 0.2rem 0.2rem 0.2rem 0.2rem
  text-align center  

.name-card-head
  font-size 1.2rem
  font-weight 600

.name-card-txt
  color gray
  font-weight 500
  text-align justify
  width auto

@media (max-width: $MQMobile)
  .name-card
    padding 0
    margin 0

</style>