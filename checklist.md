# Front-End Checklist

## Head

### Meta tag

- [X] 🟥 **Doctype**

```html
<!doctype html>
```

Las siguientes 2 etiquetas meta (Charset y Viewport) deben ir primero dentro del `<head>`.

- [X] 🟥 **Charset**

```html
<meta charset="utf-8">
```

- [X] 🟥 **Viewport**

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

- [X] 🟥 **Title:** Máximo 55 caracteres para SEO

```html
<title>Page Title less than 55 characters</title>
```

- [X] 🟥 **Description:** Máximo 150 caracteres

```html
<meta name="description" content="Description of the page less than 150 characters">
```

* 🛠 [Title and Description Checker](https://www.sistrix.com/serp-snippet-generator/)

- [X] 🟨 **Favicons:** Configurar todos los favicons, la imagen que se use tiene que ser cuadrada

- 🛠 [RealFaviconGenerator](https://realfavicongenerator.net/)
- 🛠 [Favicon Checker](https://realfavicongenerator.net/favicon-checker)

- [X] 🟩 **Apple Web App Meta**

```html
<link rel="apple-touch-icon" href="/custom-icon.png">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

- [X] 🟨**Canonical:** Usar `rel="canonical"` para mejorar el SEO. Se tiene que poner la URL base sin parametros, sin anclas (#), sin www y siempre https en cada página única

```html
<link rel="canonical" href="https://example.com/blog">
```

### HTML tags

- [X] 🟥 **Atributo de idioma:** Configurar el `lang` con el idioma de la página

```html
<html lang="en"></html>
```

- [X] 🟩 **Alternate language:** Si es una página con varios idiomas, aca se especifican todos los idiomas y las páginas a las que debería ir

```html
<link rel="alternate" href="https://es.example.com/" hreflang="es">
```

- [X] 🟩 **x-default:** Si es una página con varios idiomas, aca se especifica la del idioma internacional donde iría cualquier usuario si no tiene página de idioma propia

```html
<link rel="alternate" href="https://example.com/" hreflang="x-default" />
```

- [X] 🟩 **RSS feed:** PARA Blogs, configurar RSS.
- [ ] 🟨 **CSS Critical (investigar):** The CSS critical (or "above the fold") collects all the CSS used to render the visible portion of the page. It is embedded before your principal CSS call and between `<style></style>` in a single line (minified).
- [X] 🟥 **CSS orden:** Todos los archivos CSS se cargan antes que cualquier archivo JavaScript en el `<head>`. (Excepto en el caso en que, a veces, los archivos JS se cargan de forma asincrónica en la parte superior de tu página).

### Social meta

Generar las meta tags sociales con [Meta Tags](https://metatags.io/)

- [X] 🟩 **OG Tags:** Tamaño al menos 600 x 315 pixels, pero 1200 x 630 pixels es mejor.

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/page.html">
<meta property="og:title" content="Content Title">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
<!-- Las siguientes son opcionales pero mejoran la carga -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

- 🛠 Test your page with the [Facebook OG testing](https://developers.facebook.com/tools/debug/)

- [X] 🟩 **Twitter Tags**

```html
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@site_account">
<meta name="twitter:creator" content="@individual_account">
<meta name="twitter:url" content="https://example.com/page.html">
<meta name="twitter:title" content="Content Title">
<meta name="twitter:description" content="Content description less than 200 characters">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

- 🛠 Test your page with the [Twitter card validator](https://cards-dev.twitter.com/validator)
- 🛠 Test your page with the [Twitter card validator preview](https://typefully.com/tools/twitter-card-validator)

## HTML

- [ ] 🟥 **HTML5 Elementos Semanticos**
- [ ] 🟥 **Página error 404**
- [ ] 🟥 **Error pages:** Error 5xx. Tienen que tener su css integrado
- [X] 🟨 **Noopener:** Para cada link con `target="_blank"`, agregarle `rel="noopener noreferrer"`
- [X] 🟩 **Borrar comentarios**
- [X] 🟨 Los elementos sin etiqueta de cierre no necesitan cerrarce con la barra (/)
- [X] 🟨 **Adblockers test:** Probar que ande todo bien con adblock
- [ ] 🟨 **Minificar HTML**
- [X] 🟥 **Evitar iframes innecesarios**

---

## Webfonts

- [ ] 🟥 **Webfont tamaño:** Menor de 2 MB con todas las variantes
- [ ] 🟨 **Formatos de fuente web optimizados (WOFF2 recomendado, sino WOFF o TTF)**
- [ ] 🟨 **Usar `preconnect` para cargar rápido las fuentes**

  ```html
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ```
- [ ] 🟨 **Webfont tamaño:** Menos de 2 MB, recomendado menos de 300kb con todas sus variantes
- [ ] 🟨 **Evitar parpadeos o texto invisible:** Usar `font-display`

---

## CSS

- [X] 🟥 **Diseño responsive**
- [X] 🟥 **ID unicos**
- [X] 🟥 **Desktop Browsers:** All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, EDGE...).
- [X] 🟥 **Mobile Browsers:** All pages were tested on all current mobile browsers (Native browser, Chrome, Safari...).
- [ ] 🟥 **OS:** All pages were tested on all current OS (Windows, Android, iOS, Mac...).

---

## Images

- [ ] 🟥 **Optimización:** Optimizar imagenes y usar formatos nuevos

- 🛠 [Squoosh](https://squoosh.app/)
- 🛠 [TinyPNG](https://tinypng.com/)
- 🛠 [TinyJPG – Compress JPEG images intelligently](https://tinyjpg.com/)
- 🛠 [Kraken.io - Online Image Optimizer](https://kraken.io/web-interface)
- 🛠 [Compressor.io - optimize and compress JPEG photos and PNG images](https://compressor.io/compress)
- 🛠 [SVGOMG - Optimize SVG vector graphics files](https://jakearchibald.github.io/svgomg/)

- [ ] 🟨 **Picture/Srcset:** You use picture/srcset to provide the most appropriate image for the current viewport of the user.
- [X] 🟥 **Alternative text:** Todas las `<img>` deben tener un texto alt, almenos que sean decorativas, y no tiene que tener title al mismo tiempo
- [X] 🟨 **Lazy loading:** Agregar el siguiente atributo a todas las `<img>` que no estén en el primer viewport loading="lazy"
- [ ] 🟥 **Images format:** Con [Lighthouse](https://developers.google.com/web/tools/lighthouse/) se puede saber que formatos son mejores para cada imagen
- [X] 🟨 **Images dimensions:** Poner `width` y `height` en las `<img>`
- [ ] 🟨 **Imagenes responsive:** Usar `srcset` y `picture` para declarar los tamaños de imagen para cada pantalla.

---

## JavaScript

- [X] 🟥 **JavaScript Inline:** Evitar codigo JS dentro del HTML.
- [ ] 🟥 **Non-blocking JavaScript:** Usar el atributo `async` o `defer` según sea necesario para mejorar el tiempo de carga
- [ ] 🟨 **Librerias actualizadas**
- [X] 🟨 **`noscript` tag**

```html
<noscript> You need to enable JavaScript to run this app. </noscript>
```

---

## Security

### HTACCESS

- [X] 🟨 **Configurar .htaccess**

```html
# Variables de configuración para caché (modifica estos valores según necesites)
# ============================================================
# Tiempo de caché general en segundos (86400 = 1 día)
SetEnv CACHE_TIME 86400
# Tiempo de caché para recursos estáticos en segundos (31536000 = 1 año)
SetEnv CACHE_TIME_STATIC 31536000

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

<IfModule mod_headers.c>
  # Obliga a los navegadores a usar HTTPS para todas las conexiones futuras
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  
  # Evita ataques de tipo MIME sniffing
  Header set X-Content-Type-Options "nosniff"
  
  # Evita que el sitio sea cargado en iframes de otros dominios
  Header set X-Frame-Options "SAMEORIGIN"
  
  # Activa la protección XSS integrada en navegadores más antiguos
  Header set X-XSS-Protection "1; mode=block"
  
  # Controla la información que se envía en el encabezado Referer
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  
  # Define qué recursos puede cargar el navegador (personalizar segun cada página)
  # Header set Content-Security-Policy "
  #   default-src 'none';
  #   script-src 'self' https://www.googletagmanager.com https://cdn.tailwindcss.com 'unsafe-inline';
  #   style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
  #   font-src 'self' https://fonts.gstatic.com;
  #   img-src 'self' data:;
  #   connect-src 'self';
  #   frame-ancestors 'none';
  #   base-uri 'self';
  #   form-action 'self';
  # "

  # Controla qué características y APIs pueden usar el sitio web
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=(), fullscreen=(), payment=(), sync-xhr=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), xr-spatial-tracking=(), autoplay=()"
  
  # Previene problemas de caché relacionados con la compresión
  Header set Vary "Accept-Encoding"
  
  # Cache-Control General - COMENTADO para evitar problemas durante el desarrollo
  # Header set Cache-Control "public, max-age=%{CACHE_TIME}e"
  
  # Cache-Control para archivos estáticos - COMENTADO para evitar problemas durante el desarrollo
  # <FilesMatch "\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2)$">
  #   Header set Cache-Control "public, max-age=%{CACHE_TIME_STATIC}e"
  # </FilesMatch>
</IfModule>

<IfModule mod_deflate.c>
  # Comprimir tipos de contenido
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json application/x-javascript text/javascript
  
  # También comprimir archivos por extensión
  <FilesMatch "\.(js|css|html|htm|php|xml)$">
    SetOutputFilter DEFLATE
  </FilesMatch>
</IfModule>

# Configuración de caché para tipos específicos de archivos - COMENTADO para desarrollo
# ============================================================
# <IfModule mod_expires.c>
#   ExpiresActive On
#   ExpiresByType application/javascript "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType text/css "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType image/png "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType image/jpg "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType image/jpeg "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType image/gif "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType image/svg+xml "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType image/webp "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType font/woff "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType font/woff2 "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType application/font-woff "access plus %{CACHE_TIME_STATIC}e seconds"
#   ExpiresByType application/font-woff2 "access plus %{CACHE_TIME_STATIC}e seconds"
# </IfModule>

# Prevenir acceso a archivos sensibles
# ============================================================
<FilesMatch "(^\.htaccess|\.htpasswd|\.git|\.env|composer\.json|composer\.lock|package\.json|package-lock\.json|config\.php|wp-config\.php)">
  Order allow,deny
  Deny from all
</FilesMatch>

# Desactivar listado de directorios, no se muestra nada si no hay un index.{extension} en la carpeta
# ============================================================
Options -Indexes

# Nota: Para que HSTS preload funcione, hay que registrar el dominio en https://hstspreload.org/#submission-form
```

* [Registrar dominio](https://hstspreload.org/#submission-form "para que preload funcione, hay que registrar el dominio en una lista que lo habilita")

### Headers HTTP

- [ ] 🟥 **Cross Site Request Forgery (CSRF):** Si tiene una comunicación constante con el back configurar el CSRF
- [ ] 🟥 **Cross Site Scripting (XSS):** Evitar si es posible dangerouslySetInnerHTML. Si se usa, sanitizar con una libreria (ej: dompurify)

---

## Performance

### Preparing upcoming requests

- [ ] 🟩 **DNS resolution:** `dns-prefetch` para resolver DNS de servicios de terceros.

```html
<link rel="dns-prefetch" href="https://example.com" />
```

- [ ] 🟩 **Preconnection:** `preconnect` para optimizar la conexión con servicios necesarios pronto.

```html
<link rel="preconnect" href="https://example.com" />
```

- [ ] 🟩 **Prefetching:** `prefetch` para solicitar recursos futuros durante el tiempo de inactividad.

```html
<link rel="prefetch" href="image.png" />
```

- [ ] 🟩 **Preloading:** `preload` para cargar recursos esenciales antes de que se necesiten

```html
<link rel="preload" href="app.js" />
```

### Performance testing

- [ ] 🟥 **Velocidad de carga:** Todas las páginas tienen un puntaje mayor a 90 en los test de velocidad

#### Headings

- [X] 🟥 **H1:** Todas las páginas tienen un helemento `<h1>`
- [X] 🟥 **Headings:** Mantener el orden de los encabezados de H1 a H6 sin saltarse ninguno
- [X] 🟨 **Input types usados correctamente**
- [X] 🟥 **Label:** Cada input debe tener un label asociado. Si no se puede mostrar la etiqueta visualmente, usar aria-label="Nombre"

### Accessibility testing

- [ ] 🟥 **Navegación con teclado**
- [ ] 🟥 **Screen-reader**

## SEO

- [X] 🟩 **Instalar y configurar Google Analytics (ir al enlace, despues "Administrar" y en "Crear" crear nueva cuenta)**

- 🛠 [Google Analytics](https://analytics.google.com/analytics/web/)
- 🛠 [Google Analythics Checker](https://seositecheckup.com/tools/google-analytics-test)

- [X] 🟩 **Search Console:** Configurada y funcionando para monitorear presencia en Google

- 🛠 [Search Console](https://search.google.com/search-console/welcome)

- [X] 🟥 **sitemap.xml:** Generar el sitemap.xml, subir a la raiz y subirlo a la Search Console de Google. Se recomienda ponerlo en el robots.txt

```txt
Sitemap: https://dominio.com/sitemap.xml
```

- 🛠 [Sitemap generator](https://www.xml-sitemaps.com/)

- [X] 🟥 **robots.txt:** Crear, configurar y dejar en la raiz

- 🛠 Test robots.txt [Google Robots Testing Tool](https://www.google.com/webmasters/tools/robots-testing-tool)

- [X] 🟨 **Structured Data:** Si la página necesita de resultados enriquecidos para Google, configurarlos y testearlos

- 🛠 [Rich Results Test](https://search.google.com/test/rich-results)
- 🛠 [Schema Validator](https://validator.schema.org/)

# Front-End Performance Checklist

### Server

- [ ] 🟥 **Usa HTTPS**
- [ ] 🟥 **Peso de la página < 1500 KB**
- [ ] **🟥 Tiempo de carga < 3 seconds**
- [ ] 🟥 **TTFB < 1.3 seconds**
- [ ] 🟥 **Cookie:** SI hay cookies, que no supere 4096 bytes y no más de 20 cookies, tratar de evitarlas.
- [ ] 🟥 **Evitar request HTTP innecesarias**
- [ ] 🟥 **Revisar archivos con 404**

* [ ] **Corregir errores de ortografia con code spell checker**
  [code-spell-checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-spanish)

---

# Tests

* [X] 🛠 [W3C validator](https://validator.w3.org/)
* [X] 🛠 [HTML5 validator](https://html5.validator.nu/)
* [X] 🛠 [HTML Lint](https://webhint.io/)
* [X] 🛠 [Link Checker](https://validator.w3.org/checklink)
* [X] 🛠 [Online cross-browser testing](https://www.browserling.com/)
* [X] 🛠 [Accesibilidad](http://wave.webaim.org/)
* [ ] 🛠 [Test peso de imagenes](https://webspeedtest.cloudinary.com)
* [X] [Headers de Seguridad Snyk](https://securityheaders.io/)
* [X] [Headers de Seguridad Redbot](https://redbot.org/)
* [ ] [Headers de Seguridad Mozilla](https://observatory.mozilla.org/)
* [ ]

- 🛠 [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
- 🛠 [WebPagetest - Website Performance and Optimization Test](https://www.webpagetest.org/)
- 🛠 [GTmetrix - Website speed and performance optimization](https://gtmetrix.com/)
- 🛠 [Calibreapp](https://calibreapp.com/tools/website-speed-test)
- 🛠 ☆ [Dareboost: Website Speed Test and Website Analysis](https://www.dareboost.com/) (use the coupon WPCDD20 for -20%)
- 🛠 [Treo: Page Speed Monitoring](https://treo.sh/)
- 🛠 [Pingdom Website Speed Test](https://tools.pingdom.com)
- 🛠 [Sitespeed.io - Welcome to the wonderful world of Web Performance](https://www.sitespeed.io/)
- 🛠 [Website Speed Test | Check Web Performance &raquo; Dotcom-Tools](https://www.dotcom-tools.com/website-speed-test.aspx)
- 🛠 [Website and Server Uptime Monitoring - Pingdom](https://www.pingdom.com/product/uptime-monitoring/) ([Free Signup Link](https://www.pingdom.com/free))
- 🛠 [Uptime Robot](https://uptimerobot.com)
- 🛠 [SpeedCurve: Monitor front-end performance](https://speedcurve.com)
- 🛠 [Lighthouse - Google](https://developers.google.com/web/tools/lighthouse/#devtools)
- 🛠 [Checkbot browser extension - Checks for web performance best practices](https://www.checkbot.io/)
- 🛠 [Yellow Lab Tools | Online test to help speeding up heavy web pages](https://yellowlab.tools/)
- 🛠 [LogRocket - Measure front-end performance in production apps](https://logrocket.com)
