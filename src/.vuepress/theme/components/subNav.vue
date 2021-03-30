<template>
    <nav class="nav-links">
        <button 
            class="nav-item" 
            style="margin: 0.1rem;"
            v-for="subLink in subLinks" 
            :key="subLink.key"
        >
            <NavLink
                :item="subLink"
                class="tab"
            />
        </button>
    </nav>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
export default {
    components: {
        NavLink
    },
    computed: {
        subLinks(){
            return this.$themeConfig.locales[this.$localePath].subNav
        }
    }
}
</script>

<style lang="stylus" scoped>

      .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
      }
      .tab-button:hover {
        background: #e0e0e0;
      }
      .tab-button.active {
        background: #e0e0e0;
      }
      .tab {
        padding: 10px;
      }

</style>