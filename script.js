// Configuración de contraseña (cambia esto por la clave que quieras)
const PASSWORD = "Navidad2025"; // Cambia esta contraseña por la que quieras

// Configuración de regalos
const regalos = {
    gift1: {
        titulo: "Tu Regalo Especial",
        mensaje: "¡Feliz Navidad mi amor! Este regalo es solo para ti. Espero que te guste y que pases una Navidad increíble. Te amo más de lo que las palabras pueden expresar. ❤️🎄",
        detalles: "✨ SESIÓN DOBLE DE UN DÍA SPA ✨\n\n💆‍♀️ Un día completo de relajación y bienestar para ti, bebi.\n\nIncluye:\n• Masajes relajantes\n• Tratamientos de spa\n• Todo incluido\n• Válido para cualquier día que tú elijas\n\nPD: Esta vez sí jiji 😊\n\nTe amo infinitamente ❤️"
    },
    gift2: {
        titulo: "Nuestro Viaje Especial",
        mensaje: "¡Otro regalo para nosotros, mi amor! Este es un viaje que siempre hemos soñado hacer juntos. ❤️✈️",
        detalles: "✈️ VIAJE A BUENOS AIRES ✈️\n\n🗓️ Fecha: 20 de Agosto al 23 de Agosto, 2026\n\n💑 Un viaje romántico para los dos juntos\n\nIncluye:\n• Vuelos\n• Hospedaje\n• Experiencias únicas\n• Momentos inolvidables juntos\n\nYa compré pasajes, pero con fechas modificables. Estoy feliz de vivir esto contigo, bebi. Te amo ❤️"
    }
};

// Limpiar cualquier sesión guardada al recargar
window.addEventListener('beforeunload', function() {
    // Limpiar sessionStorage y localStorage para forzar nuevo login
    sessionStorage.clear();
    localStorage.clear();
    window.scrollTo(0, 0);
});

// Asegurar que siempre se inicie en el top y sin sesión
window.addEventListener('load', function() {
    // Limpiar cualquier sesión residual
    sessionStorage.clear();
    localStorage.clear();
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Limpiar cualquier sesión residual antes de inicializar
    sessionStorage.clear();
    localStorage.clear();
    
    // Ir al top inmediatamente
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    initPasswordScreen();
    initPhotoSections(); // Generar secciones dinámicamente
    initGiftInteraction();
    initSmoothScroll();
    initPhotoGallery();
    initParallaxEffect();
});

// Generar secciones de fotos dinámicamente
function initPhotoSections() {
    const container = document.getElementById('photoSections');
    if (!container || !photoSections) return;

    photoSections.forEach((section, sectionIndex) => {
        // Crear sección
        const sectionElement = document.createElement('section');
        sectionElement.className = 'moments-section';
        sectionElement.id = section.id;
        
        const sectionHTML = `
            <div class="container">
                <h2 class="section-title">
                    <span class="title-icon">${section.icon}</span>
                    ${section.title}
                    <span class="title-icon">${section.icon}</span>
                </h2>
                <p class="section-subtitle">${section.subtitle}</p>
                <div class="feed-container" data-section="${section.id}">
                    ${section.photos.map((photo, photoIndex) => `
                        <div class="photo-card" data-flip="false" data-section="${section.id}" data-index="${photoIndex}">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div class="photo-wrapper">
                                        <img src="${photo.imageUrl}" alt="${photo.title}" class="photo-img" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'%3E%3Crect fill=\'%23f0f0f0\' width=\'400\' height=\'400\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\' fill=\'%23999\' font-family=\'Arial\' font-size=\'20\'%3EImagen no disponible%3C/text%3E%3C/svg%3E'">
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="photo-wrapper">
                                        <img src="${photo.imageUrl}" alt="${photo.title}" class="photo-img" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'%3E%3Crect fill=\'%23f0f0f0\' width=\'400\' height=\'400\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\' fill=\'%23999\' font-family=\'Arial\' font-size=\'20\'%3EImagen no disponible%3C/text%3E%3C/svg%3E'">
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        sectionElement.innerHTML = sectionHTML;
        container.appendChild(sectionElement);
    });
}

