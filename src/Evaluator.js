let infixToPostFix = (infix) => {
    let priority = {
        '/': 3,
        '*': 2,
        '+': 0,
        '-': 1
    }

    let postFix = [], operators = [];
    for (let i = 0; i < infix.length; i++) {
        switch (infix[i]) {

            case '-':
                while (priority[operators[operators.length - 1]] >= priority['-'] && operators.length != 0) {
                    postFix.push(operators.pop());
                }
                operators.push('-');
                break;
            case '+':
                while (priority[operators[operators.length - 1]] >= priority['+'] && operators.length != 0) {
                    postFix.push(operators.pop());
                }
                operators.push('+');
                break;
            case '*':
                while (priority[operators[operators.length - 1]] >= priority['*'] && operators.length != 0) {
                    postFix.push(operators.pop());
                }
                operators.push('*');

                break;
            case '/':
                while (priority[operators[operators.length - 1]] >= priority['/'] && operators.length != 0) {
                    postFix.push(operators.pop());
                }
                operators.push('/');

                break;

            default:
                postFix.push(infix[i]);
                break;
        }
    }
    while (operators.length) {
        postFix.push(operators.pop())
    }
    // console.log(postFix)
    // //console.log(operators)
    return postFix;
}

let postFixEvaluator = (postFix) => {
    let answer = [];
    for (let i of postFix) {
        console.log('i=', i);
        if (/[+|*|/|-]/.test(i) && i.length === 1) {
            console.log('The operator is : ', i)
            console.log('The asn array is is : ', answer)
            let b = Number(answer.pop());
            console.log('b=', b)
            let a = Number(answer.pop());
            console.log('a=', a)
            switch (i) {
                case '+':
                    answer.push(a + b);
                    break;
                case '-':
                    answer.push(a - b);
                    break;
                case '*':
                    answer.push(a * b);
                    break;
                case '/':
                    answer.push(a / b);
                    break;
            }
        } else {
            answer.push(i);
        }
    }
    // console.log("The answer is: ", answer);
    return answer[0];
}
let Evaluator = (exp) => {
    let arr = exp.split(/([+|*|/|-])/);
    console.log(arr);
    for (let i in arr) {
        if (!arr[i]) {
            arr.splice(i, 2);
            arr[i] = '-' + arr[i];
        }
    }
    console.log(arr)
    return postFixEvaluator(infixToPostFix(arr));
}
// Evaluator('553-52/02*63+50');

export default Evaluator;
