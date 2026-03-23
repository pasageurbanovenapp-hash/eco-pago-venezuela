# Skill: Eco-Pago Mobile-First Optimizer

## Contexto: Feria Científica — Lunes

- **Proyecto**: Eco-Pago Venezuela (Venezuela-en-Ruta-2026)
- **Audiencia**: Jueces (profesores) evaluando en sus móviles
- **Ubicación**: Venezuela (conexiones lentas, 3G común)
- **Deadline**: Lunes 23/03/2026

---

## Reglas de Oro

1. **MOBILE-FIRST**: Todo funciona perfecto en 375px primero
2. **ZERO-BS**: Sin frameworks pesados, sin jQuery
3. **VENEZUELA-OPTIMIZED**: Máximo 150KB total de recursos
4. **JUEZ-READY**: Primera impresión en 2 segundos

### PROHIBIDO
- Google Fonts (usar system fonts)
- Modales que bloqueen en mobile
- Hover effects sin touch alternative
- Imágenes sin WebP con fallback
- Textos justificados

### OBLIGATORIO
- Touch targets mínimo 44×44px
- Contraste mínimo 4.5:1 (AA)
- `target="_blank"` con `rel="noopener"` en enlaces externos
- `font-size: 16px` en inputs (previene zoom iOS)

---

## 📱 1. MOBILE OPTIMIZATION

### Viewport Template
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="theme-color" content="#1a1a2e">
```

### Bottom Navigation (Thumb Zone)
```html
<nav class="bottom-nav" aria-label="Navegación principal">
  <a href="#inicio" class="nav-btn" aria-current="page">
    <span style="font-size:1.25rem">🏠</span>
    <span>Inicio</span>
  </a>
  <a href="#historial" class="nav-btn">
    <span style="font-size:1.25rem">📋</span>
    <span>Historial</span>
  </a>
  <a href="#perfil" class="nav-btn">
    <span style="font-size:1.25rem">👤</span>
    <span>Perfil</span>
  </a>
</nav>

<style>
.bottom-nav {
  position: fixed; bottom: 0; left: 0; right: 0;
  background: #1a1a2e; border-top: 1px solid rgba(255,255,255,0.1);
  display: flex; justify-content: space-around;
  padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom, 0px));
  z-index: 100;
}
.nav-btn {
  display: flex; flex-direction: column; align-items: center;
  gap: 0.25rem; padding: 0.5rem; min-width: 64px; min-height: 44px;
  border: none; background: none; color: #94a3b8;
  font-size: 0.75rem; text-decoration: none;
}
.nav-btn[aria-current="page"] { color: #06b6d4; }
.nav-btn:active { transform: scale(0.95); }
@media (min-width: 640px) { .bottom-nav { display: none; } }
</style>
```

### Touch-Friendly Forms
```css
input, select, textarea {
  width: 100%; padding: 0.875rem;
  border: 2px solid rgba(255,255,255,0.2); border-radius: 0.5rem;
  font-size: 16px; /* Previene zoom automático en iOS */
  background: rgba(255,255,255,0.05); color: white;
  -webkit-text-size-adjust: 100%;
}
input:focus { border-color: #06b6d4; outline: none; }
input::placeholder { color: rgba(255,255,255,0.4); }
```

### Buttons (Touch Target 48px+)
```css
.btn-primary {
  display: block; width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: white; border: none; border-radius: 0.75rem;
  font-size: 1rem; font-weight: 600; min-height: 52px;
  cursor: pointer; transition: transform 0.15s ease;
  margin: 1rem 0;
}
.btn-primary:active { transform: scale(0.97); }
@media (min-width: 640px) { .btn-primary { width: auto; display: inline-block; } }
```

---

## ♿ 2. ACCESSIBILITY (Juez-Ready)

### Skip Navigation Link
```html
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>
<style>
.skip-link {
  position: absolute; top: -40px; left: 0;
  background: #06b6d4; color: white; padding: 8px 16px;
  text-decoration: none; z-index: 9999; border-radius: 0 0 4px 0;
}
.skip-link:focus { top: 0; }
</style>
```

### Focus Indicators
```css
:focus-visible {
  outline: 3px solid #06b6d4;
  outline-offset: 2px;
}
```

### Respect Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### ARIA Live Regions
```html
<div aria-live="polite" aria-atomic="true" class="sr-only" id="announcer"></div>
<script>
function announce(msg) {
  const el = document.getElementById('announcer');
  el.textContent = '';
  setTimeout(() => el.textContent = msg, 100);
}
</script>
<style>.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); }</style>
```

### Accessible Tech Cards
```html
<a href="../slides/archivo.html" target="_blank" rel="noopener" 
   class="tech-card" aria-label="Ver presentación sobre Tecnología (abre en nueva pestaña)">
  <div class="tech-icon blue"><i data-lucide="github"></i></div>
  <h3>Nombre</h3>
  <span class="tech-tag">Categoría</span>
  <p>Descripción.</p>
  <div class="tech-footer">
    <i data-lucide="external-link"></i>
    <span>Abre en nueva pestaña</span>
  </div>
</a>
```

---

## ⚡ 3. PERFORMANCE (Venezuela-Optimized)

### Budget: 150KB Máximo Total
```
HTML:      30KB  (incluye CSS crítico inline)
CSS:       20KB  (inline, no external files)
JS:        15KB  (vanilla, no frameworks)
Imágenes:  50KB  (WebP/SVG, lazy loaded)
Total:    ~115KB (seguro para 3G venezolano)
```

### Service Worker Básico (Offline)
```javascript
// sw.js
const CACHE = 'eco-pago-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
```
```html
<script>if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js');</script>
```

### Lazy Loading Images
```html
<picture>
  <source srcset="img/logo.webp" type="image/webp">
  <img src="img/logo.png" alt="Logo Eco-Pago" width="120" height="40"
       loading="lazy" decoding="async">
</picture>
```

---

## 🚀 Plan de Implementación: 2 Horas

### Hora 1: Mobile-First
1. [10min] Verificar viewport meta en todos los HTML
2. [15min] Implementar bottom-nav en index.html
3. [20min] Ajustar inputs: font-size 16px, padding generoso
4. [10min] Touch targets 48px+ en todos los botones
5. [5min] Test DevTools iPhone SE (375×667)

### Hora 2: Polish y A11y
1. [10min] Añadir skip-link a todos los HTML
2. [10min] Focus indicators visibles
3. [15min] Verificar contraste con WebAIM
4. [15min] Inline CSS crítico, eliminar externos innecesarios
5. [10min] Service worker básico
6. [10min] Test con Network throttling 3G

### Verificación Final
- [ ] Sin scroll horizontal en 375px
- [ ] Touch targets visibles y funcionales
- [ ] Navegación con Tab completa
- [ ] Tiempo de carga <3s en 3G

---

## Workflow

1. **Preguntar**: "¿Qué sección estás optimizando?" (nav, hero, tech-grid, slides)
2. **Aplicar**: Usar templates de esta skill
3. **Testear**: DevTools mobile simulation + 3G throttling
4. **Commit**: Documentar cambios

## Comandos Rápidos

- `/mobile-audit` — Revisar viewport, touch targets, thumb zone
- `/a11y-check` — Auditoría de contraste, ARIA, skip links
- `/perf-fix` — Optimizar CSS/JS inline, lazy loading
- `/feria-ready` — Checklist completo de última hora
