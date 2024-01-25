
export const noteFrequencies = [27.5    , 29.13524, 30.86771, 32.70320, 
                                34.64783, 36.70810, 38.89087, 41.20344, 
                                43.65353, 46.24930, 48.99943, 51.91309, 
                                55      , 58.27047, 61.73541, 65.40639,
                                69.29566, 73.41619, 77.78175, 82.40689, 
                                87.30706, 92.49861, 97.99886, 103.8262, 
                                110.0000, 116.5409, 123.4708, 130.8128, 
                                138.5913, 146.8324, 155.5635, 164.8138, 
                                174.6141, 184.9972, 195.9977, 207.6523, 
                                220     , 233.0819, 246.9417, 261.6256, // MIDDLE C (261.6256) 
                                277.1826, 293.6648, 311.1270, 329.6276, 
                                349.2282, 369.9944, 391.9954, 415.3047, 
                                440     , 466.1638, 493.8833, 523.2511, 
                                554.3653, 587.3295, 622.2540, 659.2551, 
                                698.4565, 739.9888, 783.9909, 830.6094, 
                                880     , 932.3275, 987.7666, 1046.502, 
                                1108.731, 1174.659, 1244.508, 1318.510, 
                                1396.913, 1479.978, 1567.982, 1661.219,
                                1760    , 1864.655, 1975.533, 2093.005, 
                                2217.461, 2349.318, 2489.016, 2637.020, 
                                2793.826, 2959.955, 3135.963, 3322.438, 
                                3520    , 3729.310, 3951.066, 4186.009];

export const blackNoteMap = new Map<number, number>( [
                               [0, 2], 
                               [2, 5],
                               [3, 7],
                               [5, 10],
                               [6, 12],
                               [7, 14],
                               [9, 17],
                               [10, 19],
                               [12, 22],
                               [13, 24],
                               [14, 26],
                               [16, 29],
                               [17, 31],
                               [19, 34],
                               [20, 36],
                               [21, 38],
                               [23, 41],
                               [24, 43],
                               [26, 46],
                               [27, 48],
                               [28, 50],
                               [30, 53],
                               [31, 55],
                               [33, 58],
                               [34, 60],
                               [35, 62],
                               [37, 65],
                               [38, 67],
                               [40, 70],
                               [41, 72],
                               [42, 74],
                               [44, 77],
                               [45, 79],
                               [47, 82],
                               [48, 84],
                               [49, 86] ]);

export const whiteNoteMap = new Map<number, number>([
    [0, 1],
    [1, 3],
    [2, 4],
    [3, 6],
    [4, 8],
    [5, 9],
    [6, 11],
    [7, 13],
    [8, 15],
    [9, 16],
    [10, 18],
    [11, 20],
    [12, 21],
    [13, 23],
    [14, 25],
    [15, 27],
    [16, 28],
    [17, 30],
    [18, 32],
    [19, 33],
    [20, 35],
    [21, 37],
    [22, 39],
    [23, 40],
    [24, 42],
    [25, 44],
    [26, 45],
    [27, 47],
    [28, 49],
    [29, 51],
    [30, 52],
    [31, 54],
    [32, 56],
    [33, 57],
    [34, 59],
    [35, 61],
    [36, 63],
    [37, 64],
    [38, 66],
    [39, 68],
    [40, 69],
    [41, 71],
    [42, 73],
    [43, 75],
    [44, 76],
    [45, 78],
    [46, 80],
    [47, 81],
    [48, 83],
    [49, 85],
    [50, 87],
    [51, 88],
]);

export function getFrequencyFromNote(noteNumber: number) {
    return noteFrequencies[noteNumber - 1];
}

export function calculateFrequency(desiredNote: number, sampleNote: number ) {
    return 2 ** ((desiredNote - sampleNote) / 12)
}