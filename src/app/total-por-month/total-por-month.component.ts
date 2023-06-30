import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-total-por-month',
  templateUrl: './total-por-month.component.html',
  styleUrls: ['./total-por-month.component.css', '../shared/table/table.component.css']
})
export class TotalPorMonthComponent implements OnInit {

  data: any = [];
  error: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('http://localhost:8080/expenses/total-per-month')
      .subscribe(
        data => {
          this.data = data;
        },
        error => {
          this.error = 'Ocorreu um erro ao buscar os dados. Por favor, tente novamente mais tarde.';
        }
      );
  }
}
