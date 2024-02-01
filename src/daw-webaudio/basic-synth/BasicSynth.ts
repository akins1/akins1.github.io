"use client"

import { getFrequencyFromNote } from "../utils/NoteFrequencyBindings";
import { BasicOscilator } from "./BasicOscillator";

export class BasicSynth {

    public osc: BasicOscilator;

    constructor(audioCtx: AudioContext) {
        
        this.osc = new BasicOscilator(audioCtx);
        this.osc.setFrequency(getFrequencyFromNote(1));
        
        this.osc.disconnect();
    }

    
    
    



}