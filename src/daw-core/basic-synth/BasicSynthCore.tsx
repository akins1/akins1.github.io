"use client"

import { BasicSynth } from "@/daw-webaudio/basic-synth/BasicSynth";
import { blackNoteMap, getFrequencyFromNote, whiteNoteMap } from "@/daw-webaudio/utils/NoteFrequencyBindings";
import { DawContext } from "@/daw/DawContext";
import { BlackPianoNote, WhitePianoNote } from "../piano/Piano";
import { useContext, useEffect, useState } from "react";
import { GlobalDawContext } from "@/app/GlobalDawContext";
import { VolumeEnvelope } from "./Envelope";


export default function BasicSynthCore() {
    // const basicSynth = new BasicSynth(new AudioContext());
    const dawCtx = useContext(GlobalDawContext);
    
    const envelope = new VolumeEnvelope();
    const [gain, setGain] = useState(0.3);
    const [sustainGain, setSustainGain] = useState(0.1);
    const [analyzer, setAnalyzer] = useState<AnalyserNode>(dawCtx.audioCtx.createAnalyser());

    const keyRefs = 

    useEffect(() => {
        dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(0.04, dawCtx.audioCtx.currentTime); 
        
        
        // dawCtx.basicSynth.osc.oscillatorNode.start();
    }, []);

    const GetCurrentTime = () => {
        return dawCtx.audioCtx.currentTime;
    }


    return (
    <>
    <div>
        This week's assignment was built upon last week's assignment. Every note on this keyboard shares a single Oscillator Node. 
        I went through a lot of debugging trying to get a volume envelope working, but I was only able to figure out the attack and release parameters.
        I realize now that it would be most efficient/easier to develop if I dynamically create and delete Oscillator Node when every key is played. 
        It would make it possible to add decay and sustain parameters to every keypress and also allow for multiple notes to play/resonate at the same time.
        This would require a good amount of refactoring. 
    </div>
    <div className="p-3 space-y-4 rounded-sm w-5/6 text-white block bg-slate-500">
        <div>Basic Synth</div>
        <div className="space-x-1">
        <label>Wave Type</label>
            <select className="text-black" onChange={(e) => dawCtx.basicSynth.osc.setWaveType(e.target.value as OscillatorType)} >
                <option value="sine">Sine</option>
                <option value="square">Square</option>
                <option value="sawtooth">Sawtooth</option>
                <option value="triangle">Triangle</option>
            </select>
            {/* <label>Gain</label>
            <input 
                onChange={(e) => setGain(parseInt(e.target.value))} 
                type="range" 
                min="0" 
                max="0.1" 
                step="0.01"
            ></input>
            <div>
                Sustain Gain
                <input 
                    onChange={(e) => setSustainGain(parseInt(e.target.value))} 
                    type="range" 
                    min="0" 
                    max="2" 
                    step="0.01"
                ></input>

            </div> */}
            <div>
                Attack
                <input 
                    onChange={(e) => envelope.attack = parseFloat(e.target.value)} 
                    type="range" 
                    min="0" 
                    max="2" 
                    step="0.01"
                ></input>

            </div>
            {/* <div>
                Decay
                <input 
                    onChange={(e) => envelope.decay = parseInt(e.target.value)} 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01"
                ></input>

            </div>
            <div>
                Sustain
                <input 
                    onChange={(e) => envelope.sustain = parseInt(e.target.value)} 
                    
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01"
                ></input>

            </div> */}
            <div>
                Release
                <input 
                    onChange={(e) => envelope.release = parseFloat(e.target.value)} 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01"
                ></input>

            </div>

        </div>

        
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
                                        try {
                                            dawCtx.basicSynth.osc.connect()
                                            dawCtx.basicSynth.osc.oscillatorNode.start();
                                        } catch (e) {}
                                        
                                        //dawCtx.basicSynth.osc.gainNode.gain.cancelScheduledValues(dawCtx.audioCtx.currentTime);

                                        //dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(0, dawCtx.audioCtx.currentTime);

                                        const currentGain = dawCtx.basicSynth.osc.gainNode.gain.value
                                        console.log("onmouseup gain: ", currentGain);
                                        dawCtx.basicSynth.osc.gainNode.gain.cancelScheduledValues(dawCtx.audioCtx.currentTime);
                                        dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(currentGain, dawCtx.audioCtx.currentTime);

                                        dawCtx.basicSynth.osc.setFrequency(getFrequencyFromNote(blackNoteMap.get(i) ?? 0));
                                        //dawCtx.basicSynth.osc.connect()
                                        console.log("Attack: ", envelope.attack);
                                        dawCtx.basicSynth.osc.gainNode.gain.linearRampToValueAtTime(gain, dawCtx.audioCtx.currentTime + envelope.attack)

                                        //dawCtx.basicSynth.osc.gainNode.gain.linearRampToValueAtTime(sustainGain, dawCtx.audioCtx.currentTime + envelope.attack + envelope.decay)
                                        //dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(currentGain, dawCtx.audioCtx.currentTime + envelope.attack + envelope.decay + envelope.sustain);
                                        //setTimeout(() => {
                                            //dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(0, dawCtx.audioCtx.currentTime + 1)
                                        //})
                                        

                                    }} 
                                    onMouseUp={() => {

                                        
                                        const currentGain = dawCtx.basicSynth.osc.gainNode.gain.value
                                        console.log("onmouseup gain: ", currentGain);
                                        dawCtx.basicSynth.osc.gainNode.gain.cancelScheduledValues(dawCtx.audioCtx.currentTime);
                                        dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(currentGain, dawCtx.audioCtx.currentTime);
                                        //
                                        
                                        dawCtx.basicSynth.osc.gainNode.gain.linearRampToValueAtTime(0, dawCtx.audioCtx.currentTime + envelope.release)

                                        //dawCtx.basicSynth.osc.gainNode.gain.setTargetAtTime(0, dawCtx.audioCtx.currentTime, 1);
                                        //dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(0, dawCtx.audioCtx.currentTime + 1);
                                        // setTimeout(() => {
                                        //     dawCtx.basicSynth.osc.oscillatorNode.disconnect()
                                        // }, 1000);
                                        //dawCtx.basicSynth.osc.gainNode.gain.cancelScheduledValues(dawCtx.audioCtx.currentTime);
                                        console.log("release");
                                    }} 
                                />
                    
                })}
            </div>
            <div className="grid grid-cols-52">
                
                {[...Array(52)].map((_, i) => {
                    return <WhitePianoNote 
                                key={i + 1} 
                                text={i + 1} 
                                onMouseDown={() => {
                                    try {
                                        dawCtx.basicSynth.osc.connect()
                                        dawCtx.basicSynth.osc.oscillatorNode.start();
                                    } catch (e) {}
                                    
                                    //dawCtx.basicSynth.osc.gainNode.gain.cancelScheduledValues(dawCtx.audioCtx.currentTime);

                                    //dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(0, dawCtx.audioCtx.currentTime);

                                    const currentGain = dawCtx.basicSynth.osc.gainNode.gain.value
                                    console.log("onmouseup gain: ", currentGain);
                                    dawCtx.basicSynth.osc.gainNode.gain.cancelScheduledValues(dawCtx.audioCtx.currentTime);
                                    dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(currentGain, dawCtx.audioCtx.currentTime);

                                    dawCtx.basicSynth.osc.setFrequency(getFrequencyFromNote(whiteNoteMap.get(i) ?? 0));
                                    //dawCtx.basicSynth.osc.connect()
                                    console.log("Attack: ", envelope.attack);
                                    dawCtx.basicSynth.osc.gainNode.gain.linearRampToValueAtTime(gain, dawCtx.audioCtx.currentTime + envelope.attack)
                                    
                                }} 
                                onMouseUp={() => {
                                    
                                    const currentGain = dawCtx.basicSynth.osc.gainNode.gain.value
                                        console.log("onmouseup gain: ", currentGain);
                                        dawCtx.basicSynth.osc.gainNode.gain.cancelScheduledValues(dawCtx.audioCtx.currentTime);
                                        dawCtx.basicSynth.osc.gainNode.gain.setValueAtTime(currentGain, dawCtx.audioCtx.currentTime);
                                        //
                                        
                                        dawCtx.basicSynth.osc.gainNode.gain.linearRampToValueAtTime(0, dawCtx.audioCtx.currentTime + envelope.release)
                                }}
                                onClick={undefined} 
                            />
                })}
            </div>
        </div>
    </div>    


     
    </>
    );

}