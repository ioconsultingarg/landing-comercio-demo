# landing-comercio-demo

![Licencia: todos los derechos reservados](https://img.shields.io/badge/licencia-todos%20los%20derechos%20reservados-b91c1c) ![No es open source](https://img.shields.io/badge/open%20source-no-b91c1c)

> [!CAUTION]
> **© 2026 Gonzalo Nicolás Bravo — IO Consulting. Todos los derechos reservados.**
>
> Este repositorio es público **solo** para publicar la demo con GitHub Pages. **No es software libre ni de código abierto.** No tenés permiso para copiar, clonar, modificar, redistribuir ni reutilizar este código o sus partes en otros proyectos, personales o comerciales, ni para usarlo en el entrenamiento de modelos de IA. El uso no autorizado infringe la Ley 11.723 de Propiedad Intelectual (Argentina). Condiciones completas en [`LICENSE`](LICENSE). Para pedir permisos: contacto@ioconsulting.com.ar.
>
> **All rights reserved.** This repository is public **only** to serve a GitHub Pages demo. **It is not free or open source software.** You may not copy, clone, modify, redistribute or reuse this code or any part of it in other projects, personal or commercial, or use it to train AI models. Unauthorized use infringes copyright. Full terms in [`LICENSE`](LICENSE). To request permission: contacto@ioconsulting.com.ar.


Landing page mobile-first para comercios locales, construida como demo de portfolio de **IO Consulting** (transformación digital para PyMEs argentinas). El caso de uso mostrado es una pizzería ficticia ("Pizzería IO Consulting"), pero la plantilla está pensada para adaptarse rápido a cualquier rubro de servicios o gastronomía.

## Problema que resuelve

Muchos comercios de barrio no tienen web, o tienen una vieja y sin botón de contacto directo. Esta landing les da presencia online profesional en un día: información clara, botón de WhatsApp siempre visible, mapa embebido y SEO local básico, sin depender de un desarrollador para futuras ediciones simples de contenido.

## Demo

Publicada con GitHub Pages: `https://ioconsultingarg.github.io/landing-comercio-demo/`. Los datos del negocio son ficticios y la página lleva `noindex`; al adaptarla para un cliente real hay que quitar ese meta y la franja de demo.

## Stack

- HTML5 semántico + CSS puro (sin frameworks, variables CSS para theming)
- JavaScript vanilla, sin librerías (menú mobile, estado abierto/cerrado, animaciones del hero, scroll reveal)
- Tipografías Fraunces + Inter (licencia OFL) alojadas en `fonts/`, sin llamadas a Google Fonts
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
├── 404.html
├── favicon.svg
├── fonts/
├── img/
│   └── og.png
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
