

export class BasicOscilator {
    public oscillatorNode: OscillatorNode
    public gainNode: GainNode

    constructor(context: AudioContext, oscOptions?: OscillatorOptions, gainOptions?: GainOptions) {

        if (!oscOptions) {
            oscOptions = { frequency: 440, detune: 0, type: "sine" }
        }

        this.oscillatorNode = new OscillatorNode(context, oscOptions);
        this.gainNode = new GainNode(context, gainOptions);
        this.oscillatorNode.connect(this.gainNode);
        this.gainNode.connect(context.destination);
    }

    setWaveType(type: OscillatorType) {
        this.oscillatorNode.type = type;
    }
    setFrequency(frequency: number) {
        let now: number = this.oscillatorNode.context.currentTime;
        this.oscillatorNode.frequency.setValueAtTime(frequency, now);
    }
    setDetune(detune: number) {
        let now: number = this.oscillatorNode.context.currentTime;
        this.oscillatorNode.detune.setValueAtTime(detune, now)
    }
    disconnect() {
        this.oscillatorNode.disconnect(this.gainNode);
    }
    connect() {
        this.oscillatorNode.connect(this.gainNode);
    }
}