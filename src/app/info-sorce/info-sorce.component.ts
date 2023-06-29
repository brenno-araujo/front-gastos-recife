import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-sorce',
  templateUrl: './info-sorce.component.html',
  styleUrls: ['./info-sorce.component.css']
})
export class InfoSorceComponent implements OnInit {
  data: any = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('http://localhost:8080/expenses/info-source')
      .subscribe(data => {
        this.data = data;
        this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
      });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getDisplayedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

  changePage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
}
