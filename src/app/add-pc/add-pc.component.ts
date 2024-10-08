import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../service/pc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html'
 
})
export class AddPcComponent implements OnInit {

  newPc = new Pc();
  constructor (private PcService: PcService,private router :Router,){

  }
  
  ngOnInit(): void {
  }
  addPc() {
    //console.log(this.newPc)
    this.PcService.ajouterPc(this.newPc);
    this.router.navigate(['pc']);
    }
}
