
      const { createApp } = Vue
    
      createApp({
        data() {
          return {
            message: 'Ciao',
            name: '',
            surname: '',
            age: '',
            textColor: 'red',
            display: "block",
            image: '', /* L'Immagine verrà caricata dall'utente dopo aver inserito l'url nell'imput "immagine" --> IMMAGINE SAMPLE https://images.pexels.com/photos/10049264/pexels-photo-10049264.jpeg?auto=compress&cs=tinysrgb&w=1600 */
            dimension: "imageContainer"
          }
        }
      }).mount('#app')