// JavaScript for Téngase Presente Vista - SPA Navigation

// Router configuration
const routes = {
    'home': 'index.html',
    'inteligencia-artificial': 'pages/inteligencia-artificial.html',
    'ciencia': 'pages/ciencia.html',
    'tecnologia': 'pages/tecnologia.html',
    'sociedad-futuro': 'pages/sociedad-futuro.html',
    'sobre-nosotros': 'pages/sobre-nosotros.html',
    'contacto': 'pages/contacto.html',
    'escribe-para-nosotros': 'pages/escribe-para-nosotros.html',
    'publicidad': 'pages/publicidad.html',
    'privacidad': 'pages/privacidad.html',
    'terminos': 'pages/terminos.html',
    'cookies': 'pages/cookies.html',
    'articulo-1': 'pages/articulo-1.html',
    'articulo-2': 'pages/articulo-2.html',
    'articulo-3': 'pages/articulo-3.html',
    'articulo-4': 'pages/articulo-4.html',
    'articulo-5': 'pages/articulo-5.html',
    'articulo-6': 'pages/articulo-6.html'
};

// Load page content
async function loadPage(page) {
    const appContent = document.getElementById('app-content');
    
    if (!page || page === 'home') {
        // Show home page content (already in index.html)
        return;
    }
    
    try {
        const response = await fetch(routes[page]);
        if (response.ok) {
            const content = await response.text();
            appContent.innerHTML = content;
            window.scrollTo(0, 0);
        } else {
            appContent.innerHTML = '<div class="max-w-4xl mx-auto py-20 px-4 text-center"><h1 class="text-4xl font-bold mb-4">Página no encontrada</h1><p class="text-gray-600 mb-8">Lo sentimos, la página que buscas no existe.</p><a href="#home" class="back-button">← Volver al inicio</a></div>';
        }
    } catch (error) {
        console.error('Error loading page:', error);
        appContent.innerHTML = '<div class="max-w-4xl mx-auto py-20 px-4 text-center"><h1 class="text-4xl font-bold mb-4">Error</h1><p class="text-gray-600 mb-8">Hubo un problema al cargar la página.</p><a href="#home" class="back-button">← Volver al inicio</a></div>';
    }
}

// Handle navigation
function navigate() {
    const hash = window.location.hash.slice(1) || 'home';
    loadPage(hash);
}

// Initialize
window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);

// Handle back button
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        const href = e.target.getAttribute('href');
        if (href === '#home') {
            // Reload the page to show the home content
            window.location.reload();
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if (target.startsWith('#') && !routes[target.slice(1)]) {
            e.preventDefault();
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
