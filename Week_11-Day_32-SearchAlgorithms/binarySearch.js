const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]

function binarySearch(array, element){
    var min = 0;
    var max = array.length;
    var aux;

    //Minimo no puede ser mas o igual que el máximo
    while(min <= max){
        aux = Math.floor((min + max)/2);
        if (array[aux] === element){
            //Encontre el elemento
            return aux;
        }else if(array[aux] < element){
            //El elemento a buscar está en la segunda mitad del arreglo
            min = aux + 1;
        }else{
            //El elemento a buscar está en la primera mitad del arreglo
            max = aux - 1;
        }
    }
    return -1;
}

const resp = binarySearch(myArray, 12);
console.log(resp);


