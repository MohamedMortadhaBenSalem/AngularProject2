import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { AuthService } from '../services/auth.service';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomVetement! : string;
  vetements!: Vetement[];
  allVetements!: Vetement[];
  searchTerm!: string;
  
  constructor(private vetementService : VetementService, public authService: AuthService) { }

  ngOnInit(): void {
    this.vetementService.listeVetement().subscribe(prods => {
      console.log(prods);
      this.allVetements = prods;
      });
      
  }

  

  rechercherVets(){
    this.vetementService.rechercherParNom(this.nomVetement).
    subscribe(prods => {
      console.log(prods);
      this.vetements=prods;});
  }

  onKeyUp(filterText : string){
    this.vetements = this.allVetements.filter(item =>
    item.nomVetement.toLowerCase().includes(filterText));
    }
    
    chargerVetements(){
      this.vetementService.listeVetement().subscribe(prods => {
        console.log(prods);
        this.vetements = prods;
        });
    }
  
    supprimerVetement(prods: Vetement)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.vetementService.supprimerVetement(prods.idVetement).subscribe(() => {
          console.log("Vetement supprimé");
          this.chargerVetements();
    });
    } 
}
