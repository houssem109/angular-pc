import { Injectable } from '@angular/core';
import { Pc } from '../model/pc.model';

@Injectable({
  providedIn: 'root'
})
export class PcService {
  pcs : Pc[];
  
  pc! : Pc;


  constructor() { 
    this.pcs =[
      {idPC : 1 ,marque:"Msi", modele : "gf63", processeur:"i5-11400H", memoireRAM: 24 ,capaciteStockage : 512, carteGraphique : "Nvidia  GeForce GTX 1650", systemeExploitation : "Windows 10 Professionnel", prix:2900 , dateAchat : new Date("09/20/2022") },
      {idPC : 2 ,marque:"Gigabyte", modele : "G5 KF5", processeur:"i5-13500H", memoireRAM: 16 ,capaciteStockage : 1024, carteGraphique : "Nvidia GeForce RTX 4060", systemeExploitation : "Windows 11 Professionnel", prix:3159 , dateAchat : new Date("12/20/2024") },

    ]
  }
  listePc():Pc[] {
    return this.pcs
  }
  ajouterPc( p: Pc){
    this.pcs.push(p);
    }
  supprimerPc( p: Pc){
      //supprimer le Pc p du tableau pcs
      const index = this.pcs.indexOf(p, 0);
      if (index > -1) {
      this.pcs.splice(index, 1);
      }
      //ou Bien
      /* this.pcs.forEach((cur, index) => {
      if(pc.idPC === cur.idPC) {
      this.pcs.splice(index, 1);
      }
      }); */
      }
  consulterPc(id:number): Pc{
        this.pc = this.pcs.find(p => p.idPC == id)!;
        return this.pc;
        }
  trierPcs(){
          this.pcs = this.pcs.sort((n1,n2) => {
          if (n1.idPC! > n2.idPC!) {
          return 1;
          }
          if (n1.idPC! < n2.idPC!) {
          return -1;
          }
          return 0;
          });
          }
  updatePc(p:Pc)
        {
        // console.log(p);
        this.supprimerPc(p);
        this.ajouterPc(p);
        this.trierPcs();
        }
        
}
