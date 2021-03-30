<template>
    <div>
        <carousel :autoplay=true :autoplayHoverPause=true :perPage=1>
            <slide >
                <img src="/slider/one.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/two.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/three.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/four.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/five.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/six.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/seven.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/eight.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/nine.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/ten.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/eleven.jpg" alt>
            </slide>
            <slide >
                <img src="/slider/twelve.jpg" alt>
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

img 
    width 100%

</style>