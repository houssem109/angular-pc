import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PcService } from '../service/pc.service';

@Component({
  selector: 'app-update-pc',
  templateUrl: './update-pc.component.html',
  styles: ``
})
export class UpdatePcComponent implements OnInit {


  currentPc = new Pc();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private pcService: PcService) { }
    ngOnInit() {
      // console.log(this.route.snapshot.params.id);
      this.currentPc = this.pcService.consulterPc(this.activatedRoute.snapshot. params['id']);
      console.log(this.currentPc);
      }
      updatePc() {
        this.pcService.updatePc(this.currentPc);
        this.router.navigate(['pc']);
        }
}
