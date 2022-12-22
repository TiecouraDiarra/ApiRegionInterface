import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from '../services/region/region.service';

@Component({
  selector: 'app-detailregion',
  templateUrl: './detailregion.component.html',
  styleUrls: ['./detailregion.component.css']
})
export class DetailregionComponent implements OnInit {
  idregion:any;
  regionPage:any;
  id:any;
  region:any;

  regionn:any;

  constructor(public regionService : RegionService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    //AFFICHER REGION PAR PAYS
    this.id=this.route.snapshot.params["id"]
    this.regionService.RetrouverParIdRegion(this.id).subscribe(data=>{
      this.region=data;
      console.log(data);
    })

    //AFFICHER LES ELEMENTS D'UNE REGIONS
    this.regionService.AfficherRegion().subscribe(data => {
      this.regionn = data;
      //console.table(this.regionn);
      // this.tirage=data;
      
    })
    
    //RETROUVER ID REGION
    // this.regionService.AfficherRegionParPays(this.idregion).subscribe(data=>{
    //   this.regionPage = data;
    // })
  }

}
