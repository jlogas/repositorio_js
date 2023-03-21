
//console.log('hola mundo');

//for (let i = 0; i < 10 ; i++) {
 //   console.log("interacion", i);
//}

//let limite = parseInt(prompt("ingresa numero"))

//for (let i = 0; i < limite; i++) {
 //   console.log(i);
//}

/*let contador =0;
while (contador < 3) {
    console.log(contador);
    contador ++;
}
 console.log("fin del while");*/
/*let contador = parseInt(prompt("pon el contador"))
 do {
    console.log(contador);
    contador ++;
 } while (contador < 10){
    console.log("fin de los finales");
 };

//------------------------ß funciones */



let limite = parseInt(prompt("ingresa numero del curso \n" +
 " 1.Programación Web \n" + 
 " 2.guitarra \n" + 
 " 3.Adobe \n" +
 " 4.Python \n" +
 " 5.Fotografia \n" +
 " 6.Administracion \n" +
 " 7.Creacion de video juegoos \n" +
 " 8.Metodologias Aguiles \n" +
 " 9.Procreate"))

 let factura = 0;
 let precio =0;
 let subs =0;
 
 function comprar(precio,subs) {
    
    for (let i = 0; i < subs; i++) {
        factura += precio;
         console.log(factura);
    }
    return factura;
}

 while((limite > 0) || (limite <10)){
    switch (limite) {       
        case 1:
            subs = parseInt(prompt("cuantas subscripiones"))
            comprar(156000,subs);
            console.log("compraste " + subs + " subscripciones del curso de programacion por " + factura);
            break;
        case 2:
            subs = parseInt(prompt("cuantas subscripiones"))
            comprar(100000,subs);
            console.log("compraste " + subs + " subscripciones del curso de guitarra por " + factura);
            break;
        case 3:
            subs = parseInt(prompt("cuantas subscripiones"))
            comprar(156000,subs);
            console.log("compraste " + subs + " subscripciones del curso de Adobe por " + factura);
            break;
        case 4:
            subs = parseInt(prompt("cuantas subscripiones"))
            comprar(356000,subs);
            console.log("compraste " + subs + " subscripciones del curso de Python por " + factura);
            break;
        case 5:
            subs = parseInt(prompt("cuantas subscripiones"))
            comprar(74000,subs);
            console.log("compraste " + subs + " subscripciones del curso de Fotografia por " + factura);
            break;  
        case 6:
            subs = parseInt(prompt("cuantas subscripiones"))
            comprar(69000,subs);
            console.log("compraste " + subs + " subscripciones del curso de Administracion por " + factura);
            break;
        case 7:
            subs = parseInt(prompt("cuantas subscripiones"))
            comprar(250000,subs);
            console.log("compraste " + subs + " subscripciones del curso de Creacion de video juegoos por " + factura);
            break;  
        case 8:
            subs = parseInt(prompt("cuantas subscripiones"))
            comprar(180000,subs);
            console.log("compraste " + subs + " subscripciones del curso de Metodologias Aguiles por " + factura);
            break; 
        case 9:
            subs = parseInt(prompt("cuantas subscripiones"))
            comprar(390000,subs);
            console.log("compraste " + subs + " subscripciones del curso de Procreate por " + factura);
            break; 
        default:
            alert("selecciona un codigo de curso")
            break;
    }
    limite = parseInt(prompt("ingresa numero del curso \n" +
    " 1.Programación Web \n" + 
    " 2.guitarra \n" + 
    " 3.Adobe \n" +
    " 4.Python \n" +
    " 5.Fotografia \n" +
    " 6.Administracion \n" +
    " 7.Creacion de video juegoos \n" +
    " 8.Metodologias Aguiles \n" +
    " 9.Procreate"))

}




    





