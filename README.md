# Práctica 1 - Integración de API REST con React

## Descripción del proyecto

En esta práctica he desarrollado una aplicación web utilizando **React + TypeScript** que consume la API pública de Star Wars (SWAPI).

La aplicación muestra una lista de personajes en pantalla indicando:

- Nombre  
- Género  
- Año de nacimiento  

Además, la aplicación incluye:

- Paginación para cargar más personajes  
- Control de estado de carga (loading)  
- Control de errores en caso de fallo en la petición  

---

## Instalación y ejecución

Para ejecutar el proyecto en local:

1. Instalar las dependencias:

```bash
npm install
```

2. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

3. Abrir en el navegador:

```
http://localhost:5173/
```

---

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Axios
- SWAPI (https://swapi.dev)

---

## Cómo se ha realizado el proyecto

El proyecto se ha creado con **Vite (React + TypeScript)** y se ha utilizado **Axios** para realizar las peticiones HTTP a la API.

### Funcionamiento de la aplicación

1. Al cargar la página, se ejecuta una petición a la API para obtener los personajes.
2. Los personajes se almacenan en un estado (`useState`).
3. Mientras se obtienen los datos, se muestra un mensaje de carga.
4. Si ocurre algún error, se muestra un mensaje en pantalla.
5. Cuando se pulsa el botón “Siguiente”, se cargan más personajes usando la URL `next` que devuelve la API.
6. Los nuevos personajes se añaden a los ya existentes en el estado.

---

## Organización del proyecto

El código está organizado por carpetas:

- `api/` → Configuración de Axios y conexión con la API.
- `components/Character/` → Componente reutilizable para mostrar cada personaje.
- `types/` → Definición de tipos e interfaces para TypeScript.
- `App.tsx` → Contiene la lógica principal (estados, llamadas a la API y paginación).

---

## Problemas encontrados y soluciones

- **Gestión de la paginación:**  
  La API devuelve una propiedad `next` con la siguiente URL. Fue necesario guardarla en un estado para poder hacer nuevas peticiones.

- **Control del estado de carga:**  
  Se añadió un estado `loading` para evitar mostrar datos incompletos mientras se realizaba la petición.

- **Control de errores:**  
  Se añadió un estado `error` y un bloque `try/catch` para capturar posibles fallos en la petición.

---

## Conclusión

Con esta práctica he comprendido mejor:

- Cómo consumir una API externa desde React.
- Cómo gestionar estados con `useState`.
- Cómo utilizar `useEffect` para ejecutar peticiones al cargar el componente.
- Cómo estructurar un proyecto React separando componentes, lógica y tipos.

Esta práctica me ha ayudado a reforzar conceptos fundamentales de React y TypeScript, además de mejorar la organización del código.