# Práctica 1 - Integración API REST con React

## Descripción

En esta práctica he creado una aplicación con React y TypeScript que consume la API pública de Star Wars (SWAPI).

La aplicación muestra una lista de personajes con:

- Nombre
- Género
- Año de nacimiento

También tiene paginación para poder cargar más personajes y control de estados de carga y error.

---

## Instalación y ejecución

1. Instalar dependencias:

npm install

2. Ejecutar el proyecto:

npm run dev

3. Abrir en el navegador:

http://localhost:5173/

---

## Tecnologías usadas

- React
- TypeScript
- Vite
- Axios

---

## Funcionamiento

Cuando se carga la página se hace una petición a la API para obtener los personajes.

Los datos se guardan en un estado con useState.

Mientras se cargan los datos se muestra un mensaje de "Cargando...".

Si hay algún error en la petición se muestra un mensaje en pantalla.

Cuando se pulsa el botón "Siguiente" se cargan más personajes usando la URL que devuelve la API en la propiedad next.

---

## Organización del proyecto

El proyecto está organizado en carpetas:

- api → configuración de Axios
- components → componente para mostrar cada personaje
- types → definición de tipos para TypeScript
- App.tsx → lógica principal

---

## Conclusión

Con esta práctica he aprendido a consumir una API desde React, a usar useEffect para hacer peticiones y a gestionar estados como loading y error.

También me ha servido para practicar la organización del proyecto y el uso de TypeScript.