# landing-comercio-demo

Landing page mobile-first para comercios locales, construida como demo de portfolio de **IO Consulting** (transformación digital para PyMEs argentinas). El caso de uso mostrado es una pizzería ficticia ("Pizzería Don Mario"), pero la plantilla está pensada para adaptarse rápido a cualquier rubro de servicios o gastronomía.

## Problema que resuelve

Muchos comercios de barrio no tienen web, o tienen una vieja y sin botón de contacto directo. Esta landing les da presencia online profesional en un día: información clara, botón de WhatsApp siempre visible, mapa embebido y SEO local básico, sin depender de un desarrollador para futuras ediciones simples de contenido.

## Demo

Publicada con GitHub Pages: `https://ioconsultingarg.github.io/landing-comercio-demo/` (activar en Settings → Pages → branch `main` → carpeta `/root`).

## Stack

- HTML5 semántico + CSS puro (sin frameworks, variables CSS para theming)
- JavaScript vanilla (menú mobile, scroll reveal, año dinámico)
- Google Fonts (Poppins + Inter) vía `<link>`
- SEO local: meta tags, Open Graph, JSON-LD `schema.org/Restaurant`
- Sin build step ni dependencias — se edita y se despliega directo

## Cómo correrlo local

No requiere instalación. Alcanza con abrir `index.html` en el navegador, o levantar un servidor estático simple:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Cómo adaptarlo a otro rubro

1. Cambiar las variables de color en `css/styles.css` (bloque `:root`) por la paleta del nuevo negocio.
2. Reemplazar textos, secciones de "menú"/"servicios" y el JSON-LD de `index.html` (cambiar `@type` a `LocalBusiness`, `HairSalon`, `MedicalClinic`, etc. según corresponda).
3. Actualizar el número de WhatsApp en los enlaces `wa.me` y la dirección del mapa embebido.
4. Ajustar meta tags (`title`, `description`, Open Graph) para el nuevo rubro.

## Publicar en GitHub Pages

1. Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
2. Esperar 1-2 minutos y la URL queda activa.

Alternativa: desplegar en Vercel o Netlify arrastrando la carpeta (sin configuración adicional, es HTML estático).

## Estructura

```
landing-comercio-demo/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── README.md
└── LICENSE
```

## Próximas mejoras posibles

- Formulario de contacto (requiere backend liviano, ej. Formspree o un endpoint simple)
- Versión con selector de idioma para zonas turísticas
- Integración con Google Analytics / Meta Pixel para medir conversión a WhatsApp

---
Parte del portfolio de demos de transformación digital de IO Consulting.
