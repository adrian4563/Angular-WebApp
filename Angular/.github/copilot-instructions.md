<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Proyecto Angular - Ejercicios Alternancia

Este proyecto implementa una aplicación web con Angular que cubre 5 ejercicios principales:

### Ejercicios Implementados

1. **Navegación con Angular Router** - Secciones de Inicio, Servicios y Contacto
2. **Formulario con Validación** - Formulario reactivo con validaciones en tiempo real
3. **Galería de Imágenes Interactiva** - Selección dinámica de imágenes
4. **Sistema de Posts Dinámicos** - CRUD de posts para blog
5. **Tema Oscuro/Claro** - Sistema de temas con CSS variables

### Estructura de Componentes

- **AppComponent**: Componente raíz
- **NavigationComponent**: Barra de navegación y cambio de tema
- **HomeComponent**: Página de inicio
- **ContactComponent**: Formulario de contacto
- **ServicesComponent**: Contenedor de galería y blog
- **GalleryComponent**: Galería de imágenes
- **BlogComponent**: Sistema de blog

### Características Técnicas

- Componentes standalone (Angular 14+)
- Formularios reactivos con validación
- Routing dinámico
- Variables CSS para temas
- Estilos SCSS responsive
- Dos-way binding
- Event handling

### Para Ejecutar

```bash
npm install
npm start
```

Aplicación disponible en `http://localhost:4200`

### Para Compilar Producción

```bash
npm run build:prod
```

### Despliegue

- **Vercel**: Conexión automática con GitHub
- **InfinityFree**: Deploy manual FTP con .htaccess configurado

### Notas de Desarrollo

- Usar componentes standalone: `standalone: true`
- Importar módulos necesarios en cada componente
- Mantener estilos en archivos SCSS separados
- Documentar componentes con comentarios JSDoc
- Commits descriptivos con prefijos: `feat:`, `fix:`, `docs:`, `style:`
