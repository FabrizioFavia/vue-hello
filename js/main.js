
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
            image: '', /* L'Immagine verrà caricata dall'utente dopo aver inserito l'url nell'imput "immagine" --> IMMAGINE SAMPLE https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */
            dimension: "imageContainer"
          }
        }
      }).mount('#app')