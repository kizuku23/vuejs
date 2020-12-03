Vue.component('button-counter', {
  data: function() {
    return {
      count: 0
    }
  },
  // template: '<button v-on:click="count++">{{ count }}</button>'
  template: '<div><span>count: </span><button v-on:click="count++">{{ count }}</button></div>'
})

var app = new Vue({
  el: '#app'
})