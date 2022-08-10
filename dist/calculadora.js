export class Calculadora {
    constructor() {
        this.historico = [];
    }
    calcular(calculo) {
        let resultado = 0;
        if (calculo.operador === 2 && calculo.segundoNumero === 0)
            return 0;
        switch (calculo.operador) {
            case 0:
                resultado = calculo.primeiroNumero + calculo.segundoNumero;
                this.historico.push(calculo.primeiroNumero + " + " + calculo.segundoNumero + " = " + resultado);
                break;
            case 1:
                resultado = calculo.primeiroNumero - calculo.segundoNumero;
                this.historico.push(calculo.primeiroNumero + " - " + calculo.segundoNumero + " = " + resultado);
                break;
            case 2:
                resultado = calculo.primeiroNumero / calculo.segundoNumero;
                this.historico.push(calculo.primeiroNumero + " / " + calculo.segundoNumero + " = " + resultado);
                break;
            case 3:
                resultado = calculo.primeiroNumero * calculo.segundoNumero;
                this.historico.push(calculo.primeiroNumero + " * " + calculo.segundoNumero + " = " + resultado);
                break;
        }
        this.limparHistorioco();
        return resultado;
    }
    limparHistorioco() {
        if (this.historico.length > 10) {
            this.historico.splice(0, 1);
        }
    }
}
