<template>
    <div>
        <carousel :autoplay=true :autoplayHoverPause=true :perPage=1>
            <slide>
                <img src="/slider/one.jpg" alt>
            </slide>
            <slide>
                <img src="/slider/two.jpg" alt>
            </slide>
            <slide>
                <img src="/slider/three.jpg" alt>
            </slide>
            <slide>
                <img src="/slider/four.jpg" alt>
            </slide>
            <slide>
                <img src="/slider/five.jpg" alt>
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