"use client"

import { BasicOscilator } from "./BasicOscillator";

export class BasicSynth {

    public osc: BasicOscilator;

    constructor(audioCtx: AudioContext) {
        
        this.osc = new BasicOscilator(audioCtx);
    }

    
    
    



}