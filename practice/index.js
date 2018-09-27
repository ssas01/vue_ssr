import Vue from 'vue'

new Vue({
    n: 'rootInstance',
    el: '#root',
    template: `
        <div>
            <p>{{ name }}</p>
            <p>{{ $options.n }}</p>           
            <p>{{ sayHi() }}</p>
        </div>
    `,
    data: {
        name: 'yf'
    },
    methods: {
        sayHi: function() {
            return 'hi'
        }
    }
})