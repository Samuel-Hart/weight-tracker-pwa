window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        // Register a service worker hosted at the root of the
        // site using a more restrictive scope.
        navigator.serviceWorker.register('./sw.js', { scope: './' }).then(function(registration) {
            console.log('Service worker registration succeeded:', registration);
        }, /*catch*/ function(error) {
            console.log('Service worker registration failed:', error);
        });
    } else {
        console.log('Service workers are not supported.');
    }
};