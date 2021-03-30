<template>
    <figure class="appointment">
        <h3> {{nameCards.appointment}} </h3>
            <h3 style="color: brown;"> 
                <div class="row-std">
                    <div class="column-std"><i class="fa fa-phone fa-2x" aria-hidden="true" style="color: black; margin: 0; padding-top: 1rem;"> </i> </div>
                    <div class="column-std"> <span>86863 61234 <br/> 94452 16954 <br/> 044 29590807 </span> </div>
                </div>
            </h3>
    </figure>
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

.appointment
    background-color alpha(#EAEF8E, 0.4)
    border-radius 10px
    text-align center
    padding 1rem

@media screen and (max-width $MQNarrow) {
  .appointment{
    padding 0
    margin 0
    width 100%
  }
}
</style>