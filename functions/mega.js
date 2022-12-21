export function mega(quant = 6, num = []) {
    quant = +quant
    if (quant < 6 && quant > 60) {
        throw "Quantidade inválida!"
    }

    if(num.length === quant) {
        return num.sort((n1, n2) => n1 - n2)
    }

    const numAleatorio = parseInt(Math.random() * 60) + 1
    if(!num.includes(numAleatorio)) {
        return mega(quant, [...num, numAleatorio])
    } else {
        return mega(quant, num)
    }

}   
