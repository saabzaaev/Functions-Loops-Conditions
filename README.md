# <span style="background-color: Yellow; color:black;">Functions-Loops-Conditions
## <span style="color:rgb(0,255,0);">Condition divided by three types </span>
* ### <span style="color:red;">Condition IF/ELSE Statment </span>
![ALT-picture](./image/conditionif.webp)
* ### <span style="color:red;">Condition TERNARY OPERATOR</span>
![ALT-picture](./image/ternari%20operator.webp)
* ### <span style="color:red;">Condition Swich Statment </spans>
![ALT-picture](./image/Skilpundit-tutorial-javascript-switch.png)

## <span style="color: rgb(0,255,0);">Loops divided by three types</span>
* ## <span style="color: rgb(255,0,0);">Loop for</span>
### for (let i=0 ; i<=10 ; i++)
### {
    console.log(i)
}

* ## <span style="color: rgb(255,0,0);">Loop While</span>
### let i = 0
### While (i <= 10)
### {
    i++
    console.log(i)
}

* ## <span style="color: rgb(255,0,0);">Loop Do/While</spanssssss>
### let i = 0
### DO
### {
    i++
    console.log(i)
} While(i <= 10)

## <span style="color: rgb(0,255,0)"> There are 3 ways to write functions in JavaScript</span>
### 1.<span style="color : red;">Function declaration </span>

### function sum(num1 , num2)
### {
    return num1 + num 2
}
### console.log(sum(5 + 5))

### 2.<span style="color: red;">Function Expression

* ### Arrow function
### let arrow = (number) =>{
    return number
}
### console.log(arrow(10))

* Anonymous function
### let anonymous = function (number)
### {
    return number
}
### console.log(anonymous(10))

### 3.<span style="color: red;">IIFE
### function(a , b)
### {
    return a + b
}()