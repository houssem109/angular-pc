import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../service/pc.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { AbstractControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html'
 
})
export class AddPcComponent implements OnInit {
  marques!: Marque[];
  newIdMarque! : number;
  newMarque! : Marque;
  public newPc = new Pc();
  myform!:FormGroup;
  constructor (private PcService: PcService,private router :Router,private formBuilder:FormBuilder){

  }
  
  ngOnInit(): void {
    this.marques = this.PcService.listeMarques();
    this.myform=this.formBuilder.group({
      idPC: ['', [Validators.required]],
      nomMarque: [null, [Validators.required]],
      modele: ['', [Validators.required, Validators.minLength(3)]],
      processeur: ['', [Validators.required]],
      memoireRAM: ['', [Validators.required, Validators.min(4)]], 
      capaciteStockage: ['', [Validators.required, Validators.min(128)]], 
      carteGraphique: ['', [Validators.required]],
      systemeExploitation: ['', [Validators.required]],
      prix: ['', [Validators.required, Validators.min(100)]], 
      dateAchat: ['', [Validators.required]], 
      email: ['', [Validators.required, Validators.email]]
    });
  }
  addPc() {
    //console.log(this.newPc)
    this.newMarque=this.PcService.consulterMarques(this.newIdMarque);
    this.newPc.marque=this.newMarque;
    this.PcService.ajouterPc(this.newPc);
    this.router.navigate(['pc']);
    }
}
