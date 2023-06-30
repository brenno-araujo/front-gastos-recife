import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTotalPerMonth = true;
  showTotalPerCategory = false;
  showInfoSorce = false;

  showTotalPerMonthComponent() {
    this.showTotalPerMonth = true;
    this.showTotalPerCategory = false;
    this.showInfoSorce = false;
  }

  showTotalPerCategoryComponent() {
    this.showTotalPerMonth = false;
    this.showTotalPerCategory = true;
    this.showInfoSorce = false;
  }

  showInfoSorceComponent() {
    this.showTotalPerMonth = false;
    this.showTotalPerCategory = false;
    this.showInfoSorce = true;
  }

}
