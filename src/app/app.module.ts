import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotalPerCategoryComponent } from './total-per-category/total-per-category.component';
import { HttpClientModule } from '@angular/common/http';
import { TotalPorMonthComponent } from './total-por-month/total-por-month.component';
import { InfoSorceComponent } from './info-sorce/info-sorce.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { TableComponent } from './shared/table/table.component';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TotalPerCategoryComponent,
    TotalPorMonthComponent,
    InfoSorceComponent,
    PaginationComponent,
    TableComponent,
    ErrorMessageComponent,
    MonthSelectorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
