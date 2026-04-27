# INSTRUCCIONES PASO A PASO - DESPLIEGUES

## ✅ PARTE 1: GITHUB (Commits Organizados)

### Paso 1.1: Configurar Git localmente
```bash
cd "c:\Users\Desarrolo Web\OneDrive\Escritorio (Privado)\Angular"
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@gmail.com"
```

### Paso 1.2: Crear repositorio en GitHub
1. Ir a github.com y hacer login
2. Hacer clic en "+" > "New repository"
3. Nombre: `Angular-WebApp` (o el que prefieras)
4. Descripción: "Aplicación Angular con componentes interactivos"
5. Seleccionar "Public" (para que sea visible)
6. **NO marcar** "Add a README file", "Add .gitignore" ni "Choose a license"
7. Hacer clic en "Create repository"

### Paso 1.3: Conectar repositorio local con GitHub
Después de crear el repositorio en GitHub, copiaré el comando que aparece.
Será algo como:

```bash
git remote add origin https://github.com/TU_USUARIO/Angular-WebApp.git
git push -u origin main
```

**IMPORTANTE:** Reemplazar:
- `TU_USUARIO` por tu usuario de GitHub
- `Angular-WebApp` por el nombre que elegiste

### Paso 1.4: Crear Pull Requests de las ramas feature

Para cada rama feature (ejercicio1, 2, 3, 4, 5):

```bash
# En GitHub:
# 1. Ir a "Pull Requests"
# 2. Hacer clic en "New pull request"
# 3. Base: main | Compare: feature/ejercicio1_router
# 4. Título: "Feature: Ejercicio 1 - Navegación con Angular Router"
# 5. Click en "Create pull request"
# 6. Hacer clic en "Merge pull request"
# 7. Confirmar merge
```

O desde terminal:
```bash
git checkout main
git pull origin main
git merge feature/ejercicio1_router -m "Merge feature/ejercicio1_router into main"
git push origin main
```

---

## ✅ PARTE 2: VERCEL (Despliegue Automático)

### Paso 2.1: Crear cuenta en Vercel
1. Ir a vercel.com
2. Hacer clic en "Sign Up"
3. Registrarse con GitHub (más fácil)

### Paso 2.2: Desplegar proyecto
1. En Vercel: hacer clic en "Add New Project"
2. Seleccionar el repositorio: "Angular-WebApp"
3. Configurar:
   - **Project Name:** angular-webapp (sin espacios)
   - **Framework Preset:** Angular
   - **Root Directory:** ./Angular (IMPORTANTE)
   - **Build Command:** `npm run build -- --configuration production`
   - **Output Directory:** `dist/angular`
   - **Install Command:** `npm install`

4. Hacer clic en "Deploy"

### Resultado:
- URL pública: https://angular-webapp.vercel.app
- Se actualiza automáticamente con cada push a main

---

## ✅ PARTE 3: INFINITYFREE (Despliegue Manual por FTP)

### Paso 3.1: Crear cuenta en InfinityFree
1. Ir a infinityfree.net
2. Hacer clic en "Sign Up"
3. Completar registro
4. Crear un sitio web

### Paso 3.2: Obtener credenciales FTP
Después de crear el sitio:
1. En el panel de InfinityFree
2. Ir a "Files" o "FTP"
3. Copiar:
   - **Host:** (ejemplo: ftpXX.infinityfree.com)
   - **Username:** (usuario FTP)
   - **Password:** (contraseña FTP)
   - **Directorio:** /htdocs/ o /public_html/

### Paso 3.3: Generar build de producción
```bash
cd "c:\Users\Desarrolo Web\OneDrive\Escritorio (Privado)\Angular"
npm run build -- --configuration production
# Los archivos estarán en: dist/angular/
```

### Paso 3.4: Subir archivos por FTP

**Opción A: Usando FileZilla (más fácil)**
1. Descargar FileZilla (filezilla-project.org)
2. File > Site Manager > New site
3. Completar datos FTP (Host, Username, Password)
4. Conectar
5. Arrastar carpeta `dist/angular/` al servidor
6. Subir contenido a `/public_html/`

**Opción B: Usando Terminal (PowerShell)**
```bash
# No es recomendado, usar FileZilla es más fácil
```

### Resultado:
- URL pública: https://tudominio.infinityfreeapp.com

---

## 📋 RESUMEN FINAL - URLs QUE NECESITARÁS ENTREGAR

- 🔗 **GitHub:** https://github.com/TU_USUARIO/Angular-WebApp
- 🔗 **Vercel:** https://angular-webapp.vercel.app
- 🔗 **InfinityFree:** https://tudominio.infinityfreeapp.com

---

## ⚠️ CHECKLIST ANTES DE ENTREGAR

- [ ] Repositorio GitHub creado y con commits organizados
- [ ] Ramas feature creadas para cada ejercicio
- [ ] Pull requests mergeados a main
- [ ] Vercel conectado y desplegando automáticamente
- [ ] InfinityFree con archivos subidos por FTP
- [ ] Todas las URLs funcionan correctamente
- [ ] Documentación técnica actualizada

