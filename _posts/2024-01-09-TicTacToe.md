---
layout: post
title: "El reto de calcular el ganador en  \"3 en raya\""                                                                                       
tags: python, katas
---

Últimamente me ha dado de nuevo por hacer katas en CodeWars. En mis años mozos, me encantaba dedicar mis ratos libres a este tipo de ejercicios, porque son entretenidos y me mantienen al día con esto de escribir código, así que ahora, dado que estoy parado (*¡aprovecha! ¡puedes contratarme!*) he vuelto a dedicarme a ello.

Hoy, he empezado y he resuelto un ejercicio donde se pide escribir una función que, dado un tablero de 3 en raya (Tic-Tac-Toe), devuelva el ganador, si existiese, o si el juego está incompleto. Pero vayamos por partes.

### Consideraciones previas

1. Los tableros vienen forma de matriz, es decir, una lista compuesta de listas, bidimensional.
2. Los valores asignados son `X == 1`, `O == 2` y `0` para celdas vacías.
3. Hay que comprobar tanto vertical, como diagonal y horizontal.
4. Los valores resultantes deben ser: `1` si gana `X`, `2` si gana `O`, `0` si no hay ganador, `-1` si no ha terminado.

### ¿Buscar un patrón o calcular el resultado?

La forma ¿fácil? de hacerlo, es buscar unos patrones concretos, hacer una matriz con los posibles patrones, y comprobar cada línea posible (horizontal, vertical, diagonal) ese patrón. Factible si tenemos un tablero de 3x3, porque las combinaciones posibles son limitadas, pero si el tablero crece, el patrón también. Así que es más interesante calcularlo.

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

$$
\begin{align*}
    & \sqrt[n]{(Celda1 \times Celda2 \times Celda3 ... \times n}
\end{align*}
$$

Donde $$ n $$ es el número de celdas en horizontal. Ya que, el valor de todas las celdas tiene que ser el mismo, la raíz cúbica (para el caso de TicTacToe) del producto de todos los valores de la fila, debe ser igual al valor de la fila.

Es decir, para una fila donde encontramos tres $$ 1 $$ (el valor asignado a `X`), el resultado de la formula debe ser $$ 1 $$.

$$
\begin{align*}
    & \sqrt[3]{(1 \times 1 \times 1)} = 1
\end{align*}
$$

Esta formula solo podemos aplicarla en casos donde **no existe ningún valor vacío** en la fila. Es decir, no hay ningún $$ 0 $$. Por lo que lo primero que comprobaremos será, que no haya ningún cero en la fila. En cuyo caso, se invalida.

```python
    if 0 not in line:
        # Aplicamos la fórmula calculando el producto de los valores de la fila, y calculamos su raíz cúbica.
        value = reduce(lambda x, y: x * y, line) ** (1/3)

        # Dado que el valor debe ser exacto, diferenciamos entre el valor resultante y los decimales del producto.
        dec, val = math.modf(value)
        if dec == 0.0:
            return int(val)
```

Con esto, ya tendríamos la mitad del trabajo hecho, siendo capaces de calcular si hay un ganador, en cada una de las líneas posibles. No obstante, esto solo nos sirve para calcular con las filas, en horizontal. ¿Pero qué pasa con las columnas?

### Añadimos las columnas y las diagonales

Al tratarse de una matriz, podemos rotarla 90º, extraer las filas, y añadirlas debajo. De esta forma, pasamos de tener una matriz de 3x3 a tener una de 3x6, pero que incluye todas las combinaciones horizontales y verticales de la original. El mismo proceso para las diagonales, pero en este caso, recorriendo la matriz y extrayendo los valores concretos. En este caso es asumible, dado que es pequeña, pero no sería lo más óptimo si esto creciese.

```python
# Rotación de la matriz 90º
vertical_board = [x for x in zip(*board)]

# Cálculo de las diagonales
diag_board_right = [[board[0][0], board[1][1], board[2][2]]]
diag_board_left = [[board[0][2], board[1][1], board[2][0]]]

# Sumatoria de las listas y matriz resultantes, con la original
board = board + vertical_board + diag_board_left + diag_board_right
```

Este sería el primer paso de nuestra función. La matriz resultante (3x8) será la entrada para la fórmula que vimos en el punto anterior.


### ¿Y si el tablero está incompleto...?

En caso de que el proceso anterior no haya determinado un ganador, bien por espacios vacíos o bien porque no haya ningún caso de victoria por parte de ninguna de las partes, tenemos que determinar cuál es el estado, exactamente.

Para ello, comprobaremos que no haya ningún hueco vacío en el tablero.

```python
lines = [0 in line for line in board]
return -1 if True in lines else 0
```

### Código completo

El resultado final, con comentarios. Dicho sea de paso, que revisar esto para documentarlo y escribir este post, me ha llevado a varias correcciones, refactorizaciones, y en general, evitar sobreingeniería.

```python
import math
from functools import reduce

def is_solved(board):
    # Get vertical lines
    vertical_board = [x for x in zip(*board)]
    
    # Get diagonal lines
    diag_board_right = [[board[0][0], board[1][1], board[2][2]]]
    diag_board_left = [[board[0][2], board[1][1], board[2][0]]]

    # Put all lines together
    board = board + vertical_board + diag_board_left + diag_board_right
    
    # Check for winner, by finding the fist line with a winning combination.
    for line in board:
        if 0 not in line:
            # Each winning combination should be [1,1,1] or [2,2,2], to 
            # chech this we can get the product of each list, and find
            # their cubic root. 
            #
            # Example:
            #
            # (1*1*1) ** (1/3) is equal to 1.0, is valid.
            # (2*2*2) ** (1/3) is equal to 2.0, is valid.
            # (1*2*1) ** (1/3) is equal to 1.26, is not valid.
            
            value = reduce(lambda x, y: x * y, line) ** (1/3)
            
            # Winning combination value should be exact, its decimals should be 0.            
            dec, val = math.modf(value)
            
            if dec == 0.0:
                return int(val)
    
    # If there is no winner, the board could be incomplete or cat's game. 
    # To find this, we're going to check how many empty spaces (0) are 
    # into the board. If any, it will return -1 (unfinished game, no winner yet).
    # Else, it will return 0 (cat's game).

    lines = [0 in line for line in board]
    return -1 if True in lines else 0
```