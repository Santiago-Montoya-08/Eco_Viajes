// Menú hamburguesa mejorado
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const navLinks = document.getElementById('nav-links');
            const menuToggle = document.getElementById('menu-toggle');
            const icon = menuToggle.querySelector('i');
            
            navLinks.classList.toggle('active');
            
            // Cambiar ícono entre hamburguesa y X
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Cerrar menú al hacer clic en un enlace (móvil)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                const navLinks = document.getElementById('nav-links');
                const menuToggle = document.getElementById('menu-toggle');
                const icon = menuToggle.querySelector('i');
                
                navLinks.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            const nav = document.querySelector('nav');
            const navLinks = document.getElementById('nav-links');
            const menuToggle = document.getElementById('menu-toggle');
            const icon = menuToggle.querySelector('i');
            
            if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Scroll suave para los enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Compensar altura del nav fijo
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Función para manejar el envío del formulario
        function handleSubmit() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;

            if (!name || !email) {
                alert('Por favor, completa al menos el nombre y el email.');
                return;
            }

            // Aquí puedes agregar la lógica para enviar el formulario
            alert('¡Gracias por tu interés! Te contactaremos pronto.');
            
            // Limpiar formulario
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('interest').value = '';
            document.getElementById('message').value = '';
        }

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