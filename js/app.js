const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        genova:"https://cdn2.wanderlust.co.uk/media/1006/genoa-port-panorama.jpg?anchor=center&mode=crop&width=1440&height=0&format=auto&quality=90&rnd=132441200190000000",
        india: "https://th.bing.com/th/id/R.10c80a9cad4aba8a406d2e9d098b6e6e?rik=%2bFi7GWG2wmRCUA&pid=ImgRaw&r=0",
        sriLanka:"https://i.natgeofe.com/n/d6bd5cdc-528f-4887-9cc3-3fb4e10d6651/sri-lanka-travel.jpg",
        textCenter: 'text-center',
        fontSize:'font-size',
        bgCustom: 'bg-custom'
      }
    },
    methods: {

        getRandom(){

            return Math.floor(Math.random() * 10) +1
        }

    }
  }).mount('#app')