"use client"

import { DawContext } from "@/daw/DawContext";
import { BlackPianoNote, WhitePianoNote } from "../piano/Piano";
import { blackNoteMap, calculateFrequency, getFrequencyFromNote, whiteNoteMap } from "@/daw-webaudio/utils/NoteFrequencyBindings";
import { useEffect, useState } from "react";




export default function BasicSamplerCore ({ dawCtx }: { dawCtx: DawContext }) {

    const [audioSample, setAudioSample] = useState<AudioBuffer>(new AudioBuffer({length: 1, sampleRate: 44100}));
    const [gainNode, setGainNode] = useState<GainNode>(dawCtx.audioCtx.createGain());
    const [fileInputText, setFileInputText] = useState("Select Audio File");

    useEffect(() => {
        gainNode.connect(dawCtx.audioCtx.destination);

    }, []);

    const getAudioData = (files: FileList | null) => {
        if (files == null)
            return null;
        
        setFileInputText("Loading...")

        files[0].arrayBuffer().then((buffer) => { 
            dawCtx.audioCtx.decodeAudioData(buffer).then((audioBuffer) => {
                setAudioSample(audioBuffer);
                
            });
            
            console.log("Set buffer"); 
        })

        setFileInputText(files[0].name);
    };

    const playSample = (sample: AudioBuffer, sampleNote: number, desiredNote: number) => {
        const source = dawCtx.audioCtx.createBufferSource();
        source.buffer = sample;
        source.playbackRate.value = calculateFrequency(desiredNote, sampleNote);
        source.connect(gainNode);
        source.start();
        
        // TODO release resources onended

        console.log("Playing audio");
    }

    return (
        <div className="p-3 space-y-4 rounded-sm w-5/6 text-white block bg-slate-500">
        <div>Basic Sampler</div>
        <div className="space-x-1">
            Select a sound and click on the piano keys!
        </div>
        

        {/* <label htmlFor="sample">{fileInputText}</label> */}
        <input id="sample" type="file" accept="audio/*" onChange={(e) => getAudioData(e.target.files)} />

        <label>Gain</label>
        <input 
               onChange={(e) => gainNode.gain.setValueAtTime(parseFloat(e.target.value), dawCtx.audioCtx.currentTime)} 
               type="range" 
               
               min="0" 
               max="1" 
               step="0.01"
        ></input>
        {/* Synth */}
        <div className="w-full grid grid-rows-2">
            <div className="relative grid grid-cols-51 px-[0.98%]">
                {[...Array(51)].map((e, i) => {

                    if([1, 4, 8, 11, 15, 18, 22, 25, 29, 32, 36, 39, 43, 46, 50].includes(i)) 
                        return <div></div>
                    
                    else 
                        return <BlackPianoNote 
                                    key={i+1} 
                                    text={i+1} 
                                    onClick={() => playSample(audioSample, 52, blackNoteMap.get(i) ?? 1)} 
                                    onMouseDown={() => null} 
                                    onMouseUp={() => null}  
                                />
                    
                })}
            </div>
            <div className="relative top-0 row-span-2 grid grid-cols-52">
                
                {[...Array(52)].map((_, i) => {
                    return <WhitePianoNote 
                        key={i + 1}
                        text={i + 1}
                        onClick={() => playSample(audioSample, 52, whiteNoteMap.get(i) ?? 1)} 
                        onMouseDown={() => null} 
                        onMouseUp={() => null}                            
                        />
                })}
            </div>
        </div>
    </div>   
    );
}