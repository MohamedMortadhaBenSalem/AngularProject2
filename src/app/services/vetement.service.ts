import { Injectable } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Vetement } from '../model/vetement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarqueWrapper } from '../model/MarqueWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class VetementService {
  apiURL: string = 'http://localhost:8888/vetements/api';
  apiURLMar: string = 'http://localhost:8888/vetements/mar';

  vetements: Vetement[];
  //marques : Marque[];


  constructor(private http: HttpClient) {
    /* this.marques = [{ idMar: 1, nomMar: "Adidas" },
    { idMar: 2, nomMar: "Zara" }];*/
    this.vetements = [
      {
        idVetement: 1, nomVetement: "Jean", prixVetement: 129.600,
        dateCreation: new Date("01/14/2011"), marque: { idMar: 1, nomMar: "Adidas" }
      },
      {
        idVetement: 2, nomVetement: "Chaussure", prixVetement: 250,
        dateCreation: new Date("12/17/2010"), marque: { idMar: 2, nomMar: "Zara" }
      },
      {
        idVetement: 3, nomVetement: "T-shirt", prixVetement: 90.123,
        dateCreation: new Date("02/20/2020"), marque: { idMar: 1, nomMar: "Adidas" }
      }
    ];
  }


  listeVetement(): Observable<Vetement[]> {
    return this.http.get<Vetement[]>(this.apiURL);
  }

  ajouterVetement(prod: Vetement): Observable<Vetement> {
    return this.http.post<Vetement>(this.apiURL, prod, httpOptions);
  }

  supprimerVetement(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  consulterVetement(id: number): Observable<Vetement> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Vetement>(url);
  }

  trierVetements() {
    this.vetements = this.vetements.sort((n1, n2) => {
      if (n1.idVetement > n2.idVetement) {
        return 1;
      }
      if (n1.idVetement < n2.idVetement) {
        return -1;
      }
      return 0;
    });
  }


  updateVetement(prod: Vetement): Observable<Vetement> {
    return this.http.put<Vetement>(this.apiURL, prod, httpOptions);
  }


  listeMarques(): Observable<MarqueWrapper> {
    return this.http.get<MarqueWrapper>(this.apiURLMar);
  }

  rechercherParMarque(idMar: number): Observable<Vetement[]> {
    const url = `${this.apiURL}/vetmarque/${idMar}`;
    return this.http.get<Vetement[]>(url);
  }

  rechercherParNom(nom: string): Observable<Vetement[]> {
    const url = `${this.apiURL}/vetsByName/${nom}`;
    return this.http.get<Vetement[]>(url);
  }

  ajouterMarque( mar: Marque):Observable<Marque>{
    return this.http.post<Marque>(this.apiURLMar, mar, httpOptions);
    }


  /*   consulterMarque(id:number): Marque{
        return this.marques.find(mar => mar.idMar == id)!;
        } */

}