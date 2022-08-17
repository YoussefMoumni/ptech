import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  displayedColumns: string[] = ['name','email'];

  promos : any;
  public errorFromSubscribe: any;
  public errorFromCatch: any;
  dataSource : any;
  constructor(private infoService:InfoService) { 
    this.getPromos();
  }

  getPromos() {
    this.infoService.getPromos().subscribe((response) => {
      this.promos = response;
      this.dataSource = this.promos[0].infos;
    });
  }

  ngOnInit(): void {
  }
}

