# Skill: UX/UI Enhancer para Página Web Estática

## Proyecto: Venezuela-en-Ruta / Eco-Pago

### Archivos del sitio web
- `web/index.html` — Landing page principal
- `web/styles.css` — Estilos globales
- `web/script.js` — JavaScript (partículas, animaciones, interacciones)
- `slides/*.html` — Presentaciones educativas (GitHub, Supabase, Render, VS Code, etc.)

---

## 🔍 UX AUDIT CHECKLIST

### 1. PRIMERA IMPRESIÓN (5 segundos)
- [ ] ¿El propósito del sitio es inmediatamente claro?
- [ ] ¿Hay un CTA visible arriba del fold?
- [ ] ¿La carga es perceptiblemente rápida (<3s)?

### 2. NAVEGACIÓN
- [ ] Menú funcional en desktop y mobile
- [ ] Footer con información esencial
- [ ] target="_blank" en enlaces externos (UX móvil)

### 3. TIPOGRAFÍA
- [ ] Máximo 2 familias de fuentes
- [ ] Tamaño base mínimo 16px
- [ ] Contraste 4.5:1 mínimo (7:1 preferido)

### 4. ACCESIBILIDAD
- [ ] Alt text en todas las imágenes
- [ ] Labels en todos los formularios
- [ ] Focus indicators visibles
- [ ] HTML semántico (nav, main, section, article, footer)

### 5. PERFORMANCE VISUAL
- [ ] Animaciones CSS preferidas sobre JS
- [ ] Reducir motion para `prefers-reduced-motion`
- [ ] Lazy loading de recursos externos

### 6. CONFIANZA
- [ ] HTTPS (dato público)
- [ ] Fecha de actualización visible
- [ ] Contacto claro

---

## 🎨 Design Tokens del Proyecto

```css
:root {
  /* Colores del tema azulado oscuro */
  --color-bg-primary: #1a1a2e;
  --color-bg-secondary: #16213e;
  --color-bg-tertiary: #0f3460;
  --color-cyan: #06b6d4;
  --color-orange: #f97316;
  --color-green: #10b981;
  --color-purple: #a855f7;
  --color-text: #ffffff;
  --color-text-muted: #94a3b8;

  /* Tipografía */
  --font-primary: 'Inter', system-ui, sans-serif;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;

  /* Espaciado 8px base */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15);
  --shadow-glow-cyan: 0 0 20px rgba(6, 182, 212, 0.4);

  /* Bordes */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;

  /* Transiciones */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}
```

---

## 🧩 Componentes Recomendados

### Navbar Flotante
```html
<nav class="floating-nav" role="navigation" aria-label="Navegación principal">
  <div class="nav-content">
    <a href="#" class="logo" aria-label="Inicio">
      <i data-lucide="bus"></i>
      <span>ENRUTADOS</span>
    </a>
    <button class="menu-toggle" id="menuToggle" aria-expanded="false" 
            aria-controls="navLinks" aria-label="Abrir menú">
      <span></span><span></span><span></span>
    </button>
    <div class="nav-links" id="navLinks" hidden>
      <a href="#problema">Problema</a>
      <a href="#como-funciona">Cómo Funciona</a>
      <a href="#solucion">Solución</a>
      <a href="#tecnologia">Tecnología</a>
      <a href="#faq">FAQ</a>
    </div>
  </div>
</nav>
```

### Tech Card Accesible
```html
<a href="../slides/archivo.html" target="_blank" class="tech-card" 
   aria-label="Ver más sobre Tecnología">
  <div class="tech-icon blue"><i data-lucide="github"></i></div>
  <h3>Nombre</h3>
  <span class="tech-tag">Categoría</span>
  <p>Descripción breve.</p>
  <div class="tech-footer">
    <i data-lucide="external-link"></i>
    <span>Abre en nueva pestaña</span>
  </div>
</a>
```

### Botón con Microinteracción
```html
<button class="btn-primary" 
        style="transition: transform 0.15s ease, box-shadow 0.15s ease;">
  <span>ENTRAR</span>
  <style>
    .btn-primary:hover { transform: scale(1.02); box-shadow: var(--shadow-glow-cyan); }
    .btn-primary:focus-visible { outline: 2px solid var(--color-cyan); outline-offset: 2px; }
    @media (prefers-reduced-motion: reduce) {
      .btn-primary { transition: none; }
    }
  </style>
</button>
```

---

## 📱 Mejoras UX Móvil Implementadas

| Mejora | Archivo | Estado |
|--------|---------|--------|
| `target="_blank"` en enlaces a slides | `web/index.html` | ✅ Implementado |
| Viewport meta tag | Todos los slides HTML | Verificar |
| Touch targets mínimo 44x44px | `web/styles.css` | Verificar |
| Lazy loading de iframes | `slides/*.html` | Pendiente |
| Prevención de scroll horizontal | `web/styles.css` | Verificar |

---

## ♿ Checklist de Accesibilidad

- [ ] `role="navigation"` y `aria-label` en `<nav>`
- [ ] `aria-expanded` y `aria-controls` en menú móvil
- [ ] `alt` en todas las imágenes (o `aria-hidden="true"` si son decorativas)
- [ ] Contraste mínimo 4.5:1 para texto pequeño, 3:1 para texto grande
- [ ] `focus-visible` visible en todos los interactivos
- [ ] `lang="es"` en `<html>`
- [ ] Skip link para saltar navegación

---

## 🚀 Workflow de Mejora UX

1. **Analizar**: Revisar HTML semántico, contraste, navegación móvil
2. **Diagnosticar**: Listar problemas con prioridad (crítico > alto > medio > bajo)
3. **Implementar**: Aplicar cambios en CSS/HTML
4. **Testear**: Verificar en móvil y desktop
5. **Commit**: Documentar cambios

## Comandos de Uso

- `/analyze` — Revisar UX de un archivo HTML específico
- `/fix-colors` — Ajustar paleta de colores para consistencia
- `/improve-mobile` — Optimizar experiencia móvil
- `/a11y` — Auditoría de accesibilidad
- `/component [tipo]` — Generar componente HTML/CSS
