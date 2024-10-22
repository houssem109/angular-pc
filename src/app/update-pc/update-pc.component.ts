import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PcService } from '../service/pc.service';
import { Marque } from '../model/marque.model';
import { AbstractControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-pc',
  templateUrl: './update-pc.component.html',
  styles: ``
})
export class UpdatePcComponent implements OnInit {
  marques!: Marque[];
  updateIdMarque! : number;

  public currentPc = new Pc();
  myform!:FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private pcService: PcService,
    private formBuilder:FormBuilder) { }
    ngOnInit() {
      this.marques = this.pcService.listeMarques();
      // console.log(this.route.snapshot.params.id);
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
      
      this.currentPc = this.pcService.consulterPc(this.activatedRoute.snapshot. params['id']);
      this.updateIdMarque=this.currentPc.marque.idMarque;
      console.log(this.currentPc);

     
      }
      updatePc() {
        this.currentPc.marque=this.pcService.consulterMarques(this.updateIdMarque)
        this.pcService.updatePc(this.currentPc);
        this.router.navigate(['pc']);
        }
}
