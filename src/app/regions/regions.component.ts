import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Pays } from '../modeles/pays';
import { Region } from '../modeles/region/region';
import { PaysService } from '../services/pays.service';
import { RegionService } from '../services/region/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  nompays = new Array();
  p: number = 1;
  region: any;
  searchText: any;
  totalpays: any;
  totaleregion: number = 0;
  totalepopulationmondiale: any;
  npays: any;

  //Objet qui prend les champs du formulaire
  RegionObjet: Region = {
    idRegion: 0,
    code_region: '',
    nom: '',
    domaineAct: '',
    langue: '',
    nb_population: '',
    presentationRegion: '',
    photoregion: '',
    pays: new Pays,
  }
  mesDonnees: any

  formmodule!: FormGroup;
  message: string | undefined;
  idRegion!: number;
  code_region!: string;
  nom!: string;
  domaineAct!: string;
  langue!: string;
  nb_population!: string;
  presentationRegion!: string;
  photoregion !: any;
  pays!: any;

  resetForm() {
    code_region: '';
    nom: '';
    domaineAct: '';
    langue: '';
    nb_population: '';
    presentationRegion: '';
    photoregion: '';
    pays: '';
  } 

  constructor(public service: RegionService, public servicePays: PaysService, private FormB: FormBuilder, private route: Router) { }

  ngOnInit(): void {

    //AFFICHER LES ELEMENTS D'UNE REGIONS
    this.service.AfficherRegion().subscribe(data => {
      this.region = data;
      
      // this.tirage=data;
      for (const t of this.region) {
        this.totaleregion += 1;
      }
    })

    //AFFICHER LE NOMBRE TOTAL DES POPULATIONS
    this.servicePays.TotalePopulationMondiale().subscribe(data => {
      this.totalepopulationmondiale = data;
    })

    //AFFICHER LE NOMBRE TOTAL DES PAYS
    this.servicePays.TotalePays().subscribe(data => {
      this.totalpays = data;
    })

    //AFFICHER LES ELEMENTS DU PAYS
    this.servicePays.AfficherPays().subscribe(data => {
      this.npays = data;
      console.log(data);
      console.table(this.npays);
      // this.tirage=data;
    });

    //Formulaire Ajouter un pays
    this.formmodule = this.FormB.group({
      code_region: ["", Validators.required],
      nom: ["", Validators.required],
      domaineAct: ["", Validators.required],
      langue: ["", Validators.required],
      nb_population: ["", Validators.required],
      presentationRegion: ["", Validators.required],
      photoregion: ["", Validators.required],
      pays: ["", Validators.required],
    })


  }

  //AJOUTER UNE REGION
  AjouterRegion() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    if (this.code_region == "" || this.nom == "" || this.langue == "" || this.domaineAct == ""
      || this.nb_population == "" || this.presentationRegion == ""
      || this.photoregion == null) {
      swalWithBootstrapButtons.fire(
        this.message = " Tous les champs sont obligatoires !",
      )
      this.resetForm();
    } else {
      swalWithBootstrapButtons.fire({
        title: 'Cette région va etre ajoutée !!!!',
        text: "Vous pouvez annuler ou confirmer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer!',
        cancelButtonText: 'Annuler!',
        // reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.RegionObjet.code_region = this.code_region;
          this.RegionObjet.nom = this.nom;
          this.RegionObjet.langue = this.langue;
          this.RegionObjet.nb_population = this.nb_population;
          this.RegionObjet.presentationRegion = this.presentationRegion;
          this.RegionObjet.domaineAct = this.domaineAct;
          this.RegionObjet.pays = this.pays;
          this.RegionObjet.photoregion = this.photoregion;
          console.log("Les données: " + this.RegionObjet)
          this.mesDonnees = this.service.AjouterRegion(this.code_region, this.nom, this.domaineAct,
            this.langue, this.nb_population, this.presentationRegion,
            this.photoregion, this.pays).subscribe(data => {
              console.log(data);
              this.route.navigateByUrl("/regions")
              swalWithBootstrapButtons.fire(
                'Région ajoutée avec succes!',
                'Vous êtes diriger vers la liste des régions.',
                'success',)
              this.resetForm();
            })

        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Ajout de pays annulé'
          )

        }

      })
    }
  }

  fileChang(event: any) {
    this.photoregion = event.target.files[0]
    console.log(event) 
  }

  goToDettailRegion(id:number){
    console.log(id);
    return this.route.navigate(['detailregion', id])
  }

}
