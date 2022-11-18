import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { FormsModule } from '@angular/forms';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    VetementsComponent,
    AddVetementComponent,
    UpdateVetementComponent,
    RechercheParMarqueComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeMarquesComponent,
    UpdateMarqueComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
