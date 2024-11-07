import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../service/pc.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html'

})
export class PcComponent implements OnInit{


  pcs : Pc[];

  constructor(private PcService: PcService,public authService: AuthService ) {
    this.pcs = PcService.listePc();
    }
    
  ngOnInit(): void {
    
  }
  supprimerPc(p: Pc) {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.PcService.supprimerPc(p);


  }
}
