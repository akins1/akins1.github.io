"use client"

import { useEffect, useState } from "react"


export function WhitePianoNote({ text, onClick, onMouseDown, onMouseUp }: { text: number | string, onClick: any, onMouseDown: any, onMouseUp: any }) {

    const [isActive, setIsActive] = useState(false);
    const active = "border-slate-200 text-black bg-slate-200";
    const inactive = "border-slate-950 text-black bg-white";

    useEffect(() => {
        if (onMouseDown === undefined) onMouseDown = () => undefined;
        if (onMouseUp === undefined) onMouseUp = () => undefined;
        if (onClick === undefined) onClick = () => undefined;
    }, []);

    return (
    <div 
        onMouseDown={() => { onMouseDown(); setIsActive(true) }} 
        onMouseUp={() => { onMouseUp(); setIsActive(false) }} 
        onClick={onClick}
        className={`h-16 select-none border text-xxs ${isActive ? active : inactive}`}
    >
        {/* {text} */}
    </div>
    )
}

export function BlackPianoNote({ text, onClick, onMouseDown, onMouseUp }: { text: number | string, onClick: any, onMouseDown: any, onMouseUp: any }) {

    const [isActive, setIsActive] = useState(false);
    const active = "border-slate-800 text-white bg-slate-800";
    const inactive = "border-slate-50 text-white bg-black";

    return (
    <div 
        onMouseDown={() => { onMouseDown(); setIsActive(true) }} 
        onMouseUp={() => { onMouseUp(); setIsActive(false) }} 
        onClick={onClick} 
        className={`mt-7 relative h-16 select-none text-xxs border ${isActive ? active : inactive}`}>
        {/* {text} */}
    </div>
    )
}