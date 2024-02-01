

export class VolumeEnvelope {
    public attack: number;
    public decay: number;
    public sustain: number;
    public release: number;
    

    constructor() {
        this.attack = 0.1,
        this.decay = 0.2;
        this.release = 0.3;
        this.sustain = 0.4;
    }

}