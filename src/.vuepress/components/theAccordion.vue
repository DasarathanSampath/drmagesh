<template>
    <div>
        <div class="tab">
            <input type="checkbox" id="chck1">
            <label class="tab-label" for="chck1">{{listObject1.name}}</label>
            <div 
                class="tab-content-first" 
                v-for="list in Object.values(listObject1.timings)"
            >
                <span>{{list}}</span>
            </div>
        </div>
        <div class="tab">
            <input type="checkbox" id="chck2">
            <label class="tab-label" for="chck2">{{listObject2.name}}</label>
            <div 
                class="tab-content" 
                v-for="list in Object.values(listObject2.timings)"
            >
                <span>{{list}}</span>
            </div>
        </div>
        <div class="tab">
            <input type="checkbox" id="chck3">
            <label class="tab-label" for="chck3">{{listObject3.name}}</label>
            <div 
                class="tab-content" 
                v-for="list in Object.values(listObject3.timings)"
            >
                <span>{{list}}</span>
            </div>
        </div>                  
    </div>
</template>

<script>
export default {
    props:{        
        allTimings: {
            type: Array,
            required: true
        }      
    },
    computed: {
        listObject1(){           
            return this.allTimings[0]
        },
        listObject2(){           
            return this.allTimings[1]
        },
        listObject3(){           
            return this.allTimings[2]
        }
    }
}
</script>

<style lang="stylus" scoped>

input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
// Layout
.row {
  display:flex;
  .col {
    flex:1;
    &:last-child {
      margin-left: 1em;
    }
  }
}
.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
    background: $midnight;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }
  &-content-first {
    max-height: 100vh;
    padding: 0.25em;
    text-align center    
    color: $midnight;
    background: white;
    transition: all .35s;
    font-weight bold
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: $midnight;
    text-align center
    background: white;
    transition: all .35s;
    font-weight bold
  }  
}

// :checked
input:checked {
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 0.25em;
  }
  ~ .tab-content-first {    
    max-height: 0;
    padding: 0 1em;
    color: $midnight;
    background: white;
    transition: all .35s;
  }
}

</style>