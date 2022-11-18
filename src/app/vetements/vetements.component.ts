import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { AuthService } from '../services/auth.service';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html',
  styleUrls: ['./vetements.component.css']
})
export class VetementsComponent implements OnInit {
  vetements?: Vetement[];

  constructor(private vetementService: VetementService,public authService: AuthService) { }
 
  ngOnInit(): void {
    this.chargerVetements();
  }

  chargerVetements() {
    this.vetementService.listeVetement().subscribe(prods => {
      console.log(prods);
      this.vetements = prods;
    });
  }

  supprimerVetement(p: Vetement) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.vetementService.supprimerVetement(p.idVetement).subscribe(() => {
        console.log("vetement supprimé");
        this.chargerVetements();

      });
  }
}
