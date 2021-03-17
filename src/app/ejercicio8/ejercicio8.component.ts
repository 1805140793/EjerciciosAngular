import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio8',
  templateUrl: './ejercicio8.component.html',
  styleUrls: ['./ejercicio8.component.css']
})
export class Ejercicio8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fnEjecutar() {
    let valTexarea1 = (<HTMLTextAreaElement>document.getElementById('Textarea1')).value.split('\n');
    let resultado = '';
    for (let i = 0; i < valTexarea1.length; i++) {
        for (let index = 0; index < valTexarea1.length; index++) {//todo en mayusculas

            valTexarea1[index] = valTexarea1[index].toUpperCase();
        }

        if (valTexarea1[i].length > 0) {
            resultado+=valTexarea1[i]+'-';
            for (let j = i + 1; j < valTexarea1.length; j++) {

                if (valTexarea1[i].length == valTexarea1[j].length && valTexarea1[j].length > 0) {//se trabaja si las palabras tienen la misma longitud y no son un espacio en blanco
                    let con = 0;
                    console.log(valTexarea1[i], valTexarea1[i].length);
                    for (let k = 0; k < valTexarea1[i].length; k++) {
                        let letr = valTexarea1[i].substr(k, 1);
                        //console.log(valTexarea1[j],letr,valTexarea1[j].indexOf(letr));
                        if (valTexarea1[j].indexOf(letr) >= 0) {
                            valTexarea1[j].replace(letr,'');
                            con++;
                        }
                    }
                    if (valTexarea1[i].length == con) {
                        resultado += valTexarea1[j] + '-';
                        valTexarea1[j]='';
                    }
                }



            }
            resultado += '\n';
        }



    }
    (<HTMLTextAreaElement>document.getElementById('Textarea2')).value = resultado;
}


}
