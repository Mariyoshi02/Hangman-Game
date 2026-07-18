
//Aca haremos la funcion para cambiar la palabra y que sea seleccionada
//aleatoriamente. Notese que el archivo es "ts" porque es una funcion
//que queremos nos regrese una palabra. No es "tsx" porque no es
//(y aca no vamos a usar) un componente de React

//Vamos a crear un arreglo de las palabras que la funcion va a usar
//para mandarlas aleatoriamente. Recuerdo, que existen las "api"
//que se podrian usar en casos asi para no crear el arreglo de 
//palabras manualmente. Pero ahorita no usaremos eso, solo queria
//recordar eso

//Aca podemos poner la cantidad de palabras que nosotros querramos
let words: string[] = [
    'AGUACATE',
    'OTORRINOLARINGOLOGIA',
    'TELEFONO',
    'SENSORIAL',
    'ESTUPEFACIENTE',
    'VEHICULAR',
    'COMPUTADORA',
    'PAPAYA',
    'AGUACATE',
    'VETERINARIO',
    'ORNITORRINCO',
    'VENTILADOR'
]
//Un dato interesante, como el arreglo no lo estamos exportando,
//pero la funcion si, las palabras solo se van a usar dentro
//de esta funcion, y lo que devuelva la funcion es lo que se 
//va a usar en la App.tsx

export function getRandomWord() {
    
    //Pero como esto nos devuelve numeros decimales, al
    //Math.random lo tendriamos que meter dentro de un
    //Math.floor que nos daria solo el numero entero de este
    const randomIndex = Math.floor( Math.random() * words.length );
    //Aca gracias al "* words.length", aca Math.random solo 
    //agarraria los numeros de los indice del arreglo de words,
    //ademas, Math.floor nos quitaria todos los decimales,
    //dejandonos solo con los numeros enteros.

    //La nueva variable randomIndex basicamente almacenaria el 
    //numero random entre 0 y la cantidad de indices en el arreglo
    
    
    return words[randomIndex];
    //Y aca estariamos mandandole el arreglo, con el nuevo indice
    //con numero random como return. Para usar esa palabra con un indice
    //random en nuestro App.tsx
}