// src/data/sourceRegistry.js
import perfilSrc from "../solutions/lab2/Perfil.jsx?raw";
import climaSrc from "../solutions/lab2/Clima.jsx?raw";
import estadoPedidoSrc from "../solutions/lab2/EstadoPedido.jsx?raw";
import mensajeBienvenidaSrc from "../solutions/lab2/MensajeBienvenida.jsx?raw";
import listaHabilidadesSrc from "../solutions/lab2/ListaHabilidades.jsx?raw";
import listaProductosSrc from "../solutions/lab2/ListaProductos.jsx?raw";
import listaTareasSrc from "../solutions/lab2/ListaTareas.jsx?raw";
import tarjetaSrc from "../solutions/lab2/Tarjeta.jsx?raw";
import dashboardSrc from "../solutions/lab2/Dashboard.jsx?raw";
import ej10Src from "../solutions/lab2/Ej10Integracion.jsx?raw";

import alertaSrc from "../solutions/lab3/Alerta.jsx?raw";
import acordeonSrc from "../solutions/lab3/Acordeon.jsx?raw";
import ej1Lab3Src from "../solutions/lab3/Ej1Demo.jsx?raw";
import botonAccionSrc from "../solutions/lab3/BotonAccion.jsx?raw";
import modalSrc from "../solutions/lab3/Modal.jsx?raw";
import contadorSrc from "../solutions/lab3/Contador.jsx?raw";
import ej2Lab3Src from "../solutions/lab3/Ej2Demo.jsx?raw";
import listaContactosSrc from "../solutions/lab3/ListaContactos.jsx?raw";
import formularioEventoSrc from "../solutions/lab3/FormularioEvento.jsx?raw";
import ej5Lab3Src from "../solutions/lab3/Ej5Integracion.jsx?raw";

import visorDocumentoSrc from "../solutions/lab4/VisorDocumento.jsx?raw";
import temporizadorSrc from "../solutions/lab4/TemporizadorPomodoro.jsx?raw";
import configuracionUsuarioSrc from "../solutions/lab4/ConfiguracionUsuario.jsx?raw";
import useLocalStorageSrc from "../solutions/lab4/hooks/useLocalStorage.js?raw";
import useNotificacionSrc from "../solutions/lab4/hooks/useNotificacion.js?raw";
import ej4Lab4Src from "../solutions/lab4/Ej4Demo.jsx?raw";

import notasContextSrc from "../solutions/lab5/context/NotasContext.jsx?raw";
import ej1Lab5Src from "../solutions/lab5/Ej1Demo.jsx?raw";
import layoutSrc from "../solutions/lab5/Layout.jsx?raw";
import inicioSrc from "../solutions/lab5/pages/Inicio.jsx?raw";
import ej2Lab5Src from "../solutions/lab5/Ej2Demo.jsx?raw";
import notasPageSrc from "../solutions/lab5/pages/Notas.jsx?raw";
import detalleNotaSrc from "../solutions/lab5/pages/DetalleNota.jsx?raw";
import ej3Lab5Src from "../solutions/lab5/Ej3Demo.jsx?raw";
import formularioNotaSrc from "../solutions/lab5/FormularioNota.jsx?raw";
import nuevaNotaSrc from "../solutions/lab5/pages/NuevaNota.jsx?raw";
import editarNotaSrc from "../solutions/lab5/pages/EditarNota.jsx?raw";
import ej4Lab5Src from "../solutions/lab5/Ej4Demo.jsx?raw";
import toastContextSrc from "../solutions/lab5/context/ToastContext.jsx?raw";
import misNotasAppSrc from "../solutions/lab5/MisNotasApp.jsx?raw";

