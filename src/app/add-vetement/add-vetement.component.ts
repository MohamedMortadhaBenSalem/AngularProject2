import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  styleUrls: ['./add-vetement.component.css']
})
export class AddVetementComponent implements OnInit {
  newVetement = new Vetement();
  marques!: Marque[];
  newIdMar!: number;
  newMarque!: Marque;

  constructor(private vetementService: VetementService,
    private router: Router) { }

  ngOnInit(): void {
    this.vetementService.listeMarques().
      subscribe(mars => {
        console.log(mars);
        this.marques = mars._embedded.marques;
      }
      );
  }

  addVetement() {
    this.newVetement.marque = this.marques.find(mar => mar.idMar == this.newIdMar)!;
    this.vetementService.ajouterVetement(this.newVetement)
      .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['vetements']);
      });
  }
}
