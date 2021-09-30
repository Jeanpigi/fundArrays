#  Fundamentos y manipulación de arrays en Javascript

## ForEach

Permite recorrer cada uno de los elementos de un array. El método forEach() ejecuta la función indicada una vez por cada elemento del array.

## Mutable o Inmutable

Mutable es un tipo de variable que se puede cambiar, en Javascript, solo los Objetos y los arrays son mutables, no los valores prmitivos. Pueden hacer que el nombre de una variable apunte a un nuevo valor, por lo tanto el valor anterior todavía se mantiene en la memoria, de ahi la necesidad del garbage collection.

Un objeto mutable es un objeto cuyo estado puede modificarse después de su creación. Mientras los inmutables son los objetos cuyo estado no se puede modificar una vez creado el objeto.

## Map

Map es un método inmutable  por lo tanto no modifica el array original, sino que crea uno nuevo, además respeta el tamaño original del array de volviendo la misma cantidad de elementos.

## Filter

Permite filtrar el array original en base a una condición, los que la cumplan estarán en el nuevo array creado. Por lo tanto el nuevo array es inmutable y el nuevo array que es creado solo puede contener:

1) cero coincidencias
2) todas las coincidencias
3) algunas coincidencias

Nota: Nunca contendrá más coincidencias que el tamaño original del array original.

## Reduce

Permite reducir a un solo valor y no devuelve otro array, simplemente un valor. Se utiliza para hacer cálculos a partir de la información de un array. En su composición, tiene como argumentos al acumulador y elemento.


## Some

Es el método que devuelve true o false si al menos un elemento cumple con la condición.

## Every

Es el método que devuelve true o false si todos los elementos del array cumplen con la condición.

## Find and FindIndex

El método find() devuelve el primer elemento del array que cumpla con la condificón dada, en caso de no existir ningún elemento devuelve undefined. Mientras el método findIndex() es una variante de find que devuelve la posición donde se encuentra el primer elemento.

## Includes

Este método determina si un elemento se encuentra  o se incluye en el array devolviendo valor true o false. De igual manera el método posse un segunda parámetro que determina la posición donde comenzar a buscar el valor en el array.

## Join

Es un método que une todos los elementos de un array en una cadena  y devuelve esta cadena. Se puede pasar cualquier elemento como separador.

## Split

Es el método que divide un objeto de tipo string en un array de cadenas mediante separación de la cadena en subcadenas.

## Concat

Es el método que permite fusionar arrays. Este es inmutable lo cual significa que no modifica el array, solo crea uno nuevo.

## Flat

Es el método que permite de manipular arrays que tiene otros arrays dentro de otro arrays.

## Sort

Es un método que va a mutar y permite ordenar cambiando el la ogranización del array. Se ordena deacuerdo a la tabla ASCII

# Run 

If you just want to run, you can use a command which is:

```
node index.js
```

or

```
deno run index.js
```


# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


# Authors
* **Jean Pierre Giovanni Arenas Ortiz**

# License
[MIT](https://choosealicense.com/licenses/mit/)