// src/solutions/lab5/hooks/useToast.jsx
import { useContext } from "react";
import { ToastContext } from "../context/ToastContext.jsx";

export function useToast() {
    const mostrar = useContext(ToastContext);
    return mostrar ?? (() => {});
}
