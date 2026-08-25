let words: string[] = [
    'AGUACATE',
    'OTORRINOLARINGOLOGIA',
    'TELEFONO',
    'SENSORIAL',
    'ESTUPEFACIENTE',
    'VEHICULAR',
    'COMPUTADORA',
    'PAPAYA',
    'VETERINARIO',
    'ORNITORRINCO',
    'VENTILADOR'
]

export function getRandomWord() {
    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex];
}