
      const { createApp } = Vue
    
      createApp({
        data() {
          return {
            message: 'Benvenuto',
            name: '',
            surname: '',
            display: "block",
            image: '', /* L'Immagine verrà caricata dall'utente dopo aver inserito l'url nell'input "immagine" --> IMMAGINE SAMPLE https://images.pexels.com/photos/3996081/pexels-photo-3996081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */
            dimension: "imageContainer"
          }
        }
      }).mount('#app')