# COMANDOS RÁPIDOS - REFERENCIA

## Comandos Git

```bash
# Ver estado
git status

# Ver ramas
git branch -a

# Ver historial
git log --oneline -10

# Ver historial gráfico
git log --oneline --graph --all

# Cambiar de rama
git checkout nombre-rama

# Crear nueva rama
git checkout -b nombre-rama

# Hacer commit
git commit -m "mensaje descriptivo"

# Push a GitHub
git push origin main

# Pull desde GitHub
git pull origin main

# Mergear rama a main
git checkout main
git merge feature/ejercicio1
git push origin main
```

## Comandos Angular

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start
# o
ng serve

# Build de desarrollo
npm run build

# Build de producción
npm run build -- --configuration production
# o
ng build --configuration production

# Ejecutar tests
npm test

# Build y servir
npm run build && npm start
```

## Comandos PowerShell (Windows)

```bash
# Navegar a carpeta
cd "c:\Users\Desarrolo Web\OneDrive\Escritorio (Privado)\Angular"

# Listar archivos
ls
dir

# Ver contenido de carpeta
explorer .

# Ejecutar archivo
.\dist\index.html
```

## URLs Importantes

- 📖 Angular Docs: https://angular.io/docs
- 📖 Vercel Docs: https://vercel.com/docs
- 📖 GitHub Docs: https://docs.github.com
- 📦 npm Registry: https://www.npmjs.com

## Troubleshooting

### Error: "ng command not found"
```bash
npm install -g @angular/cli
```

### Error: "port already in use"
```bash
# Liberar puerto 4200
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

### Error: Build falla
```bash
# Limpiar caché
rm -r node_modules package-lock.json
npm install
npm run build
```

### Error: No puede conectar a GitHub
```bash
# Verificar configuración
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@gmail.com"

# Verificar credenciales
git config --global --list
```

