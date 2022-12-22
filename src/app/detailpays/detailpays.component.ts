import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from '../services/pays.service';
import { RegionService } from '../services/region/region.service';

@Component({
  selector: 'app-detailpays',
  templateUrl: './detailpays.component.html',
  styleUrls: ['./detailpays.component.css']
})
export class DetailpaysComponent implements OnInit {
  idI:any;
  pays:any;
  nbregion : any;
  id:any;
  region : any;
  idregion:any;
  regionPage:any;

  idpays:any;

  constructor(public service: PaysService, private route:ActivatedRoute, public regionService : RegionService, private router: Router) { }

  ngOnInit(): void {

    //Retrouver pays par id
    this.idI=this.route.snapshot.params["id"]
    this.service.RetrouverParIdPays(this.idI).subscribe(data=>{
      this.pays = data;
      console.log(data);
    })

    //AFFICHER LE NOMBRE DES REGIONS PAR PAYS
    this.idpays=this.route.snapshot.params["id"]
    this.regionService.TotaleRegionParPays(this.idpays).subscribe(data=>{
      this.nbregion = data;
      console.log(data);
    })

    // this.id=this.route.snapshot.params["id"]
    // this.regionService.AfficherRegionParPays(this.id).subscribe(data=>{
    //   this.region=data;
    //   console.log(data);
    // })

    //RETROUVER ID REGION
    this.regionService.AfficherRegionParPays(this.idregion).subscribe(data=>{
      this.regionPage = data;
    })

  }

  goToDettailPaysRegion(id:number){
    console.log(id);
    return this.router.navigate(['detailpaysregion', id])
  }

}
