// ============================================
// CONFIGURACIÓN DE FOTOS Y SECCIONES
// ============================================
// Todas las fotos están en las carpetas correspondientes

const photoSections = [
    {
        id: 'lugares',
        title: 'Nuestros Lugares',
        icon: '📍',
        subtitle: 'Lugares especiales que hemos visitado juntos',
        photos: [
            {
                imageUrl: 'images/lugares/01-lugares.jpg',
                title: 'Lugar especial'
            },
            {
                imageUrl: 'images/lugares/02-lugares.jpg',
                title: 'Aventura compartida'
            },
            {
                imageUrl: 'images/lugares/03-lugares.jpg',
                title: 'Momento único'
            },
            {
                imageUrl: 'images/lugares/04-lugares.jpg',
                title: 'Recuerdo especial'
            },
            {
                imageUrl: 'images/lugares/05-lugares.jpg',
                title: 'Explorando juntos'
            },
            {
                imageUrl: 'images/lugares/06-lugares.jpg',
                title: 'Sonrisas en cada destino'
            },
            {
                imageUrl: 'images/lugares/07-lugares.jpg',
                title: 'Momento mágico'
            },
            {
                imageUrl: 'images/lugares/08-lugares.jpg',
                title: 'Aventura sin fin'
            },
            {
                imageUrl: 'images/lugares/09-lugares.jpg',
                title: 'Lugar favorito'
            }
        ]
    },
    {
        id: 'bowie',
        title: 'Nuestro Perrito Bowie',
        icon: '🐕',
        subtitle: 'Nuestro pequeño compañero de vida',
        photos: [
            {
                imageUrl: 'images/bowie/01-bowie.jpg',
                title: 'Bowie adorable'
            },
            {
                imageUrl: 'images/bowie/02-bowie.jpg',
                title: 'Momentos tiernos'
            },
            {
                imageUrl: 'images/bowie/03-bowie.jpg',
                title: 'Bowie jugando'
            },
            {
                imageUrl: 'images/bowie/04-bowie.jpg',
                title: 'Nuestro guardián'
            },
            {
                imageUrl: 'images/bowie/05-bowie.jpg',
                title: 'Bowie durmiendo'
            },
            {
                imageUrl: 'images/bowie/06-bowie.jpg',
                title: 'Aventuras con Bowie'
            },
            {
                imageUrl: 'images/bowie/07-bowie.jpg',
                title: 'Bowie travieso'
            },
            {
                imageUrl: 'images/bowie/08-bowie.jpg',
                title: 'Momentos de paz'
            },
            {
                imageUrl: 'images/bowie/09-bowie.jpg',
                title: 'Nuestro pequeño héroe'
            },
            {
                imageUrl: 'images/bowie/10-bowie.jpg',
                title: 'Amor incondicional'
            }
        ]
    },
    {
        id: 'comidas',
        title: 'Nuestras Mejores Comidas',
        icon: '🍽️',
        subtitle: 'Sabores que compartimos juntos',
        photos: [
            {
                imageUrl: 'images/comida/01-comida.jpg',
                title: 'Primera cena especial'
            },
            {
                imageUrl: 'images/comida/02-comida.jpg',
                title: 'Cocinando juntos'
            },
            {
                imageUrl: 'images/comida/03-comida.jpg',
                title: 'Sabores deliciosos'
            },
            {
                imageUrl: 'images/comida/04-comida.jpg',
                title: 'Momentos dulces'
            },
            {
                imageUrl: 'images/comida/05-comida.jpg',
                title: 'Cena romántica'
            },
            {
                imageUrl: 'images/comida/06-comida.jpg',
                title: 'Desayuno juntos'
            },
            {
                imageUrl: 'images/comida/07-comida.jpg',
                title: 'Nuevos sabores'
            },
            {
                imageUrl: 'images/comida/08-comida.jpg',
                title: 'Momento compartido'
            },
            {
                imageUrl: 'images/comida/09-comida.jpg',
                title: 'Celebración especial'
            },
            {
                imageUrl: 'images/comida/10-comida.jpg',
                title: 'Amor en cada bocado'
            },
            {
                imageUrl: 'images/comida/11-comida.jpg',
                title: 'Sabor único'
            },
            {
                imageUrl: 'images/comida/12-comida.jpg',
                title: 'Momento delicioso'
            },
            {
                imageUrl: 'images/comida/13-comida.jpg',
                title: 'Comida memorable'
            }
        ]
    },
    {
        id: 'nosotros',
        title: 'Nosotros',
        icon: '💕',
        subtitle: 'Momentos especiales juntos',
        photos: [
            {
                imageUrl: 'images/nosotros/01-nosotros.jpg',
                title: 'Primer momento juntos'
            },
            {
                imageUrl: 'images/nosotros/02-nosotros.jpg',
                title: 'Riendo juntos'
            },
            {
                imageUrl: 'images/nosotros/03-nosotros.jpg',
                title: 'Aventura compartida'
            },
            {
                imageUrl: 'images/nosotros/04-nosotros.jpg',
                title: 'Sonrisa que ilumina'
            },
            {
                imageUrl: 'images/nosotros/05-nosotros.jpg',
                title: 'Amor en cada instante'
            },
            {
                imageUrl: 'images/nosotros/06-nosotros.jpg',
                title: 'Recuerdo inolvidable'
            },
            {
                imageUrl: 'images/nosotros/07-nosotros.jpg',
                title: 'Momento tierno'
            },
            {
                imageUrl: 'images/nosotros/08-nosotros.jpg',
                title: 'Celebrando juntos'
            },
            {
                imageUrl: 'images/nosotros/09-nosotros.jpg',
                title: 'Nuestro amor'
            },
            {
                imageUrl: 'images/nosotros/10-nosotros.jpg',
                title: 'Para siempre'
            },
            {
                imageUrl: 'images/nosotros/11-nosotros.jpg',
                title: 'Momento único'
            },
            {
                imageUrl: 'images/nosotros/12-nosotros.jpg',
                title: 'Felicidad compartida'
            },
            {
                imageUrl: 'images/nosotros/13-nosotros.jpg',
                title: 'Nuestro camino'
            },
            {
                imageUrl: 'images/nosotros/14-nosotros.jpg',
                title: 'Momento perfecto'
            },
            {
                imageUrl: 'images/nosotros/15-nosotros.jpg',
                title: 'Amor verdadero'
            },
            {
                imageUrl: 'images/nosotros/16-nosotros.jpg',
                title: 'Nuestra historia'
            },
            {
                imageUrl: 'images/nosotros/17-nosotros.jpg',
                title: 'Sueño compartido'
            },
            {
                imageUrl: 'images/nosotros/18-nosotros.jpg',
                title: 'Eternamente'
            }
        ]
    }
];