// Pantalla de contraseña
function initPasswordScreen() {
    const passwordScreen = document.getElementById('passwordScreen');
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('passwordInput');
    const passwordHint = document.getElementById('passwordHint');
    const mainContent = document.getElementById('mainContent');

    // SIEMPRE limpiar cualquier sesión previa - NUNCA guardar autenticación
    sessionStorage.clear();
    localStorage.clear();
    
    // Asegurar que la pantalla de contraseña esté visible y el contenido oculto
    passwordScreen.classList.remove('hidden');
    mainContent.style.display = 'none';
    mainContent.style.opacity = '0';

    // Manejar envío del formulario
    passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const enteredPassword = passwordInput.value.trim();
        
        if (enteredPassword === PASSWORD) {
            // Contraseña correcta
            passwordHint.textContent = '¡Bienvenida, mi bebi! ❤️';
            passwordHint.classList.add('success');
            
            // NO guardar autenticación - la sesión solo dura mientras la página está abierta
            // Si se recarga, debe volver a pedir contraseña
            
            // Ocultar pantalla de contraseña y mostrar contenido
            setTimeout(() => {
                passwordScreen.classList.add('hidden');
                mainContent.style.display = 'block';
                
                // Pequeña animación de entrada
                mainContent.style.opacity = '0';
                mainContent.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                }, 100);
            }, 800);
        } else {
            // Contraseña incorrecta
            passwordHint.textContent = '❌ Clave incorrecta. Intenta de nuevo.';
            passwordHint.classList.remove('success');
            passwordInput.value = '';
            passwordInput.focus();
            
            // Efecto de shake
            passwordForm.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                passwordForm.style.animation = '';
            }, 500);
        }
    });

    // Focus automático en el input
    passwordInput.focus();
}

// Interactividad de regalos
function initGiftInteraction() {
    // Inicializar todos los regalos
    Object.keys(regalos).forEach(giftId => {
        const giftBox = document.getElementById(giftId);
        if (!giftBox) return;

        // Event listener para abrir el regalo
        giftBox.addEventListener('click', function(e) {
            // No expandir si ya está expandido, si se hace clic en el botón de cerrar, o si hay otro regalo expandido
            if (giftBox.classList.contains('expanded') || 
                e.target.closest('.close-gift-btn') ||
                e.target.closest('.gift-expanded-content')) {
                return;
            }
            
            // Cerrar cualquier otro regalo expandido
            closeAllGifts();
            
            openGift(giftId);
        });

        // Event listener para el botón de cerrar dentro de este regalo
        const closeBtn = giftBox.querySelector('.close-gift-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                closeGift(giftId);
            });
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllGifts();
        }
    });
}

