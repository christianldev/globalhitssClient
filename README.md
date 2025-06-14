# GlobalHitss - Gestión de Usuarios

Este proyecto incluye una **API RESTful** (Laravel) y un **cliente web** (Angular) para la administración de usuarios, departamentos y cargos.

---

## Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
  - [API (Laravel)](#api-laravel)
  - [Cliente (Angular)](#cliente-angular)
- [Uso](#uso)
- [Documentación de la API](#documentación-de-la-api)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

---

## Características

- CRUD de usuarios, departamentos y cargos.
- Filtros por departamento y cargo.
- Modales para crear y editar usuarios.
- Documentación OpenAPI y colección Postman.
- Interfaz moderna con Angular Material.

---

## Requisitos

- PHP >= 8.1
- Composer
- Node.js >= 18.x y npm
- Angular 19
- Base de datos SQL Server
- (Opcional) Postman para pruebas de la API

---

## Instalación

### API (Laravel)

[nota]: ruta compartida para documentación de la API: https://documenter.getpostman.com/view/28559865/2sB2x6nsdH

1. Clona el repositorio y entra a la carpeta de la API:

   ```sh
   git clone https://github.com/christianldev/globalhitssAPI
   cd globalhitssAPI
   ```

2. Instala dependencias:

   ```sh
   composer install
   ```

3. Copia el archivo de entorno y configura tu base de datos:

   ```sh
   cp .env.example .env
   # Edita .env con tus credenciales de base de datos
   ```

4. Genera la clave de la aplicación:

   ```sh
   php artisan key:generate
   ```

5. Ejecuta las migraciones:

   ```sh
   php artisan migrate
   ```

6. (Opcional) Si tienes seeders:

   ```sh
   php artisan db:seed
   ```

7. Inicia el servidor:
   ```sh
   php artisan serve
   ```

### Cliente (Angular)

1. Clona el repositorio y entra a la carpeta de la API:

   ```sh
   git clone https://github.com/christianldev/globalhitssClient
   cd globalhitssClient
   ```

2. En otra terminal, entra a la carpeta del cliente:

   ```sh
   cd ../globalhitssClient
   ```

3. Instala dependencias:

   ```sh
   npm install
   ```

4. Inicia la aplicación:
   ```sh
   ng serve
   ```
   Accede a [http://localhost:4200](http://localhost:4200)

---

## Uso

- Accede al cliente web y usa la interfaz para gestionar usuarios, departamentos y cargos.
- Usa los filtros para buscar usuarios por departamento o cargo.
- Utiliza los botones de acción para editar o eliminar usuarios.

---

## Documentación de la API

- La API está documentada en formato **OpenAPI** (`openapi.yaml` en la raíz del proyecto).
- Puedes importar este archivo en **Postman** para probar los endpoints y ver la documentación interactiva.
- También puedes publicar la documentación desde Postman para compartirla.

---

## Estructura del Proyecto

```
globalhitss-api/         # API Laravel
globalhitssfront/        # Cliente Angular
openapi.yaml             # Especificación OpenAPI de la API
README.md
```

---

## Licencia

MIT

---

**Desarrollado por Christian Lopez** - [GitHub](https://github.com/christianldev)
