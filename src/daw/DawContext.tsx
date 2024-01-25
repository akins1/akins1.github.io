"use client"

import { BasicSynth } from "@/daw-webaudio/basic-synth/BasicSynth";
import { getFrequencyFromNote, whiteNoteMap } from "@/daw-webaudio/utils/NoteFrequencyBindings";

export class DawContext {

    public audioCtx: AudioContext;
    public basicSynth: BasicSynth;

    constructor(options?: AudioContextOptions) {
        //window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext(options);

        this.basicSynth = new BasicSynth(this.audioCtx);
        this.basicSynth.osc.setFrequency(getFrequencyFromNote(1));
        
        this.basicSynth.osc.disconnect();
    }


}