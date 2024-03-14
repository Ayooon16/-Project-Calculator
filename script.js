num1 = 0
num2 = 0
operator = ''
document.addEventListener('DOMContentLoaded', () => {
    const operators = document.querySelectorAll('button');
    maindisplay = document.getElementById('maindisplay')
    secondarydisplay = document.getElementById('secondarydisplay')
    volatile = false
    function calculate(operation) {
        switch (operator) {
            case '+':
                maindisplay.innerHTML = parseFloat(num1) + parseFloat(num2)
                break
            case '-':
                maindisplay.innerHTML = parseFloat(num1) - parseFloat(num2)
                break
            case '*':
                maindisplay.innerHTML = parseFloat(num1) * parseFloat(num2)
                break
            case '/':
                if (num2 != 0) { maindisplay.innerHTML = parseFloat(num1) / parseFloat(num2) }
                else {
                    document.getElementById('calculator').remove()
                    document.getElementById('error').innerHTML = "SO YOU'VE CHOSEN DEATH"
                    document.body.style.backgroundColor = 'black'
                }

                break
            /*             case'%':
                        maindisplay.innerHTML = ((parseFloat(num2)/parseFloat(num1))*100)+'%'
                        break */

        }
        if(operation!='='){
            console.log(operation)
        secondarydisplay.innerHTML = maindisplay.innerHTML + operation
        num1 = maindisplay.innerHTML
        num2 = null
        operator = operation
        volatile = true
        maindisplay.style.color = 'gray'}
        else{
            console.log(operation)
            num2 = null
            secondarydisplay.innerHTML=''
            operator = ''

        }
    }
    function calculatesingle(operation) {
        console.log(operation)
        switch (operation) {
            case '√':
                maindisplay.innerHTML = Math.sqrt(parseFloat(maindisplay.innerHTML))
                break
            case '^2':
                maindisplay.innerHTML = maindisplay.innerHTML * maindisplay.innerHTML
                break
            case '1/x':
                maindisplay.innerHTML = 1 / maindisplay.innerHTML
                break
            case '%':
                if(num1!=''){
                maindisplay.innerHTML = ((parseFloat(num1) / 100) * maindisplay.innerHTML)
        }
                break
        }

    }
    operators.forEach(el => el.addEventListener('click', event => {
        if (volatile) {
            maindisplay.innerHTML = ''
            volatile = false
            maindisplay.style.color = 'black'

        }
        if (el.className == "num") {
            maindisplay.innerHTML = maindisplay.innerHTML + el.innerHTML
        }
        if (el.className == "utility") {
            if (el.id == "clear") {
                maindisplay.innerHTML = ''
                secondarydisplay.innerHTML = ''
                num1 = null
                num2 = null
                operator = ''
            }
            if (el.id == "clearcurrent") {
                maindisplay.innerHTML = ''
            }
            if (el.id == "backspace") {
                maindisplay.innerHTML = maindisplay.innerHTML.slice(0, -1)
            }
            if (maindisplay.innerHTML != '') {
                if (el.id == "changesign") {
                    maindisplay.innerHTML = (parseFloat(maindisplay.innerHTML) * (-1))
                }
            }

        }
        if (el.className == 'operators') {
            if (maindisplay.innerHTML != '') {
                if (operator == '') {
                    num1 = maindisplay.innerHTML
                    maindisplay.innerHTML = ''
                    operator = el.innerHTML
                    secondarydisplay.innerHTML = num1 + ' ' + operator
                }
                else {
                    num2 = maindisplay.innerHTML
                    calculate(el.innerHTML)
                }
            }
        }
        else if (el.className == 'singleoperators') {
            if (maindisplay.innerHTML != '') {
                calculatesingle(el.innerHTML)
            }
        }
    }))
})
