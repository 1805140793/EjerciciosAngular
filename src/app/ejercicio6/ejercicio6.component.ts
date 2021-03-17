import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.component.html',
  styleUrls: ['./ejercicio6.component.css']
})
export class Ejercicio6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','Á','É','Í','Ó','Ú',];
fnEjecutar(){
    let valTexarea1= (<HTMLTextAreaElement>document.getElementById('Textarea1')).value.split('\n');
    let resultado='';
    for(let i=1;i<valTexarea1.length;i++){
        valTexarea1[i]=valTexarea1[i].toUpperCase();
        let con=0;

        for(let j=0;j<this.letras.length;j++){
            let resSerch=valTexarea1[i].search(this.letras[j]);

            console.log(valTexarea1[i],this.letras[j],resSerch);
            if(resSerch>=0){
                con++;
            }
        }
        let conteo=this.conteoLetras(valTexarea1[i]);
        if(con>=27){
            resultado+='SI '+conteo +'\n';
        }else{
            resultado+='NO '+conteo +'\n';
        }


    }
    (<HTMLTextAreaElement>document.getElementById('Textarea2')).value=resultado;
}
conteoLetras(texto:string){
    let con=0;
    for(let i=0;i<texto.length;i++){
        let letra=texto.substr(i,1);
        let NoCont='.,;: !';

        if(NoCont.indexOf(letra)==-1){
            con++;
        }

    }
    return con;
}

}
