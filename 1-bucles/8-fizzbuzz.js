// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS


for(var i = 1; i <= 100; i++){
    var e = i%3 & i%5 == 0;
    var b = i%5 == 0;
    var c = i%3 == 0;
    console.log( e? "GEEKS HUBS":  b? "HUBS": c? "GEEKS": i);
}