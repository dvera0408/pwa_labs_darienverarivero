// src/solutions/lab4/hooks/useLocalStorage.js
import { useState, useEffect } from "react";

export function useLocalStorage(clave, valorInicial) {
    const [valor, setValor] = useState(() => {
        try {
            const guardado = window.localStorage.getItem(clave);
            return guardado !== null ? JSON.parse(guardado) : valorInicial;
        } catch {
            return valorInicial;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(clave, JSON.stringify(valor));
        } catch {
            // localStorage no disponible o cuota excedida: se ignora silenciosamente
        }
    }, [clave, valor]);

    return [valor, setValor];
}
