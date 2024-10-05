//Inicializacion de variables
/*let cartasDestapadas = 0;
let temporizador = false;
let pares = 0;
let tiempoInicial = 40;
let timer = 40;
let puntaje = 0;
let movimiento = 0;
let mostrarTiempo = document.getElementById('restante');
let mostrarPuntaje = document.getElementById('movimientos');
let mostrarMovimientos = document.getElementById('movimientos') */
let tarjetasDestapas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;

//apuntando a documento html
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos')
let mostrarTiempo = document.getElementById('tiempo-restante');

//Generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//funciones
function contarTiempo(){
    setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML =`tiempo: ${timer}segundo`;
        if (timerm == 0){
            
        }
},1000);
}

//Funcion principal
function destapar(id){
    
    if(temporizadorn == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapas++;
    console.log(tarjetasDestapas);

    if(tarjetasDestapas == 1){
        //mostrar primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado;


        //Deshabilitar el boton
        tarjeta1.disabled = true;
    }else if(tarjetasDestapas ==2){
        //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;

        //deshabilitar segundo boton
        tarjeta2.disabled = true;

        //incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            //encerrar contador tarjeta destapadas
            tarjetasDestapas = 0;

            //aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
                mostrarMovimientos.innerHTML = 'movimientos: ${movimientos}'
            }
        }else{
            //mostrar momentaneamente valores y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapas = 0;
            },2000);
        }
    }
}

/*function contarTiempo(){
    tiempoRegresivo = setInterval(() =>{
        mostrarTiempo.innerHTML = 'Tiempo restante: ${timer} segundos';
        timer--;
        if(timer < 0){
            clearInterval(tiempoRegresivo);
        }
    }, 1000, timer);
}

function bloquearTarjetas(numeros){
    for(let i = 0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
} */
