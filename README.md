# Industrialmente

Homepage de Industrialmente construida con Next.js App Router y preparada para despliegue estatico en Firebase Hosting.

## Stack

- Next.js 15.5
- React 19
- TypeScript
- CSS Modules
- Node.js 20.20.2

## Desarrollo

```bash
nvm use
npm install
npm run dev
```

La aplicación quedará disponible en `http://localhost:3000`.

## Contacto

El formulario prepara un correo `mailto:` con los datos diligenciados por el usuario. No requiere backend ni variables de entorno.

## CI/CD y despliegue

- CI en GitHub Actions: `.github/workflows/ci.yml`
- Runtime fijado en `.nvmrc`, `.node-version` y `package.json`
- Despliegue recomendado: Firebase Hosting clasico en el proyecto `industrialmente-2`

Guia operativa: [docs/deployment.md](./docs/deployment.md)

## Activos reutilizados

- Imágenes del proyecto legado en `public/images`
- PDFs comerciales en `public/docs`
- Logo en `public/brand/logo-industrialmente.png`
