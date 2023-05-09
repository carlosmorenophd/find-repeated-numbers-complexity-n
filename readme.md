# Problem finding repeated numbers in an array using time complexity $\Omicron(n)$

## Algorithm

1. Loop through the array only once in a foreach loop
2. Each number will be stored in a dictionary using this number as the dictionary key
3. A validation is carried out if this key already exists, 1 is added to the value of this key, otherwise a value of 1 is placed
4. In order not to perform another search, it is validated if the dictionary has a value greater than 1, then it is stored in a new dictionary to store only the values that have at least one repeated value.

## Code

```node
numbers.forEach(element => {
        count[element] = count[element] ? count[element] + 1 : 1 
        if(count[element] > 1)
            duplicate[element] = count[element]
    });
```

## Complexity

The elements are executed $n$ times, but the forEach function is completely parallel, so the time is reduced by the number of processors, minus the time it takes for the semaphores to access the count dictionary.

$$\Omicron(\frac{n}{p})$$

## Execution

1. Install nodejs
2. Run command to install dependencies
```
npm i
```
3. Run command to run the server
```
npm runstart
```
4. Perform a POST using curl to the server with the list of numbers as a parameter in json
```bash
url -X POST http://localhost:3000/find_duplicate -H "Content-Type: application/json" -d '{"numbers": [1,2,3,4,5,6,7,1,7 ]}'
```
5. You will get a list with the repeated numbers and the amount of these

```json
{
   "status":200,
   "raw":{
      "duplicate":{
         "1":2,
         "7":2
      }
   },
   "data":{
      "resultStyling":[
         {
            "number":"1",
            "count":2
         },
         {
            "number":"7",
            "count":2
         }
      ]
   }
}
```

# Problema para buscar los números repetidos en un arreglo utilizando una complejidad temporal $\Omicron(n)$

## Algoritmo

1. Recorrer el arreglo solo una vez en un ciclo foreach
2. Cada número se guardará en un diccionario utilizando este número como la llave del diccionario
3. Se realiza una validación si ya existe esta llave se suma 1 al valor de esta llave, de cazo contrario se coloca un valor de 1
4. Para no realizar otra búsqueda, se valida si el diccionario tiene un valor mayor a 1, entonces se almacena en un nuevo diccionario para almacenar solo los valores que tiene al menos un valor repetido.

## Codigo

```node
numbers.forEach(element => {
        count[element] = count[element] ? count[element] + 1 : 1 
        if(count[element] > 1)
            duplicate[element] = count[element]
    });
```
## Complejidad

Los elementos se ejecutan $n$ veces, pero la función forEach es completamente en paralelo, por lo cual el tiempo se ve reducción por el número de procesadores, menos el tiempo que tarda en que los semáforos, permiten acceder al diccionario count

$$\Omicron(\frac{n}{p})$$

## Ejecucion

1. Instalar nodejs
2. Run comando para instar dependencias
```
npm i
```
3. Run comando para ejecutar el servidor
```
npm run start
```
4. Realizar un POST mediante curl al servidor con la lista de números como parámetro en json
```bash
url -X POST http://localhost:3000/find_duplicate -H "Content-Type: application/json" -d '{"numbers": [1,2,3,4,5,6,7,1,7]}'
```
5. Obtendrá una lista con los números repetidos y la cantidad de estos
```json
{
   "status":200,
   "raw":{
      "duplicate":{
         "1":2,
         "7":2
      }
   },
   "data":{
      "resultStyling":[
         {
            "number":"1",
            "count":2
         },
         {
            "number":"7",
            "count":2
         }
      ]
   }
}
```
