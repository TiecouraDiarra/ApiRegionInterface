import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from '../services/region/region.service';

@Component({
  selector: 'app-detailpaysregion',
  templateUrl: './detailpaysregion.component.html',
  styleUrls: ['./detailpaysregion.component.css']
})
export class DetailpaysregionComponent implements OnInit {
  id:any;
  region : any;
  regionn:any;
  searchText:any;
  p:number=1;
  regionPage:any;
  idregion:any;

  constructor(public serviceRegion : RegionService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    //AFFICHER REGION PAR PAYS
    this.id=this.route.snapshot.params["id"]
    this.serviceRegion.AfficherRegionParPays(this.id).subscribe(data=>{
      this.region=data;
      console.log(data);
    })

    //console.log(this.id);

    //AFFICHER LES ELEMENTS D'UNE REGIONS
    this.serviceRegion.AfficherRegion().subscribe(data => {
      this.regionn = data;
      //console.table(this.regionn);
      // this.tirage=data;
      
    })

    //RETROUVER ID REGION
    this.serviceRegion.AfficherRegionParPays(this.idregion).subscribe(data=>{
      this.regionPage = data;
    })


    
  }

  goToDettailRegion(id:number){
    console.log(id);
    return this.router.navigate(['detailregion', id])
  }


}
