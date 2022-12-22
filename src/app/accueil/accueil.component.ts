import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Pays } from '../modeles/pays';
import { Region } from '../modeles/region/region';
import { PaysService } from '../services/pays.service';
import { RegionService } from '../services/region/region.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  pays: any;
  searchText:any;
  totalpays: number = 0;
  totaleregion: any;
  totalepopulationmondiale: any;
  idpays : number = 0;
  paysPage:any;
  p:number=1;
  idI:any;
  //npays: any;


  //PAYS
  PaysObjet: Pays = {
    idPays: 0,
    nomPays: '',
    capitale: '',
    langueoficielle: '', 
    superficie: '',
    presentation: '',
    nbpopulationpays: '',
    devise:'',
    carteimage: '',
    drapeuaimage: '',
  } 

  mesDonnees: any

  formmodule!: FormGroup;
  message: string | undefined;
  nomPays!: string;
  capitale!: string;
  langueoficielle!: string;
  superficie!: string;
  presentation!: string;
  devise!: string;
  nbpopulationpays!: string;
  carteimage!: any;
  drapeuaimage !: any;

  resetForm() {
    nomPays: '';
    capitale: '';
    langueoficielle: '';
    superficie: '';
    presentation: '';
    devise: '';
    nbpopulationpays: '';
    carteimage: '';
    drapeuaimage: '';
  }
  //PAYS FIN 

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
  mesDonneesR: any

  formmoduleR!: FormGroup;
  messageR: string | undefined;
  idRegion!: number;
  code_region!: string;
  nom!: string;
  domaineAct!: string;
  langue!: string;
  nb_population!: string;
  presentationRegion!: string;
  photoregion !: any;
  paysR!: any;

  resetFormR() {
    code_region: '';
    nom: '';
    domaineAct: '';
    langue: '';
    nb_population: '';
    presentationRegion: '';
    photoregion: '';
    paysR: '';
  }

  constructor(public service: PaysService, public regionA: RegionService, private FormB: FormBuilder, private route: Router) { }

  ngOnInit(): void {

    //Formulaire Ajouter un pays
    this.formmodule = this.FormB.group({
      nomPays: ["", Validators.required],
      capitale: ["", Validators.required],
      langueoficielle: ["", Validators.required],
      superficie: ["", Validators.required],
      presentation: ["", Validators.required],
      devise: ["", Validators.required],
      nbpopulationpays: ["", Validators.required],
      carteimage: ["", Validators.required],
      drapeuaimage: ["", Validators.required],
    })



    //AFFICHER LES ELEMENTS DU PAYS
    this.service.AfficherPays().subscribe(data => {
      this.pays = data;
      console.log(data);
      console.table(this.pays);
      // this.tirage=data;
      for (const t of this.pays) {
        this.totalpays += 1;
      }

    });

    //AFFICHER LE NOMBRE TOTAL DES REGIONS
    this.regionA.TotaleRegion().subscribe(data => {
      this.totaleregion = data;
      console.log(data);
    });

    //AFFICHER LE NOMBRE TOTAL DES POPULATIONS
    this.service.TotalePopulationMondiale().subscribe(data => {
      this.totalepopulationmondiale = data;
    })

    //Retrouver id Pays
    this.service.getIdPays(this.idpays).subscribe(data=>{
      this.paysPage = data;
    })

    
  }


  //AJOUTER UN PAYS 
  AjouterPays() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })

    if (this.nomPays == "" || this.capitale == "" || this.langueoficielle == "" || this.devise == ""
      || this.superficie == "" || this.presentation == "" || this.nbpopulationpays == "" 
      || this.carteimage == null || this.drapeuaimage == null) {
      swalWithBootstrapButtons.fire(
        this.message = " Tous les champs sont obligatoire !",
      )
      this.resetForm();
    } else {
      // alert("test")
      swalWithBootstrapButtons.fire({
        title: 'Ce pays va etre ajouté !!!!',
        text: "Vous pouvez annuler ou confirmer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer!',
        cancelButtonText: 'Annuler!',
        // reverseButtons: true
      }).then((result) =>{
        if (result.isConfirmed) {
          this.PaysObjet.nomPays = this.nomPays;
          this.PaysObjet.capitale = this.capitale;
          this.PaysObjet.langueoficielle = this.langueoficielle;
          this.PaysObjet.superficie = this.superficie;
          this.PaysObjet.presentation = this.presentation;
          this.PaysObjet.devise = this.devise;
          this.PaysObjet.nbpopulationpays = this.nbpopulationpays;
          this.PaysObjet.carteimage = this.carteimage;
          this.PaysObjet.drapeuaimage = this.drapeuaimage;
          console.log("Les données: " + this.PaysObjet)
          this.mesDonnees = this.service.AjouterPays(this.nomPays,this.capitale,this.langueoficielle,
            this.superficie,this.nbpopulationpays,this.presentation, 
            this.devise, this.carteimage,this.drapeuaimage).subscribe(data => {
              this.route.navigateByUrl("/accueil")
              swalWithBootstrapButtons.fire(
                'Pays ajouté avec succes!',
                'Vous êtes diriger vers la liste des pays.',
                'success',)
            this.resetForm();
          })

        }else if (
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
    this.carteimage = event.target.files[0]
    console.log(event)
  }

  fileChange(evente: any) {
    this.drapeuaimage = evente.target.files[0]
    console.log(evente)
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
          this.RegionObjet.pays = this.paysR;
          this.RegionObjet.photoregion = this.photoregion;
          console.log("Les données: " + this.RegionObjet)
          this.mesDonnees = this.regionA.AjouterRegion(this.code_region, this.nom, this.domaineAct,
            this.langue, this.nb_population, this.presentationRegion,
            this.photoregion, this.pays).subscribe(data => {
              console.log(data);
              this.route.navigateByUrl("/accueil")
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
  fileChangR(event: any) {
    this.photoregion = event.target.files[0]
    console.log(event) 
  }

















  goToDettailPays(id:number){
    console.log(id);
    return this.route.navigate(['detailspays', id])
  }






}
