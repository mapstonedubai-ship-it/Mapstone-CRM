const CACHE_NAME = 'mapstone-crm-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/data/mockData.ts',
  '/services/geminiService.ts',
  '/components/Dashboard.tsx',
  '/components/Leads.tsx',
  '/components/LeadPool.tsx',
  '/components/Listings.tsx',
  '/components/Projects.tsx',
  '/components/Agents.tsx',
  '/components/icons/BuildingOfficeIcon.tsx',
  '/components/icons/ClipboardListIcon.tsx',
  '/components/icons/MapPinIcon.tsx',
  '/components/icons/SparklesIcon.tsx',
  '/components/icons/UsersIcon.tsx',
  '/assets/icon-192.svg',
  '/assets/icon-512.svg',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Install a service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
