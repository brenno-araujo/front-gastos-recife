import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface Month {
  number: number;
  name: string;
}

interface ExpenseData {
  count: number;
  codigo: number;
  mes: string;
  valor_empenhado: string;
  valor_liquidado: string;
  valor_pago: string;
}

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent implements OnInit {

  selectedMonth: number | undefined;
  data: any;
  months: Month[] = [
    { number: 1, name: 'Janeiro' },
    { number: 2, name: 'Fevereiro' },
    { number: 3, name: 'Março' },
    { number: 4, name: 'Abril' },
    { number: 5, name: 'Maio' },
    { number: 6, name: 'Junho' },
    { number: 7, name: 'Julho' },
    { number: 8, name: 'Agosto' },
    { number: 9, name: 'Setembro' },
    { number: 10, name: 'Outubro' },
    { number: 11, name: 'Novembro' },
    { number: 12, name: 'Dezembro' }
  ];
  expenses: ExpenseData | null | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const month = 1;
    this.selectedMonth = month;
    this.getTotalExpensesByMonth(month);
  }

  getTotalExpensesByMonth(month: number | undefined): void {
    if (month) {
      const url = `http://localhost:8080/expenses/total-per-month/${month}`;
      this.http.get<ExpenseData>(url).subscribe((data: ExpenseData | null) => {
        this.expenses = data;
      });
    } else {
      this.expenses = null;
    }
  }

}
