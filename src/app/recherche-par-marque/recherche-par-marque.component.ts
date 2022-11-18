import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {
  vetements!: Vetement[];
  IdMarque!: number;
  marques!: Marque[];
  constructor(private vetementService: VetementService) { }

  ngOnInit(): void {
    this.vetementService.listeMarques().
      subscribe(mars => {
        this.marques = mars._embedded.marques;
        console.log(mars);
      });
  }
  onChange() {
    this.vetementService.rechercherParMarque(this.IdMarque).
      subscribe(prods => { this.vetements = prods });
  }
}
