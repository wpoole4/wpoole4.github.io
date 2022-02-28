window.onload = function()
{
    const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator__keys');
    const display = document.querySelector('.calculator__display');

    keys.addEventListener('click', e => {
        if (e.target.matches('button')){
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
            const previousKeyType = calculator.dataset.previousKeyType;

            Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));

            if (!action){
                if (disaplyedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent;
                } else {
                    display.textContent = displayedNum + keyContent;
                }
                calculator.dataset.previousKey = 'number';
                console.log('number key!');
            }
            if (action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide') {
                    const firstValue = calculator.dataset.firstValue;
                    const operator = calculator.dataset.operator;
                    const secondValue = displayedNum;

                    if (firstValue && operator && previousKeyType !== 'operator'){
                        const calcValue = calculate(firstValue, operator, secondValue);
                        display.textContent = calcValue;

                        calculator.dataset.firstValue = calcValue;
                    } else {
                        calculator.dataset.firstValue = displayedNum;
                    }
                    key.classList.add('is-depressed');
                    calculator.dataset.previousKeyType = 'operator';
                    calculator.dataset.firstValue = displayedNum;
                    calculator.dataset.operator = action;
                    console.log('operator key!');
                }
            if (action === 'decimal'){
                if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator') {
                display.textContent = "0.";
            }
                calculator.dataset.previousKey = 'decimal';
                console.log('decimal key!');
            }
            if (action === 'clear') {
                calculator.dataset.previousKeyType = 'clear';
                console.log('clear key!');
            }
            if (action === 'calculate'){
                let firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const secondValue = displayedNum;
                if (firstValue){
                    if (previousKeyType === 'calculate'){
                        firstValue = displayedNum;
                    }
                    display.textContent = calculate(firstValue, operator, secondValue);
                }
                calculator.dataset.modValue = secondValue;
                calculator.dataset.previousKeyType = 'calculate';
                console.log('equal key!');
            }

        }
    })
    const calculate = (n1, operator, n2) => {
        let result = '';

        if (operator === 'add'){
            result = parseFloat(n1) + parseFloat(n2);
        } else if (operator === 'subtract'){
            result = parseFloat(n1) - parseFloat(n2);
        } else if (operator === 'multiply'){
            result = parseFloat(n1) * parseFloat(n2);
        } else if (operator === 'divide'){
            result = parseFloat(n1) * parseFloat(n2);
        }
        return result;
    }
}