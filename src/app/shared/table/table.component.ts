import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
    <table class="table table-bordered">
      <ng-content>
      </ng-content>
    </table>
  `,
  styleUrls: ['./table.component.css'],
})
export class TableComponent {}
