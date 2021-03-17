<template>    
  <div class="name-card">
    <img class="name-card-img" src="/card-img.png" alt="">
    <div class="name-card-caption">
        <p class="name-card-head">
          {{$frontmatter.title}}
        </p>      
      <div class="name-card-txt">
        {{$frontmatter.qualification}}       
      </div>
      <p class="name-card-head">
          {{$frontmatter.address}}
        </p>  
      <p style="line-height:0.6rem"> No.28, 29, Kamarajar Street, </p>
      <p style="line-height:0.6rem"> Kanchipuram - 631502 </p>
      <p style="line-height:0.6rem"> Near - NAC Jewellery </p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>

// @import '../theme/styles/tail-wind.styl'
.name-card
  background-color alpha(#EAEF8E, 0.4)
  border-radius 2%
  padding 1rem 1rem 1rem 1rem

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
  font-weight 600
  text-align justify

@media (max-width: $MQMobile)
  .name-card
    padding 0
    margin 0

</style>