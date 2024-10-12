import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PcService } from '../service/pc.service';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-pc',
  templateUrl: './update-pc.component.html',
  styles: ``
})
export class UpdatePcComponent implements OnInit {
  marques!: Marque[];
  updateIdMarque! : number;

  currentPc = new Pc();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private pcService: PcService) { }
    ngOnInit() {
      this.marques = this.pcService.listeMarques();
      // console.log(this.route.snapshot.params.id);
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
