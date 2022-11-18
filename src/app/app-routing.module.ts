import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { LoginComponent } from './login/login.component';
import { VetementGuard } from './vetement.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';


const routes: Routes = [
  { path: "vetements", component: VetementsComponent },
  { path: "", redirectTo: "vetements", pathMatch: "full" },
  { path: "updateVetement/:id", component: UpdateVetementComponent },
  { path: "rechercheParMarque", component: RechercheParMarqueComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "listeMarques", component: ListeMarquesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: "add-vetement", component: AddVetementComponent, canActivate: [VetementGuard] },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
