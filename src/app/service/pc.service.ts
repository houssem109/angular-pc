import { Injectable } from '@angular/core';
import { Pc } from '../model/pc.model';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarqueWrapper } from '../model/marqueWrapped.model';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root',
})
export class PcService {
  apiURL: string = 'http://localhost:8091/pcs/api';
  apiURLMar: string = 'http://localhost:8091/pcs/mar';

  pcs!: Pc[];
  marques!: Marque[];
  pc!: Pc;
  pcsRecherche!: Pc[];

  constructor(private http: HttpClient) {
    /*  this.marques = [
       { idMarque: 1, nomMarque: 'MSI' },
       { idMarque: 2, nomMarque: 'GIGABYTE' },
       { idMarque: 3, nomMarque: 'Dell' },
       { idMarque: 4, nomMarque: 'HP' },
       { idMarque: 5, nomMarque: 'Lenovo' },
       { idMarque: 6, nomMarque: 'Acer' },
       { idMarque: 7, nomMarque: 'Asus' },
       { idMarque: 8, nomMarque: 'Samsung' },
       { idMarque: 9, nomMarque: 'Toshiba' },
       { idMarque: 10, nomMarque: 'Apple' },
       { idMarque: 11, nomMarque: 'Razer' },
       { idMarque: 12, nomMarque: 'Alienware' },
       { idMarque: 13, nomMarque: 'Microsoft' },
       { idMarque: 14, nomMarque: 'Sony' },
       { idMarque: 15, nomMarque: 'Huawei' },
       { idMarque: 16, nomMarque: 'Fujitsu' },
       { idMarque: 17, nomMarque: 'Origin PC' },
       { idMarque: 18, nomMarque: 'CyberPowerPC' },
       { idMarque: 19, nomMarque: 'iBUYPOWER' },
       { idMarque: 20, nomMarque: 'EVGA' },
     ]; */
    /*
        this.pcs = [
          {
            idPC: 1,
            marque: { idMarque: 1, nomMarque: 'MSI' },
            modele: 'gf63',
            processeur: 'i5-11400H',
            memoireRAM: 24,
            capaciteStockage: 512,
            carteGraphique: 'Nvidia  GeForce GTX 1650',
            systemeExploitation: 'Windows 10 Professionnel',
            prix: 2900,
            dateAchat: new Date('09/20/2022'),
            email:"houssembenjaafar105@gmail.com"
          },
          {
            idPC: 2,
            marque: { idMarque: 2, nomMarque: 'GIGABYTE' },
            modele: 'G5 KF5',
            processeur: 'i5-13500H',
            memoireRAM: 16,
            capaciteStockage: 1024,
            carteGraphique: 'Nvidia GeForce RTX 4060',
            systemeExploitation: 'Windows 11 Professionnel',
            prix: 3159,
            dateAchat: new Date('12/20/2024'),
            email:"houssembenjaafar109@gmail.com"
          },
        ];*/
  }
  /* listePc(): Pc[] {
    return this.pcs;
  } */
  listePc(): Observable<Pc[]> {
    return this.http.get<Pc[]>(this.apiURL);
  }

  /*  ajouterPc(p: Pc) {
     this.pcs.push(p);
   } */
  ajouterPc(pc: Pc): Observable<Pc> {
    return this.http.post<Pc>(this.apiURL, pc, httpOptions);
  }

  /* supprimerPc(p: Pc) {
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
      });  } */
  supprimerPc(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  /*  consulterPc(id: number): Pc {
     this.pc = this.pcs.find((p) => p.idPC == id)!;
     return this.pc;
   } */
  consulterPc(id: number): Observable<Pc> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Pc>(url);
  }

  trierPcs() {
    this.pcs = this.pcs.sort((n1, n2) => {
      if (n1.idPC! > n2.idPC!) {
        return 1;
      }
      if (n1.idPC! < n2.idPC!) {
        return -1;
      }
      return 0;
    });
  }
  /*   updatePc(p: Pc) {
      // console.log(p);
      //this.supprimerPc(p);
      this.ajouterPc(p);
      this.trierPcs();
    } */
  updatePc(pc: Pc): Observable<Pc> {
    return this.http.put<Pc>(this.apiURL, pc, httpOptions);
  }
  /* listeMarques(): Marque[] {
    return this.marques;
  } */
  /* listeMarques():Observable<Marque[]>{
    return this.http.get<Marque[]>(this.apiURL+"/mar");
    } */
    listeMarques(): Observable<MarqueWrapper> {
    return this.http.get<MarqueWrapper>(this.apiURLMar);
  }

  consulterMarques(id: number): Marque {
    return this.marques.find(mar => mar.idMarque == id)!;
  }


  /* rechercherParMarque(idMar: number): Pc[] {
    this.pcsRecherche = [];

    this.pcs.forEach((cur, index) => {
      if (idMar == cur.marque.idMarque) {
        console.log("cur " + cur);
        this.pcsRecherche.push(cur);
      }
    });
    return this.pcsRecherche;
  } */
    rechercherParMarque(idMar: number):Observable< Pc[]> {
    const url = `${this.apiURL}/pcsmar/${idMar}`;
    return this.http.get<Pc[]>(url);
    }
    
    ajouterMarque( mar: Marque):Observable<Marque>{
      return this.http.post<Marque>(this.apiURLMar, mar, httpOptions);
      }
}
