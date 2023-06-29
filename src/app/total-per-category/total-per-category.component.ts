import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-total-per-category',
  templateUrl: './total-per-category.component.html',
  styleUrls: ['./total-per-category.component.css']
})
export class TotalPerCategoryComponent implements OnInit {

  data: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/expenses/total-per-category')
      .subscribe(data => {
        this.data = data;
      });
  }

}
