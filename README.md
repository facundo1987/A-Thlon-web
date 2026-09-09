# A-THLON

Sitio estático: HTML, CSS y JavaScript. No necesita instalación de dependencias.

```text
index.html                  Contenido y estructura de la página
assets/
  css/
    styles.css              Diseño y adaptación a celulares
    fonts.css               Fuentes (descargadas desde Google Fonts al navegar)
  js/
    main.js                 Menú, enlaces a WhatsApp y animaciones
  images/
    a-thlonLogo.png          Logo
    hero.png                Imagen principal
referencias/
  descarga-original/        Respaldo de la descarga, ignorado por Git
```

## Ver la página

Abrí `index.html` en el navegador o usá Live Server desde VS Code.
Las fuentes externas necesitan conexión a Internet.

## Dónde editar

- Textos, secciones y enlaces: `index.html`.
- Colores, tamaños y diseño: `assets/css/styles.css`.
- Comportamiento y número de WhatsApp: `assets/js/main.js`.
- Imágenes nuevas: `assets/images/`, con sus rutas actualizadas en el HTML.

## Recuperación de la descarga

El `index.html` original estaba vacío. Se recuperó el sitio desde
`saved_resource.html`, corrigiendo las rutas de CSS, JavaScript, logo y navegación.
Se retiraron los estilos inyectados por la vista previa de ChatGPT.
Los archivos descargados originales se conservaron en `referencias/descarga-original/`.
Esa carpeta es un respaldo local: no se sube a Git ni debe publicarse con el sitio.
Para publicar, solo se necesitan `index.html` y `assets/`.

La imagen principal está en `assets/images/hero.png` y se muestra dentro de
`.hero-visual` como imagen decorativa.
