import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../service/pc.service';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: ``
})
export class RechercheParMarqueComponent implements OnInit {

  
  pcs! : Pc[];
  idMarque! : number;
  marques!: Marque[];
  constructor(private PcService: PcService){
    
    
  }
  ngOnInit(): void {
    this.PcService.listeMarques().
      subscribe(mar => {this.marques = mar._embedded.marques;
      console.log(mar);
      });
    this.pcs=[];
  }
  /* supprimerPc(p: Pc) {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.PcService.supprimerPc(p);
      this.pcs = this.PcService.rechercherParMarque(this.idMarque);

  } */
/*   supprimerPc(p: Pc)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.PcService.supprimerPc(p.idPC).subscribe(() => {
    console.log("pc supprimé");
    this.pcs = this.PcService.rechercherParMarque(this.idMarque);
    });
    }  */

  onChange(){
/* console.log(this.idMarque);
 this.pcs = this.PcService.rechercherParMarque(this.idMarque); */

 this.PcService.rechercherParMarque(this.idMarque).
subscribe(pcs =>{this.pcs=pcs});
}
}
