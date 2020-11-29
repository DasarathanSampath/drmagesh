<template>
    <div>
        <carousel :autoplay=true :autoplayHoverPause=true :perPage=1>
            <slide>
                <img src="/slider/1.jpg" alt>
            </slide>
            <slide>
                <img src="/slider/2.jpg" alt>
            </slide>
            <slide>
                <img src="/slider/3.jpg" alt>
            </slide>
            <slide>
                <img src="/slider/4.jpg" alt>
            </slide>
        </carousel>
    </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel'

export default {
    components: {
        Carousel, Slide
    }    
}
</script>

<style lang="stylus" scoped>

</style>