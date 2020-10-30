var VueIns = new Vue({
    el: '#app',
    data: {
        message : 'Yasuo hihi',
    },
    methods :{
        say: function(sua){
            return 'Hasagi' + sua
        }
    }
  })

  setTimeout(()=>{
    VueIns.message = 'Yasuo Pentakill'
  },3000)
  