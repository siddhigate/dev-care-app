export const notify = () => {
    Notification.requestPermission(function(result) {
        if (result === 'granted') {
            
          navigator.serviceWorker.ready.then(function(registration) {
              const audio = new Audio("https://soundbible.com/mp3/service-bell_daniel_simion.mp3");
            audio.play();
            registration.showNotification('Vibration Sample', {
              body: 'Buzz! Buzz!',
              icon: '../images/touch/chrome-touch-icon-192x192.png',
              vibrate: [200, 100, 200, 100, 200, 100, 200],
              tag: 'vibration-sample'
            });
            
          });
        }
      });
}