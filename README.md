# 🛒 LocalStorage - Ejemplo Práctico

Un ejemplo sencillo para enseñar **LocalStorage** con JavaScript usando un formulario de productos.

## 📋 Descripción

Esta aplicación web permite agregar productos (nombre y precio) que se almacenan automáticamente en el **localStorage** del navegador. Los datos persisten incluso después de cerrar y reabrir el navegador.

## 🚀 Características

- ✅ Agregar productos con nombre y precio
- ✅ Mostrar productos en tarjetas visuales
- ✅ Eliminar productos individuales
- ✅ Limpiar toda la lista
- ✅ **Persistencia de datos** con localStorage
- ✅ Diseño responsive
- ✅ Código limpio y comentado para estudiantes

## 📁 Estructura del Proyecto

```
localstorage/
├── index.html      # Estructura HTML
├── estilo.css      # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Documentación
```

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsive
- **JavaScript ES6** - Funcionalidad y localStorage
- **LocalStorage API** - Almacenamiento persistente

## 📖 Conceptos de LocalStorage que se enseñan

### 1. Guardar datos
```javascript
localStorage.setItem('productos', JSON.stringify(productos));
```

### 2. Recuperar datos
```javascript
const productosGuardados = localStorage.getItem('productos');
```

### 3. Eliminar datos
```javascript
localStorage.removeItem('productos');
```

### 4. Convertir datos
```javascript
// Guardar: Objeto → String
JSON.stringify(productos)

// Recuperar: String → Objeto
JSON.parse(productosGuardados)
```

## 🎯 Cómo usar

1. **Abrir** el archivo `index.html` en cualquier navegador
2. **Agregar** productos usando el formulario
3. **Ver** cómo se muestran en tarjetas
4. **Recargar** la página - ¡los productos siguen ahí!
5. **Inspeccionar** el código para entender cómo funciona

## 🛠️ Instalación

1. Clona o descarga este repositorio
2. Abre `index.html` en tu navegador favorito
3. ¡Listo para usar!

No requiere servidor web, funciona directamente desde el sistema de archivos.

## 📚 Para Estudiantes

### Ejercicios sugeridos:

1. **Básico**: Agregar un campo "cantidad" al formulario
2. **Intermedio**: Implementar editar productos existentes
3. **Avanzado**: Agregar categorías y filtros
4. **Desafío**: Implementar importar/exportar datos

### Debugging:

- Abre las **Herramientas de Desarrollador** (F12)
- Ve a la pestaña **Application** → **Local Storage**
- Observa cómo se almacenan los datos

## 🎨 Personalización

### Cambiar el tema:
Modifica las variables CSS en `estilo.css`:

```css
/* Colores principales */
button[type="submit"] {
    background: #007bff; /* Azul por defecto */
}
```

### Agregar más campos:
1. Añade el input en `index.html`
2. Modifica el objeto producto en `script.js`
3. Actualiza la visualización en las tarjetas

## 🌐 Compatibilidad

- ✅ Chrome (desde versión 4)
- ✅ Firefox (desde versión 3.5)
- ✅ Safari (desde versión 4)
- ✅ Edge (todas las versiones)
- ✅ Internet Explorer (desde versión 8)

## 📝 Notas Importantes

- **Límite de almacenamiento**: ~5-10MB por dominio
- **Solo strings**: localStorage solo guarda strings (usar JSON para objetos)
- **Síncrono**: las operaciones son síncronas y pueden bloquear
- **Dominio específico**: los datos solo son accesibles desde el mismo dominio

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Ideas para mejoras:

- [ ] Agregar validaciones más robustas
- [ ] Implementar búsqueda de productos
- [ ] Agregar ordenamiento por precio/nombre
- [ ] Modo oscuro/claro
- [ ] Exportar a JSON/CSV

## 📄 Licencia

Este proyecto es de uso educativo y está disponible bajo licencia MIT.

---

**Creado para enseñar LocalStorage de manera práctica y sencilla** 🎓