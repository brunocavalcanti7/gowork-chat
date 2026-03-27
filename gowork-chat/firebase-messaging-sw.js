importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBFhZ99vDcG7lRRofsXW9Zn2xQu2ls8FZw",
    authDomain: "gowork-chat.firebaseapp.com",
    projectId: "gowork-chat",
    storageBucket: "gowork-chat.firebasestorage.app",
    messagingSenderId: "540873412810",
    appId: "1:540873412810:web:e550434e8144194bc2a433"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const titulo = payload.notification?.title || '💼 Nova mensagem';
    const corpo = payload.notification?.body || 'Alguém te enviou uma mensagem';
    self.registration.showNotification(titulo, { 
        body: corpo, 
        icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%230f2b3d"/%3E%3Ctext x="50" y="67" font-size="50" text-anchor="middle" fill="white"%3E💼%3C/text%3E%3C/svg%3E',
        vibrate: [200, 100, 200],
        data: { url: 'https://seu-usuario.github.io/gowork-chat' }
    });
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const url = event.notification.data?.url || 'https://brunocavalcanti7/gowork-chat';
    event.waitUntil(clients.openWindow(url));
});