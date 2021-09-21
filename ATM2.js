class billete {
    constructor(v,c) {
        this.valor = v;
        this.cantidad = c;
    }
}
var caja = [];
caja.push(new billete(50,5));
caja.push(new billete(20,6));
caja.push(new billete(10,15));
caja.push(new billete(5,20));
caja.push(new billete(1,100));

var dinero;
var entregado = [];
var papeles = 0;
var div = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("retirar");
boton.addEventListener("click", retirarDinero);

//comienza la funcion que realiza la ecuasion
function retirarDinero() {
    var t = document.getElementById("cantidad");
    dinero = parseInt(t.value);
    for(var bi of caja) {

        if (dinero > 0) {
            div = Math.floor(dinero/bi.valor);
            
            if(div>bi.cantidad){
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }

            entregado.push(new billete(bi.valor,papeles))
            dinero = dinero - (bi.valor*papeles);
        } 
    }
        
    if(dinero>0) {
        resultado.innerHTML = "soy un cajero pobre y no tengo dinero";
    }else {

        for (var e of entregado) 
        {
            if (e.cantidad > 0) {
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $ " + this.valor + "<br>";
            }
        }
    }
}
