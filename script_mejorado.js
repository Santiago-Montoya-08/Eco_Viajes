// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    // Verificar que los elementos existan antes de agregar eventos
    if (!menuToggle || !navLinks) {
        console.error('Elementos del menú no encontrados');
        return;
    }

    // Función para cerrar el menú
    function closeMenu() {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Función para abrir/cerrar el menú
    function toggleMenu() {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        
        if (icon) {
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }

    // Evento click para el botón del menú
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('nav');
        if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    // Cerrar menú al cambiar el tamaño de la ventana (si pasa de móvil a desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    // Scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Función para manejar el envío del formulario
    window.handleSubmit = function() {
        const name = document.getElementById('name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const interest = document.getElementById('interest')?.value || '';
        const message = document.getElementById('message')?.value || '';

        if (!name || !email) {
            alert('Por favor, completa al menos el nombre y el email.');
            return;
        }

        alert('¡Gracias por tu interés! Te contactaremos pronto.');
        
        // Limpiar formulario
        ['name', 'email', 'interest', 'message'].forEach(id => {
            const element = document.getElementById(id);
            if (element) element.value = '';
        });
    };

    // Navegación activa al hacer scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Prevenir el comportamiento por defecto del formulario
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSubmit();
        });
    }
});
