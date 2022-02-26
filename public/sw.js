self.addEventListener('notificationclick', function(event) {

    console.log(event)

    if (!event.action) {
      // Was a normal notification click
      console.log('Notification Click.');
      return;
    }
  
    console.log("hereeeeeeeeeee")

    switch (event.action) {
      case 'coffee-action':
        console.log('User ❤️️\'s coffee.');
        break;
      case 'doughnut-action':
        console.log('User ❤️️\'s doughnuts.');
        break;
      case 'gramophone-action':
        console.log('User ❤️️\'s music.');
        break;
      case 'atom-action':
        console.log('User ❤️️\'s science.');
        break;
      default:
        console.log(`Unknown action clicked: '${event.action}'`);
        break;
    }
  });