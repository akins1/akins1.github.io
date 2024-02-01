import { calculateFrequency } from "@/daw-webaudio/utils/NoteFrequencyBindings";

export default class Sampler {
    public audioCtx: AudioContext;
    private sample?: AudioBuffer;
    private gainNode: GainNode;

    constructor(audioCtx: AudioContext, sample?: AudioBuffer) {
        this.audioCtx = audioCtx;
        this.sample = sample;
        this.gainNode = audioCtx.createGain();
        this.gainNode.connect(audioCtx.destination);
    }

    playSample(sample: AudioBuffer, sampleNote: number, desiredNote: number) {
        const source = this.audioCtx.createBufferSource();
        source.buffer = sample;
        source.playbackRate.value = calculateFrequency(desiredNote, sampleNote);
        source.connect(this.gainNode);
        source.start();
        
        // TODO release resources onended
        source.onended = null;

        console.log("Playing audio");
    }
}