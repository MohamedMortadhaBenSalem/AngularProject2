import { Component, OnInit } from '@angular/core';
import { VetementService } from '../services/vetement.service';
import { Vetement } from '../model/vetement.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';
@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
  styles: []
})
export class UpdateVetementComponent implements OnInit {
  currentVetement = new Vetement();
  marques!: Marque[];
  updatedMarId!: number;
  constructor(private activatedRoute: ActivatedRoute,
    private vetementService: VetementService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.vetementService.listeMarques().
      subscribe(cats => {
        console.log(cats);
        this.marques = cats._embedded.marques;
      }
      );
    this.vetementService.consulterVetement(this.activatedRoute.snapshot.params['id']).
      subscribe(prod => {
        this.currentVetement = prod;
        this.updatedMarId = this.currentVetement.marque.idMar;
      });
    }

    updateVetement() {
      this.currentVetement.marque = this.marques.find(mar => mar.idMar == this.updatedMarId)!;
      this.vetementService.updateVetement(this.currentVetement).subscribe(prod => {
        this.router.navigate(['vetements']);
      }
      );
    }
  }