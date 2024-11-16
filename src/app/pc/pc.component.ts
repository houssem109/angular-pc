import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../service/pc.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html'

})
export class PcComponent implements OnInit{


  pcs!: Pc[];

  constructor(private PcService: PcService,public authService: AuthService ) {
    //this.pcs = PcService.listePc();
    }
    
  ngOnInit(): void {
    this.chargerPc();
    
  }
  chargerPc(){
    this.PcService.listePc().subscribe(pcs => {
      console.log(pcs);
      this.pcs = pcs;
      });
  }
  /* supprimerPc(p: Pc) {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.PcService.supprimerPc(p);


  } */
    supprimerPc(p: Pc)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.PcService.supprimerPc(p.idPC).subscribe(() => {
    console.log("pc supprimé");
    this.chargerPc();
    });
    } 
}
