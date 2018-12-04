importScripts('https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js');

toolbox.options.debug = true;

toolbox.precache([
    'index.html',
    'views/criar.html',
    'views/home.html',
    'main.js',
    'https://code.jquery.com/jquery-3.3.1.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js',
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js'
]);

toolbox.router.get('*.html', toolbox.cacheFirst);
toolbox.router.get('*.css', toolbox.cacheFirst);
toolbox.router.get('*.js', toolbox.cacheFirst);
