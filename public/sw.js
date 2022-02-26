self.addEventListener('notificationclick', function(event) {

    console.log(event)

    if (!event.action) {
      // Was a normal notification click
      console.log('Notification Click.');
      return;
    }
  
    console.log("hereeeeeeeeeee")

    event.notification.close();

    switch (event.action) {
      case 'exercise-action':
        console.log('Do exercise');
        self.clients.openWindow(event.notification.data+'/exercise')
        break;
      case 'posture-action':
        console.log('Incorrect posture');
        break;
      default:
        console.log(`Unknown action clicked: '${event.action}'`);
        break;
    }
  });