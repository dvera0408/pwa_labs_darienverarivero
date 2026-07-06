// src/solutions/lab4/hooks/useNotification.js
import { useState, useEffect, useRef, useCallback } from "react";

export function useNotificacion(duracion = 3000) {
    const [notificacion, setNotificacion] = useState(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (!notificacion) return undefined;

        timeoutRef.current = setTimeout(() => {
            setNotificacion(null);
        }, duracion);

        return () => clearTimeout(timeoutRef.current);
    }, [notificacion, duracion]);

    const mostrar = useCallback((mensaje, tipo = "info") => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setNotificacion({ id: Date.now(), mensaje, tipo });
    }, []);

    const cerrar = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setNotificacion(null);
    }, []);

    return { notificacion, mostrar, cerrar };
}
