export const notify = () => {
  navigator.serviceWorker.register('sw.js');
    Notification.requestPermission(function(result) {
        if (result === 'granted') {
            
          navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('Exercise Time', {
              body: 'Look away from the screen',
              icon: './assets/cartoon/smileydev.png',
              vibrate: [200, 100, 200, 100, 200, 100, 200],
              tag: 'Exercise Reminder',
              requireInteraction: true,
              actions: [{
                action: 'coffee-action',
                title: 'Coffee'
              }],
            });
            console.log()
          });
        }
      });
      const audio = new Audio("https://soundbible.com/mp3/service-bell_daniel_simion.mp3");
      audio.play();
}