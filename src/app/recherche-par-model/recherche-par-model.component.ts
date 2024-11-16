import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../service/pc.service';
@Component({
  selector: 'app-recherche-par-model',
  templateUrl: './recherche-par-model.component.html',
  styles: ``
})
export class RechercheParModelComponent implements OnInit {
  
  pcs!: Pc[];
 
  allPcs!: Pc[];
searchTerm!: string;

  constructor(private PcService: PcService){};
  
  ngOnInit(): void {
    //this.pcs = this.PcService.listePc();
    this.PcService.listePc().subscribe(pcs => {
      console.log(pcs);
      this.pcs = pcs;
      });
  }
  onKeyUp(filterText : string){

   
      this.pcs = this.allPcs.filter(item =>
        item.modele.toLowerCase().includes(filterText.toLowerCase())
      );
   
  }
}
