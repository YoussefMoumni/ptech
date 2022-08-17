import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  displayedColumns: string[] = ['name'];

  data: any;

  public baseurl = 'http://localhost:3000/promos';
  promos : any;
  public errorFromSubscribe: any;
  public errorFromCatch: any;
  dataSource : any;
  constructor(private infoService:InfoService) { 
    this.getData();
  }

  getData() {
    this.infoService.getData().subscribe((response) => {
      this.data = response;
      this.dataSource = this.data[0].infos;
      console.log(this.data[0]);
    });
  }

  ngOnInit(): void {
  }
}

