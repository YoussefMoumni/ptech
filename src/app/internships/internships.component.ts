import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  public baseurl = 'http://localhost:3000/promos';


  public result: any;
  public errorFromSubscribe: any;
  public errorFromCatch: any;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get(this.baseurl).subscribe(res => {
      console.log('res', res)
    })
  }
}

