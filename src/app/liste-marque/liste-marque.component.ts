import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { PcService } from '../service/pc.service';

@Component({
  selector: 'app-liste-marque',
  templateUrl: './liste-marque.component.html',
  styles: ``
})
export class ListeMarqueComponent implements OnInit {

  ajout:boolean=true;

  marques!: Marque[];
  updatedMar: Marque = { "idMarque": 0, nomMarque: "" };
  constructor(private PcService: PcService) { }
  ngOnInit(): void {

    this.PcService.listeMarques().
      subscribe(mar => {
        this.marques = mar._embedded.marques;
        console.log(mar);
      });


  }
  chargerMarques() {
    this.PcService.listeMarques().subscribe(mar => {this.marques = mar._embedded.marques;
        console.log(mar);
      });

  }

  marqueUpdated(mar: Marque) {
    console.log("marque recue du composant updateMarque", mar)
    this.PcService.ajouterMarque(mar).subscribe(() => this.chargerMarques());
  }
  updateMar(mar:Marque){
    this.updatedMar=mar;
    this.ajout=false;
  }
}