// Cada entrada es un arreglo de { nombre, codigo } para mostrar uno o
// varios archivos por ejercicio (tal como se organizarían en src/).
export const sourceRegistry = {
    "lab2-ej1": [{ nombre: "src/components/Perfil.jsx", codigo: perfilSrc }],
    "lab2-ej2": [{ nombre: "src/components/Clima.jsx", codigo: climaSrc }],
    "lab2-ej3": [
        { nombre: "src/components/EstadoPedido.jsx", codigo: estadoPedidoSrc },
    ],
    "lab2-ej4": [
        {
            nombre: "src/components/MensajeBienvenida.jsx",
            codigo: mensajeBienvenidaSrc,
        },
    ],
    "lab2-ej5": [
        {
            nombre: "src/components/ListaHabilidades.jsx",
            codigo: listaHabilidadesSrc,
        },
    ],
    "lab2-ej6": [
        {
            nombre: "src/components/ListaProductos.jsx",
            codigo: listaProductosSrc,
        },
    ],
    "lab2-ej7": [
        { nombre: "src/components/ListaTareas.jsx", codigo: listaTareasSrc },
    ],
    "lab2-ej8": [{ nombre: "src/components/Tarjeta.jsx", codigo: tarjetaSrc }],
    "lab2-ej9": [
        { nombre: "src/components/Dashboard.jsx", codigo: dashboardSrc },
    ],
    "lab2-ej10": [{ nombre: "src/App.jsx", codigo: ej10Src }],

    "lab3-ej1": [
        { nombre: "src/components/Alerta.jsx", codigo: alertaSrc },
        { nombre: "src/components/Acordeon.jsx", codigo: acordeonSrc },
        { nombre: "App.jsx (demo)", codigo: ej1Lab3Src },
    ],
    "lab3-ej2": [
        { nombre: "src/components/BotonAccion.jsx", codigo: botonAccionSrc },
        { nombre: "src/components/Modal.jsx", codigo: modalSrc },
        { nombre: "src/components/Contador.jsx", codigo: contadorSrc },
        { nombre: "App.jsx (demo)", codigo: ej2Lab3Src },
    ],
    "lab3-ej3": [
        {
            nombre: "src/components/ListaContactos.jsx",
            codigo: listaContactosSrc,
        },
    ],
    "lab3-ej4": [
        {
            nombre: "src/components/FormularioEvento.jsx",
            codigo: formularioEventoSrc,
        },
    ],
    "lab3-ej5": [{ nombre: "src/App.jsx", codigo: ej5Lab3Src }],

    "lab4-ej1": [
        {
            nombre: "src/components/VisorDocumento.jsx",
            codigo: visorDocumentoSrc,
        },
    ],
    "lab4-ej2": [
        {
            nombre: "src/components/TemporizadorPomodoro.jsx",
            codigo: temporizadorSrc,
        },
    ],
    "lab4-ej3": [
        {
            nombre: "src/components/ConfiguracionUsuario.jsx",
            codigo: configuracionUsuarioSrc,
        },
    ],
    "lab4-ej4": [
        { nombre: "src/hooks/useLocalStorage.js", codigo: useLocalStorageSrc },
        { nombre: "src/hooks/useNotificacion.js", codigo: useNotificacionSrc },
        { nombre: "App.jsx (demo)", codigo: ej4Lab4Src },
    ],

    "lab5-ej1": [
        { nombre: "src/context/NotasContext.jsx", codigo: notasContextSrc },
        { nombre: "App.jsx (prueba)", codigo: ej1Lab5Src },
    ],
    "lab5-ej2": [
        { nombre: "src/components/Layout.jsx", codigo: layoutSrc },
        { nombre: "src/pages/Inicio.jsx", codigo: inicioSrc },
        { nombre: "App.jsx (rutas)", codigo: ej2Lab5Src },
    ],
    "lab5-ej3": [
        { nombre: "src/pages/Notas.jsx", codigo: notasPageSrc },
        { nombre: "src/pages/DetalleNota.jsx", codigo: detalleNotaSrc },
        { nombre: "App.jsx (demo)", codigo: ej3Lab5Src },
    ],
    "lab5-ej4": [
        {
            nombre: "src/components/FormularioNota.jsx",
            codigo: formularioNotaSrc,
        },
        { nombre: "src/pages/NuevaNota.jsx", codigo: nuevaNotaSrc },
        { nombre: "src/pages/EditarNota.jsx", codigo: editarNotaSrc },
        { nombre: "App.jsx (demo)", codigo: ej4Lab5Src },
    ],
    "lab5-ej5": [
        { nombre: "src/context/ToastContext.jsx", codigo: toastContextSrc },
        { nombre: "App.jsx (app completa)", codigo: misNotasAppSrc },
    ],
};
