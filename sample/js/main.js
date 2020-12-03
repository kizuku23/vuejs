// Vue.component('hello-component', {
//   template: '<p>Hello</p>'
// })

var helloComponent = {
  template: '<p>Hello</p>'
}

var app = new Vue({
  el: '#app',
  components: {
    'hello-component' :helloComponent
  }
})