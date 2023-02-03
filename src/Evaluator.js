let Evaluator = (exp) => {
    let arr = exp.split(/([+|*|/|-])/);
    console.log(arr);
    while (arr.length != 1) {
        let a = Number(arr.shift());
        let operator = arr.shift();
        let b = Number(arr.shift());
        switch (operator) {
            case '+':
                arr.unshift(a + b);
                break;
            case '-':
                arr.unshift(a - b);
                break;
            case '*':
                arr.unshift(a * b);
                break;
            case '/':
                arr.unshift(a / b);
                break;
        }
    }
    console.log(arr[0]);
    return arr[0];
}
Evaluator('553-52/02*63+50');

export default Evaluator;
