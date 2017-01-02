# Safe arithmetics

A small library to perform safe arithmetic operations in JavaScript.
The behavior is similar to Maybe monad: if the value can be applied to function - it applies, otherwise it's `null` (Nothing)
No `NaN` or unexpected results anymore

# Usage

`npm i safe-arithm`

```javascript
import {div, sum, multiply, round} from 'safe-arithm';
div("str", 0); // null aka Nothing
div(4, 2); // 2
sum([null, '5', '_', 2]); // 7
round(undefined); // null
round(4.2); // 4
```
