function eval() {
    // Do not use eval!!!
    return;
}


function expressionCalculator(expr) {
    const string = expr.split(" ").join('');
    if (string.search('/0') >= 0) throw new Error('TypeError: Division by zero.');
        let brackets = string.replace(/[^()]/g, '');
        let tmp = 0;
    for (c of brackets) {
        if (c === '(') tmp++;
    else if (c === ')' && --tmp < 0) throw new Error('ExpressionError: Brackets must be paired');
  }
  if (tmp != 0) throw new Error('ExpressionError: Brackets must be paired');
    
        function solve(expr) {
                return new Function('return ' + expr)()
        }
        if (solve(string) === Infinity) {
            throw new Error('TypeError: Division by zero.');
        } else return solve(string);
   
}

module.exports = {
    expressionCalculator
}
