// src/data/labsData.js
export const labs = [
    {
        id: "lab2",
        numero: 2,
        color: "var(--lab2)",
        titulo: "Primeros Componentes con JSX — Fundamentos de React",
        subtitulo: '(Documento origen: "Laboratorio 4 PWA")',
        descripcion:
            "Componentes funcionales con expresiones dinámicas, renderizado condicional (ternario y &&), listas con map/key y organización en archivos independientes.",
        tipo: "componentes",
        exercises: [
            {
                id: "ej1",
                titulo: "Ejercicio 1 — Perfil",
                resumen:
                    "Componente con expresiones dinámicas dentro de llaves.",
                key: "lab2-ej1",
            },
            {
                id: "ej2",
                titulo: "Ejercicio 2 — Clima",
                resumen:
                    "Lógica previa al return: sensación térmica y recomendación.",
                key: "lab2-ej2",
            },
            {
                id: "ej3",
                titulo: "Ejercicio 3 — Estado de Pedido",
                resumen:
                    "Ternarios anidados y operador && para mensajes según estado.",
                key: "lab2-ej3",
            },
            {
                id: "ej4",
                titulo: "Ejercicio 4 — Mensaje de Bienvenida",
                resumen: "Renderizado condicional con early return.",
                key: "lab2-ej4",
            },
            {
                id: "ej5",
                titulo: "Ejercicio 5 — Lista de Habilidades",
                resumen: "Lista simple con map() y key.",
                key: "lab2-ej5",
            },
            {
                id: "ej6",
                titulo: "Ejercicio 6 — Lista de Productos",
                resumen: "Tabla renderizada a partir de un array de objetos.",
                key: "lab2-ej6",
            },
            {
                id: "ej7",
                titulo: "Ejercicio 7 — Lista de Tareas",
                resumen:
                    "Combinación de filter y map para separar pendientes/completadas.",
                key: "lab2-ej7",
            },
            {
                id: "ej8",
                titulo: "Ejercicio 8 — Tarjeta",
                resumen:
                    "Componente de tarjeta reutilizable con badges de etiquetas.",
                key: "lab2-ej8",
            },
            {
                id: "ej9",
                titulo: "Ejercicio 9 — Dashboard",
                resumen:
                    "Fragment con múltiples secciones: usuario, notificaciones y actividad.",
                key: "lab2-ej9",
            },
            {
                id: "ej10",
                titulo: "Ejercicio 10 — Integración en App.jsx",
                resumen:
                    "Todos los componentes anteriores organizados en una sola vista.",
                key: "lab2-ej10",
            },
        ],
    },
    {
        id: "lab3",
        numero: 3,
        color: "var(--lab3)",
        titulo: "Componentes Interactivos con Props y Estado",
        subtitulo: "",
        descripcion:
            "Props con destructuring y valores por defecto, children, useState, manejo de eventos, inmutabilidad y formularios controlados.",
        tipo: "componentes",
        exercises: [
            {
                id: "ej1",
                titulo: "Ejercicio 1 — Alerta y Acordeón",
                resumen:
                    "Componentes reutilizables con props, children y estado propio.",
                key: "lab3-ej1",
            },
            {
                id: "ej2",
                titulo: "Ejercicio 2 — Modal, Botón y Contador",
                resumen: "Composición, estado y eventos entre componentes.",
                key: "lab3-ej2",
            },
            {
                id: "ej3",
                titulo: "Ejercicio 3 — Lista de Contactos",
                resumen:
                    "Lista dinámica con búsqueda, favoritos e inmutabilidad.",
                key: "lab3-ej3",
            },
            {
                id: "ej4",
                titulo: "Ejercicio 4 — Formulario de Evento",
                resumen:
                    "Formulario controlado con validación y estado de errores.",
                key: "lab3-ej4",
            },
            {
                id: "ej5",
                titulo: "Ejercicio 5 — Integración final",
                resumen:
                    "Todos los componentes organizados en acordeones independientes.",
                key: "lab3-ej5",
            },
        ],
    },
    {
        id: "lab4",
        numero: 4,
        color: "var(--lab4)",
        titulo: "Efectos Secundarios, Persistencia y Custom Hooks",
        subtitulo: "",
        descripcion:
            "useEffect, funciones de limpieza, sincronización con localStorage y creación de custom hooks reutilizables.",
        tipo: "componentes",
        exercises: [
            {
                id: "ej1",
                titulo: "Ejercicio 1 — Visor de Documento",
                resumen:
                    "Sincronización con document.title y función de limpieza.",
                key: "lab4-ej1",
            },
            {
                id: "ej2",
                titulo: "Ejercicio 2 — Temporizador Pomodoro",
                resumen: "Cuenta regresiva con setInterval controlado.",
                key: "lab4-ej2",
            },
            {
                id: "ej3",
                titulo: "Ejercicio 3 — Configuración de Usuario",
                resumen: "Persistencia manual con localStorage y try/catch.",
                key: "lab4-ej3",
            },
            {
                id: "ej4",
                titulo: "Ejercicio 4 — Custom Hooks",
                resumen: "useLocalStorage y useNotificacion reutilizables.",
                key: "lab4-ej4",
            },
        ],
    },
    {
        id: "lab5",
        numero: 5,
        color: "var(--lab5)",
        titulo: "Estado Global y Navegación Multipágina",
        subtitulo: "",
        descripcion:
            "Context API + useReducer para estado global, React Router con layout compartido, rutas dinámicas y navegación programática.",
        tipo: "app",
        exercises: [
            {
                id: "ej1",
                titulo: "Ejercicio 1 — Context API + useReducer",
                resumen: "NotasContext con reducer y hook useNotas.",
                key: "lab5-ej1",
            },
            {
                id: "ej2",
                titulo: "Ejercicio 2 — Rutas y Layout compartido",
                resumen: "Layout con NavLink, Outlet y estructura de rutas.",
                key: "lab5-ej2",
            },
            {
                id: "ej3",
                titulo: "Ejercicio 3 — Lista con filtros y Detalle",
                resumen:
                    "Filtros combinados, notas fijadas y vista de detalle con useParams.",
                key: "lab5-ej3",
            },
            {
                id: "ej4",
                titulo: "Ejercicio 4 — Formularios y navegación programática",
                resumen:
                    "NuevaNota, EditarNota y FormularioNota compartido con useNavigate.",
                key: "lab5-ej4",
            },
            {
                id: "ej5",
                titulo: "Ejercicio 5 — Integración final (app completa)",
                resumen:
                    "Aplicación MisNotas completa: persistencia, notificaciones y estilos.",
                key: "lab5-ej5",
            },
        ],
    },
];

export const getLab = (labId) => labs.find((l) => l.id === labId);
export const getExercise = (labId, exId) => {
    const lab = getLab(labId);
    return lab?.exercises.find((e) => e.id === exId);
};
