self.addEventListener('notificationclick', function(event) {

    if (!event.action) {
      // Was a normal notification click
      console.log(event.notification.data)
      self.clients.openWindow(event.notification.data+'exercise')
      console.log('Notification Click.');
      event.notification.close();
      return;
    }

    switch (event.action) {
      case 'exercise-action':
        console.log('Do exercise');
        self.clients.openWindow(event.notification.data+'exercise')
        break;
      case 'posture-action':
        console.log('Incorrect posture');
        break;
      default:
        console.log(`Unknown action clicked: '${event.action}'`);
        break;
    }
  });