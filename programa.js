function EsFeliz(numero){
    let suma = 0;
    let digitos = numero.toString().split('');
    let a = false
    while(suma !== 1){
        suma = 0;
        for(let i = 0; i < digitos.length;i++){
            suma += Math.pow(parseInt(digitos[i]), 2);
        }
        if(suma === 4){
            a = false;
        }
        if(suma == 1){
            a = true;
        }
        digitos = suma.toString().split('');
    }
    return a;

}
console.log(EsFeliz(19));
console.log(EsFeliz(21));