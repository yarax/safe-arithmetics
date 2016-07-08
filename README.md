# Safe arithmetics

Small lib to perform arithmetic operations on Maybe types in JavaScript

# Usage

```
import {div, sum, multiply, round} from 'safe-arithmetics';
div("str", 0); // null aka Nothing
div(4, 2); // 2
sum([null, '5', '_', 2]); // 7
round(null); // null
round(4.2); // 4
```
