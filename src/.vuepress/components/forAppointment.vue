<template>
    <figure class="appointment">
        <h3> {{$frontmatter.appointment}} </h3>
        <span >            
            <h3 style="color: brown; font-weight: bold;"> 
                <i class="fa fa-phone fa-2x" aria-hidden="true" style="color: black;"> </i> 
                86863 61234 <br/> 94452 16954 <br/> 044 2959 0807
            </h3>
        </span>
    </figure>
</template> 

<style lang="stylus" scoped>

.appointment
    background-color alpha(#EAEF8E, 0.4)
    border-radius 10px
    padding 1rem 1rem 1rem 1rem
    text-align center
</style>