// Abrir regalo (expandir card)
function openGift(giftId) {
    const giftBox = document.getElementById(giftId);
    if (!giftBox) return;

    const giftDetails = giftBox.querySelector('.gift-content-details');
    const giftTitle = giftBox.querySelector('.gift-content-title');
    
    if (!giftDetails) return;

    const regalo = regalos[giftId];
    
    // Actualizar contenido INMEDIATAMENTE
    if (regalo) {
        if (giftTitle) {
            giftTitle.textContent = regalo.titulo;
        }
        // Formatear los detalles con saltos de línea
        const detallesFormateados = regalo.detalles.replace(/\n/g, '<br>');
        giftDetails.innerHTML = `
            <p class="gift-message">${regalo.mensaje}</p>
            <div class="gift-details-content">${detallesFormateados}</div>
        `;
    }

    // Agregar clase al contenedor para deshabilitar otros regalos
    const giftsContainer = giftBox.closest('.gifts-container');
    if (giftsContainer) {
        giftsContainer.classList.add('gift-expanded');
    }
    
    // Expandir la card con animación suave
    giftBox.classList.add('expanded');
    
    // Scroll suave hacia la card expandida
    setTimeout(() => {
        giftBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);

    // Efecto de confeti PROFESIONAL al abrir
    createProfessionalConfetti();
}

// Cerrar regalo específico (colapsar card)
function closeGift(giftId) {
    const giftBox = document.getElementById(giftId);
    if (giftBox) {
        // Remover clase expanded
        giftBox.classList.remove('expanded');
        
        // Esperar a que termine la animación antes de limpiar el contenido
        setTimeout(() => {
            if (!giftBox.classList.contains('expanded')) {
                const giftDetails = giftBox.querySelector('.gift-content-details');
                const giftTitle = giftBox.querySelector('.gift-content-title');
                
                // Resetear el contenido solo si no está expandido
                if (giftDetails) {
                    giftDetails.innerHTML = '<p class="gift-message">Aquí aparecerá la descripción de tu regalo</p>';
                }
                if (giftTitle) {
                    const regalo = regalos[giftId];
                    if (regalo && giftId === 'gift1') {
                        giftTitle.textContent = '¡Tu Regalo Especial!';
                    } else if (regalo && giftId === 'gift2') {
                        giftTitle.textContent = '¡Nuestro Viaje Especial!';
                    }
                }
            }
        }, 800);
        
        // Remover clase del contenedor si no hay más regalos expandidos
        const giftsContainer = giftBox.closest('.gifts-container');
        if (giftsContainer) {
            const hasExpanded = giftsContainer.querySelector('.gift-box.expanded');
            if (!hasExpanded) {
                giftsContainer.classList.remove('gift-expanded');
            }
        }
    }
}

// Cerrar todos los regalos
function closeAllGifts() {
    Object.keys(regalos).forEach(giftId => {
        closeGift(giftId);
    });
}

// Efecto de confeti PROFESIONAL y ESPECTACULAR
function createProfessionalConfetti() {
    const confettiColors = [
        '#ff0000', '#00ff00', '#ffff00', '#ff00ff', '#00ffff', 
        '#ff8800', '#ffd700', '#ff69b4', '#00ced1', '#ff1493',
        '#32cd32', '#ff6347', '#1e90ff', '#ff4500', '#da70d6'
    ];
    
    const confettiShapes = ['circle', 'square', 'triangle', 'star'];
    const confettiCount = 200; // Mucho más confeti para efecto profesional
    const duration = 3000; // 3 segundos de animación
    
    // Crear contenedor de confeti
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '3000';
    confettiContainer.style.overflow = 'hidden';
    document.body.appendChild(confettiContainer);

    // Crear múltiples oleadas de confeti
    for (let wave = 0; wave < 3; wave++) {
        setTimeout(() => {
            for (let i = 0; i < confettiCount / 3; i++) {
                const confetti = document.createElement('div');
                const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
                const size = 8 + Math.random() * 12;
                const startX = Math.random() * window.innerWidth;
                const startY = -20;
                
                // Estilos base
                confetti.style.position = 'absolute';
                confetti.style.left = startX + 'px';
                confetti.style.top = startY + 'px';
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
                confetti.style.backgroundColor = color;
                confetti.style.pointerEvents = 'none';
                confetti.style.opacity = '0.9';
                confetti.style.boxShadow = `0 0 ${size}px ${color}`;
                
                // Formas
                if (shape === 'circle') {
                    confetti.style.borderRadius = '50%';
                } else if (shape === 'square') {
                    confetti.style.borderRadius = '2px';
                    confetti.style.transform = 'rotate(45deg)';
                } else if (shape === 'triangle') {
                    confetti.style.width = '0';
                    confetti.style.height = '0';
                    confetti.style.borderLeft = `${size/2}px solid transparent`;
                    confetti.style.borderRight = `${size/2}px solid transparent`;
                    confetti.style.borderBottom = `${size}px solid ${color}`;
                    confetti.style.backgroundColor = 'transparent';
                } else if (shape === 'star') {
                    confetti.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
                }
                
                confettiContainer.appendChild(confetti);
                
                // Animación física realista
                const angle = (Math.random() - 0.5) * Math.PI * 0.5; // Ángulo de lanzamiento
                const velocity = 200 + Math.random() * 300; // Velocidad inicial
                const gravity = 500; // Gravedad
                const rotationSpeed = (Math.random() - 0.5) * 720; // Rotación
                const horizontalVelocity = (Math.random() - 0.5) * 200; // Movimiento horizontal
                
                let startTime = null;
                const animate = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const elapsed = (currentTime - startTime) / 1000; // Tiempo en segundos
                    
                    if (elapsed < duration / 1000) {
                        // Física: movimiento parabólico
                        const x = startX + horizontalVelocity * elapsed;
                        const y = startY + velocity * elapsed * Math.sin(angle) + 0.5 * gravity * elapsed * elapsed;
                        const rotation = rotationSpeed * elapsed;
                        
                        confetti.style.left = x + 'px';
                        confetti.style.top = y + 'px';
                        confetti.style.transform = `rotate(${rotation}deg)`;
                        
                        // Fade out al final
                        if (elapsed > (duration / 1000) * 0.7) {
                            confetti.style.opacity = (1 - (elapsed - (duration / 1000) * 0.7) / ((duration / 1000) * 0.3)).toString();
                        }
                        
                        requestAnimationFrame(animate);
                    } else {
                        confetti.remove();
                    }
                };
                
                requestAnimationFrame(animate);
            }
        }, wave * 200); // Oleadas con delay
    }
    
    // Remover contenedor después de la animación
    setTimeout(() => {
        confettiContainer.remove();
    }, duration + 500);
}

