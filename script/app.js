// example 1
var app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, мир Vue!'
  }
})

// example 2
// v-bind
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
  }
})

// example 3
// v-if
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

// example 4
// v-for
var app4 = new Vue({
  el: '#app-4',
  data: {
  	message: 'Дела на сегодня',
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue', color:'red'},
      { text: 'Создать что-нибудь классное', color:'Skyblue' }
    ]
  }
})

// example 5
// v-on
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Кабан упал и лапу набок'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

// example 6
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Введенный вами текст!'
  }
})