import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { AuthService } from '../services/auth.service';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styles: [
  ]
})
export class ListeMarquesComponent implements OnInit {

  
  marques!: Marque[];
  ajout: boolean = true;


  constructor(private produitService: VetementService, public authService: AuthService) { }

  ngOnInit(): void {
    this.produitService.listeMarques().
      subscribe(mars => {
        this.marques = mars._embedded.marques;
        console.log(mars);
      });
  }


  marqueUpdated(mar: Marque) {
    console.log("Mar updated event", mar);
    this.produitService.ajouterMarque(mar).
      subscribe(() => this.chargerMarques());
  }
  chargerMarques() {
    this.produitService.listeMarques().
      subscribe(mars => {
        this.marques = mars._embedded.marques;
        console.log(mars);
      });
  }

  updateMar(mar: Marque) {
    this.updatedMar = mar;
    this.ajout = false;
  }



  updatedMar: Marque = { "idMar": 0, "nomMar": "" };

  supprimerMarque(mar : Marque) {
    let conf = confirm("Etes-vous sûr ?");
       if (conf)
       {
         this.produitService.supprimerMarque(mar.idMar).subscribe(() => {
          console.log("Marque supprimée");
          this.chargerMarques(); }  );
       }
  }

  
}
