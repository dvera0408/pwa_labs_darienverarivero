// src/solutions/lab5/hooks/useNotas.jsx
import { useContext } from "react";
import { NotasContext } from "../context/NotasContext.jsx";

export function useNotas() {
    const context = useContext(NotasContext);
    if (!context) {
        throw new Error("useNotas debe usarse dentro de un NotasProvider");
    }
    return context;
}
