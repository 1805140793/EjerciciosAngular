import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 tabla: any = [];
 TablaOk: boolean = false;
 abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];


verificarTabla() {
    let TablaCapmlea = true;
    for (var i = 1; i <= 26; i++) {
        this.tabla[i - 1] = (<HTMLInputElement>document.getElementById('txtletra' + i)).value;
        if (this.tabla[i - 1].length == 0) {
            alert('Complete todas las entradas');
            TablaCapmlea = false;
            break;

        }

    }
    if (TablaCapmlea) {
        let duplicados = false;
        for (var i = 0; i < 26; i++) {
            for (var j = i + 1; j < 26; j++) {
                if (this.tabla[i] == this.tabla[j]) {
                    alert('Valores Duplicados');
                    duplicados = true;
                    break;
                }
            }
        }
        if (!duplicados) {
            this.TablaOk = true;
            //(<HTMLButtonElement>document.getElementById('btnVerificar')).disabled = true;
        }
    }

    console.log(this.tabla);


}


clickEncriptar() {
    this.verificarTabla();
    if (this.TablaOk) {//cuando la tabla es valida
        let llave: any = [];
        let txtLLaveVal = (<HTMLInputElement>document.getElementById('txtLlave')).value;
        let txtMensajeVal = (<HTMLInputElement>document.getElementById('txtMensaje')).value;
       // alert(txtMensajeVal);
        let resultado = '';
        if (txtLLaveVal.length > 1) {
            llave = txtLLaveVal.split(' ');
            let indxLlave = 0;
            for (var i = 0; i < txtMensajeVal.length; i++) {
                let letra = txtMensajeVal.substr(i, 1);
                if (letra != ' ') {
                    let puesto = this.buscarIndxLetra(letra);
                    //console.log(puesto);
                    let recorrido = puesto + Number(llave[indxLlave]);
                    //console.log('recorido', recorrido, llave[indxLlave], indxLlave)
                    if (recorrido >= 26) {
                        recorrido = recorrido - 26;
                    }
                    resultado += this.tabla[recorrido];

                    if (indxLlave < llave.length - 1) {
                        indxLlave++;
                    } else {
                        indxLlave = 0;
                    }
                }


            }

            //alert(resultado);
            (<HTMLDivElement>document.getElementById('DivResultado')).innerHTML='<h3>Encriptado= '+resultado+' <h3>';




        } else {
            alert('No se a añadido una llave');
        }
    }


}

clickDesencriptar() {
    this.verificarTabla();
    if (this.TablaOk) {
        let llave: any = [];
        let txtLLaveVal = (<HTMLInputElement>document.getElementById('txtLlave')).value;
        let txtMensajeVal = (<HTMLInputElement>document.getElementById('txtMensaje')).value;
       // alert(txtMensajeVal);
        let resultado = '';
        if (txtLLaveVal.length > 1) {
            llave = txtLLaveVal.split(' ');
            let indxLlave = 0;
            for (var i = 0; i < txtMensajeVal.length; i++) {
                let letra = txtMensajeVal.substr(i, 1);
                if (letra != ' ') {
                    let puesto = this.buscarIndxLetra2(letra);
                    console.log(puesto);
                    let recorrido = puesto - Number(llave[indxLlave]);
                    console.log('recorido', recorrido, llave[indxLlave], indxLlave)
                    if (recorrido <0) {
                        recorrido = recorrido + 26;
                    }
                    resultado += this.abecedario[recorrido];

                    if (indxLlave < llave.length - 1) {
                        indxLlave++;
                    } else {
                        indxLlave = 0;
                    }
                }


            }

            //alert(resultado);
            (<HTMLDivElement>document.getElementById('DivResultado')).innerHTML='<h3>Desencriptado= '+resultado+' <h3>';




        } else {
            alert('No se a añadido una llave');
        }
    }


}

buscarIndxLetra(Letra: string) {
    //console.log('dentro', Letra);
    for (let index = 0; index < this.abecedario.length; index++) {
        if (this.abecedario[index] == Letra.toUpperCase()) {
            return Number(index);
        }

    }
}

buscarIndxLetra2(Letra: string) {
   // console.log('dentro', Letra);
    for (let index = 0; index < this.tabla.length; index++) {

        if (this.tabla[index].toUpperCase() == Letra.toUpperCase()) {
            return Number(index);
        }

    }
}


}