// Scroll suave
function initSmoothScroll() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const momentosSection = document.getElementById('momentos');
            if (momentosSection) {
                momentosSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Smooth scroll para todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Galería de fotos interactiva con efecto flip en scroll
function initPhotoGallery() {
    const photoCards = document.querySelectorAll('.photo-card');
    
    // Intersection Observer para detectar cuando las fotos entran en vista
    const flipObserverOptions = {
        threshold: 0.3, // Activa cuando el 30% de la tarjeta es visible
        rootMargin: '0px 0px -50px 0px'
    };
    
    const flipObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const card = entry.target;
                
                // Agregar clase visible para animación de entrada
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 200); // Delay escalonado para efecto cascada
                
                // NO activar flip automáticamente - solo al hacer click
                // El usuario debe tocar la tarjeta para ver la foto
                
                // Dejar de observar esta tarjeta después de que sea visible
                setTimeout(() => {
                    flipObserver.unobserve(card);
                }, 1000);
            }
        });
    }, flipObserverOptions);
    
    // Observar cada tarjeta
    photoCards.forEach(card => {
        flipObserver.observe(card);
    });
    
    // Crear el modal/lightbox
    createImageModal();
    
    // Click para abrir la imagen en el modal
    photoCards.forEach(card => {
        const img = card.querySelector('.photo-img');
        if (img) {
            card.addEventListener('click', function(e) {
                e.stopPropagation();
                const imageUrl = img.src;
                const imageAlt = img.alt || 'Imagen';
                openImageModal(imageUrl, imageAlt);
            });
        }
        
        // Efecto hover para indicar que es clickeable
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.cursor = 'pointer';
                this.style.transform = 'scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                this.style.transform = '';
            }
        });
    });
}

// Crear el modal para mostrar imágenes en tamaño completo
function createImageModal() {
    // Verificar si el modal ya existe
    if (document.getElementById('imageModal')) {
        return;
    }
    
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-backdrop"></div>
        <div class="image-modal-content">
            <button class="image-modal-close" aria-label="Cerrar">&times;</button>
            <img class="image-modal-img" src="" alt="">
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Event listeners para cerrar el modal
    const backdrop = modal.querySelector('.image-modal-backdrop');
    const closeBtn = modal.querySelector('.image-modal-close');
    const modalContent = modal.querySelector('.image-modal-content');
    
    closeBtn.addEventListener('click', closeImageModal);
    backdrop.addEventListener('click', closeImageModal);
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeImageModal();
        }
    });
    
    // Prevenir que el click en la imagen cierre el modal
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Abrir el modal con una imagen
function openImageModal(imageUrl, imageAlt) {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    const modalImg = modal.querySelector('.image-modal-img');
    if (modalImg) {
        modalImg.src = imageUrl;
        modalImg.alt = imageAlt;
        
        // Mostrar el modal con animación
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }
}

// Cerrar el modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll del body
}

// Efecto parallax suave
function initParallaxEffect() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroSection = document.querySelector('.hero-section');
        
        const heroContent = document.querySelector('.hero-content');
        const windowHeight = window.innerHeight;
        
        if (heroSection) {
            // Calcular el porcentaje de scroll (0 a 1)
            // Comenzar a desvanecer gradualmente desde el inicio del scroll
            // Usar un rango más amplio para transición más suave (0.8 de la altura de ventana)
            const scrollProgress = Math.min(scrollTop / (windowHeight * 0.8), 1);
            
            // Efecto parallax muy suave
            const parallaxValue = scrollTop * 0.2;
            heroSection.style.transform = `translateY(${parallaxValue}px)`;
            
            // Fade out muy gradual y sutil del contenido del hero
            if (heroContent) {
                // Opacidad: fade out más lento y gradual (multiplicador reducido)
                const opacity = Math.max(0, 1 - scrollProgress * 0.9);
                
                // Movimiento muy sutil hacia arriba
                const translateY = scrollProgress * 20;
                
                // Escala casi imperceptible
                const scale = Math.max(0.95, 1 - scrollProgress * 0.1);
                
                heroContent.style.opacity = opacity;
                heroContent.style.transform = `translateY(-${translateY}px) scale(${scale})`;
                heroContent.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                
                // Ocultar completamente solo cuando el scroll es muy significativo
                if (scrollTop > windowHeight * 0.9) {
                    heroContent.style.pointerEvents = 'none';
                    heroContent.style.visibility = 'hidden';
                } else {
                    heroContent.style.pointerEvents = 'auto';
                    heroContent.style.visibility = 'visible';
                }
            }
        }

        // Efecto de aparición en scroll
        const sections = document.querySelectorAll('.moments-section, .gifts-section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });

        lastScrollTop = scrollTop;
    });
}

// Animación de entrada para secciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos al cargar
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.moments-section, .gifts-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Las tarjetas de fotos ahora se manejan con initPhotoGallery()
    // que usa su propio Intersection Observer para el efecto flip
});

// Efecto de cursor personalizado (opcional, puede ser molesto en móviles)
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 215, 0, 0.8);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.querySelectorAll('a, button, .gift-box, .photo-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = 'rgba(255, 215, 0, 1)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'rgba(255, 215, 0, 0.8)';
        });
    });
}

// Mensaje de bienvenida (opcional)
console.log('%c❤️ Para Mi Bebi ❤️', 'color: #ff0000; font-size: 20px; font-weight: bold;');
console.log('%c¡Feliz Navidad mi amor!', 'color: #0d7d4e; font-size: 16px;');

