# Guía de Despliegues - Proyecto Angular

## Estado Actual
✅ Desarrollo completado con todos los ejercicios (1-5)
✅ Repositorio Git inicializado en local
✅ Rama `main` lista para despliegues

## Pasos para Completar los Despliegues

### PARTE 1: GitHub - Organización con Ramas Feature

El proyecto ya tiene el commit inicial. Ahora necesitas:

1. **Crear cuenta en GitHub** (si no la tienes)
2. **Crear repositorio en GitHub**
   - Nombre: `Angular-WebApp` (o similar)
   - Privado o público según prefieras
   - NO inicializar con README

3. **Conectar repositorio local con GitHub**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/Angular-WebApp.git
   git push -u origin main
   ```

4. **Estructura de ramas recomendada** (ya están creadas localmente):
   - `feature/ejercicio1_router` - Navegación con Angular Router
   - `feature/ejercicio2_formulario` - Formulario con validación
   - `feature/ejercicio3_galeria` - Galería de imágenes
   - `feature/ejercicio4_blog` - Sistema de posts
   - `feature/ejercicio5_tema` - Modo oscuro/claro

5. **Crear Pull Requests desde cada rama hacia main**

### PARTE 2: Despliegue Automático en Vercel

1. **Crear cuenta en Vercel** (vercel.com)
2. **Conectar con GitHub**
   - En Vercel: "New Project"
   - Seleccionar repositorio
   - Framework: Angular
   - Configurar:
     - Build Command: `npm run build` o `ng build`
     - Output Directory: `dist/angular`

3. **Vercel desplegará automáticamente cada cambio en main**

### PARTE 3: Despliegue Manual en InfinityFree

1. **Crear cuenta en InfinityFree** (infinityfree.net)
2. **Generar build de producción**
   ```bash
   npm run build -- --configuration production
   # o
   ng build --configuration production
   ```

3. **Archivos a subir por FTP**
   - Contenido de `dist/angular/`
   - Subir a carpeta `public_html/` del servidor

4. **Configurar .htaccess** (ya incluido en el proyecto)

## Próximos Pasos Necesarios

1. ✅ Repositorio Git local: LISTO
2. ⏳ Crear repositorio en GitHub
3. ⏳ Push a GitHub
4. ⏳ Configurar Vercel
5. ⏳ Configurar InfinityFree

## Comandos Rápidos

```bash
# Ver estado
git status
git log --oneline

# Push a GitHub
git push origin main

# Build para producción
npm run build -- --configuration production

# Build para desarrollo
npm run build
```

## URLs Finales que Necesitarás

- 🔗 GitHub: https://github.com/TU_USUARIO/Angular-WebApp
- 🔗 Vercel: https://tu-proyecto.vercel.app
- 🔗 InfinityFree: https://tudominio.infinityfreeapp.com

