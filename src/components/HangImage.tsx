//Importamos las imagenes
//Y notese que al nombre de la imagen "image0" nosotros le ponemos en la importacion el nombre que
//querramos ya que es una imagen, no tiene ningun nombre dentro
import image0 from '../assets/0.png';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';

//Recordar que tendriamos que pensar en que vamos a ocupar las nueve imagenes. Vamos a ocupar las nueve y dependiendo de alguna propiedad 
//o la cantidad de intentos mostrar la imagen "1", "2", "3", "4", "5". Asi que importamos todas las imagenes
//Y vaya datito interesante: nombramos las imagenes justamente como su indice seria en el arreglo (su posicion)


//Creamos un arreglo que contenga las imagenes
/*Vamos a ver que no se usa tanto la palabra reservada "let". Para definir variables, se usan mas "const".
Esto es basicamente para lo mismo con la excepcion de que cuando sabemos que no vomos a cambiar el valor de esta variable
entonces se pone "const" porque es mas ligero y mas eficiente que una variable "let". */
const images: string[] = [ //le ponemos explicitamente que es un arreglo de strings
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
]


//Creamos una "interface" para decir como van a lucir nuestras "props" (ver en mi cuaderno los apuntes, pero es basicamente el
//argumento de las funciones (en este caso, la que le sigue abajo))
interface Props {
    imageNumber: number;
}


//aca creamos un argumento llamado "props" (notese nombre distinto a la interface), al cual le pasamos el tipo de dato "Props"
//el de la "interface" (aun no entiendo perfectamente como funciona esto, espero lo veremos pronto)
//Comparese con las imagenes anteriores el argumento de esta funcion, porque aca vamos a aplicar una tecnica llamada "Desestructuracion"
export function HangImage( {imageNumber} :Props ){

    //Hacemos una validacion, para que? no entendi muy bien, disque si el intento ya va por el 10 o 11, siempre sea 9 (esto se puede
    //ver en la web, ya que despues de 9 intentos sigue apareciendo el numero 9)
    if (imageNumber >= 9){
        imageNumber = 9;
    }
    
    
    //dentro del return queremos regresar un elemento html
    return (
        <img 
            src={ images[imageNumber] }  //con esa tal "Desestructuracion", ya no necesito una variable para llamar a la imageNumber 
                                        //(propiedad), sino que puedo llamar aca el "imageNumber" de un solo
            alt="Hang image" 
            style={{ width: 250 }}
        />
    );
    //esta es la manera/sintaxis de llamar a una imagen (usarla) dentro de html. El "alt" sirve como un titulo/texto/nombre para esta imagen
    
}