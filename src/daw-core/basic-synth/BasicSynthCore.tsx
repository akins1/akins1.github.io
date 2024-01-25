"use client"

import { BasicSynth } from "@/daw-webaudio/basic-synth/BasicSynth";
import { blackNoteMap, getFrequencyFromNote, whiteNoteMap } from "@/daw-webaudio/utils/NoteFrequencyBindings";
import { DawContext } from "@/daw/DawContext";
import { BlackPianoNote, WhitePianoNote } from "../piano/Piano";
import { useEffect, useState } from "react";


export default function BasicSynthCore({ dawCtx }: { dawCtx: DawContext }) {
    // const basicSynth = new BasicSynth(new AudioContext());
    const [analyzer, setAnalyzer] = useState<AnalyserNode>(dawCtx.audioCtx.createAnalyser());


    useEffect(() => {
        dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(0.04, dawCtx.audioCtx.currentTime); 
        // dawCtx.basicSynth.osc.oscillatorNode.start();
    }, []);


    return (
    <>
    <div className="p-3 space-y-4 rounded-sm w-5/6 text-white block bg-slate-500">
        <div>Basic Synth</div>
        <div className="space-y-1">
            <div>Click Start then play the piano!</div>
            <button className="bg-slate-700 p-2 rounded-md text-slate-400" onClick={() => dawCtx.basicSynth.osc.oscillatorNode.start()}>Start</button>
            {/* <button className="bg-slate-700 p-2 rounded-md text-slate-400" onClick={() => dawCtx.basicSynth.osc.connect()}>Connect</button> */}
            {/* <button className="bg-slate-700 p-2 rounded-md text-slate-400" onClick={() => dawCtx.basicSynth.osc.disconnect()}>Disconnect</button> */}
        </div>

        <label>Wave Type</label>
        <select className="text-black" onChange={(e) => dawCtx.basicSynth.osc.setWaveType(e.target.value as OscillatorType)} >
            <option value="sine">Sine</option>
            <option value="square">Square</option>
            <option value="sawtooth">Sawtooth</option>
            <option value="triangle">Triangle</option>
        </select>

        {/* <label>Frequency</label> */}
        {/* <input onChange={(e) => dawCtx.basicSynth.osc.setFrequency(parseInt(e.target.value))} type="range" min="1" max="440"></input> */}

        <label>Gain</label>
        <input 
               onChange={(e) => dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(parseFloat(e.target.value), dawCtx.audioCtx.currentTime)} 
               type="range" 
                
               min="0" 
               max="0.1" 
               step="0.01"
        ></input>
        {/* Synth */}
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


     
    </>
    );

}