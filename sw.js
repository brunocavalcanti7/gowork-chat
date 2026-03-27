self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: 'Nova mensagem', body: 'Alguém te enviou uma mensagem' };
    const options = {
        body: data.body,
        icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%230f2b3d"/%3E%3Ctext x="50" y="67" font-size="50" text-anchor="middle" fill="white"%3E💼%3C/text%3E%3C/svg%3E',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(self.registration.showNotification(data.title || '💼 GOWORK CHAT', options));
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});