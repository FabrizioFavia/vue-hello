
      const { createApp } = Vue
    
      createApp({
        data() {
          return {
            message: 'Hello',
            name: 'Fabrizio',
            age: null,
            mail: 'personal.favia.@gmail.com',
            textColor: "red"
          }
        }
      }).mount('#app')