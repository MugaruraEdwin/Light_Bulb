// const { createApp } = Vue 

Vue.createApp({
    data(){
        return {
            // by default I set it to off
            bulb: 'off'
        }
    },
    methods:{ 
        // on(){
        //   if(this.bulb === 'off'){
        //     this.bulb = 'on'
        //   }
        // },
        // off(){
        //   if(this.bulb === 'on'){
        //     this.bulb = 'off'
        //   }
        // },
        toggleBulb(){
            this.bulb = this.bulb === 'off' ? 'on' : 'off';
        }
    }
}).mount('#app')