# intro-fisica

Sitio estatico con apuntes breves, ejemplos resueltos y ejercicios guiados para un curso inicial de fisica.

Demo publica: [https://hishanfarfan.github.io/intro-fisica/](https://hishanfarfan.github.io/intro-fisica/)

## Resumen

El objetivo del proyecto es publicar material de apoyo para clases introductorias de fisica en un formato simple:

- explicaciones cortas
- ejemplos resueltos paso a paso
- ejercicios guiados con formulas renderizadas por MathJax
- navegacion ligera, sin framework ni build

Actualmente hay contenido publicado para:

- Estandares y unidades
- Analisis dimensional
- Cifras significativas
- Conversion de unidades y ordenes de magnitud

El resto de las unidades aparece en el indice como contenido planificado.

## Tecnologias

- HTML5
- CSS3
- JavaScript vanilla
- MathJax para formulas
- GitHub Pages para publicacion

## Estructura

```text
.
|-- index.html
|-- example.html
|-- 404.html
|-- style.css
|-- script.js
|-- README.md
|-- LICENSE.md
`-- problemas/
```

- `index.html`: portada y navegacion principal.
- `example.html`: ejemplo del formato de ejercicios paso a paso.
- `404.html`: pagina de error para GitHub Pages.
- `style.css`: estilos compartidos del sitio.
- `script.js`: modo oscuro con persistencia local.
- `problemas/`: paginas tematicas publicadas.

## Uso local

No requiere instalacion ni build.

1. Clona el repositorio.
2. Abre `index.html` en el navegador.

Si prefieres servirlo localmente:

```powershell
python -m http.server 8000
```

Luego abre [http://localhost:8000/](http://localhost:8000/).

## Publicacion

El sitio esta pensado para publicarse con GitHub Pages desde la rama `main`.

## Mantenimiento

Si agregas una nueva pagina en `problemas/`, conviene seguir esta pauta minima:

1. enlazarla desde `index.html`
2. reutilizar `style.css` y `script.js`
3. mantener la navegacion superior y el enlace de vuelta al indice
4. evitar dejar marcadores editoriales o secciones incompletas visibles

## Pendientes razonables

- Agregar nuevas paginas tematicas.
- Definir una guia editorial corta para mantener tono y estructura consistentes.
- Revisar accesibilidad y contraste antes de ampliar el sitio.

## Licencia

El contenido del sitio se distribuye bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
Consulta [LICENSE.md](LICENSE.md) para el detalle.
