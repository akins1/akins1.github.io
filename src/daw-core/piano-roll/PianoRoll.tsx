"use client"

import { useHotkeys } from "react-hotkeys-hook"
import { BlackPianoNote, WhitePianoNote } from "../piano/Piano"
import { DawContext } from "@/daw/DawContext";
import { useContext } from "react";
import { GlobalDawContext } from "@/app/GlobalDawContext";
import { blackNoteMap, getFrequencyFromNote, whiteNoteMap } from "@/daw-webaudio/utils/NoteFrequencyBindings";



export default function PianoRoll() {
    const dawCtx = useContext(GlobalDawContext);
    // const hotkeys = useHotkeys("space", )

    

    return (
    <div className="w-full h-full">
        <div className="l-0" style={{ transform: 'rotate(-90deg)' }}>

            <div className="block w-full">
                <div className="grid grid-cols-51 px-[0.98%]">
                    {[...Array(51)].map((_, i) => {
                        if([1, 4, 8, 11, 15, 18, 22, 25, 29, 32, 36, 39, 43, 46, 50].includes(i)) 
                            return <div></div>
                        else 
                            return <BlackPianoNote 
                                        key={i+1} 
                                        text={i+1} 
                                        onClick={undefined} 
                                        onMouseDown={() => {
                                            dawCtx.basicSynth.osc.setFrequency(getFrequencyFromNote(blackNoteMap.get(i) ?? 0));
                                            dawCtx.basicSynth.osc.connect()
                                        }} 
                                        onMouseUp={() => dawCtx.basicSynth.osc.disconnect()} 
                                    />
                    })}
                </div>
                <div className="grid grid-cols-52">
                    {[...Array(52)].map((_, i) => {
                        return <WhitePianoNote 
                                    key={i + 1} 
                                    text={i + 1} 
                                    onMouseDown={() => {
                                        dawCtx.basicSynth.osc.setFrequency(getFrequencyFromNote(whiteNoteMap.get(i) ?? 0));
                                        dawCtx.basicSynth.osc.connect()
                                    }} 
                                    onMouseUp={() => dawCtx.basicSynth.osc.disconnect()} 
                                    onClick={undefined} 
                                />
                    })}
                </div>
            </div>
        </div>
        <div className="bg-black w-full h-full">



        </div>
    
    </div>
    )
}