import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../service/pc.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html'
 
})
export class AddPcComponent implements OnInit {
  marques!: Marque[];
  newIdMarque! : number;
  newMarque! : Marque;
  newPc = new Pc();
  constructor (private PcService: PcService,private router :Router,){

  }
  
  ngOnInit(): void {
    this.marques = this.PcService.listeMarques();
  }
  addPc() {
    //console.log(this.newPc)
    this.newMarque=this.PcService.consulterMarques(this.newIdMarque);
    this.newPc.marque=this.newMarque;
    this.PcService.ajouterPc(this.newPc);
    this.router.navigate(['pc']);
    }
}
