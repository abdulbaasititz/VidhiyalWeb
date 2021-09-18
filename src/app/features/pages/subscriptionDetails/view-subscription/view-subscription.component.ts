import {  OnInit,AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-view-subscription',
  templateUrl: './view-subscription.component.html',
  styleUrls: ['./view-subscription.component.css']
})
export class ViewSubscriptionComponent implements AfterViewInit {

  displayedColumns: string[] = ['joiningDate',
    'memberNumber',
    'memberName',
    'totalAmount',
    'subscriptionDate'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  joiningDate:string;
  memberNumber:string;
  memberName:string;
  totalAmount:string;
  subscriptionDate:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {joiningDate:'test',
    memberNumber:'test',
    memberName:'test',
    totalAmount:'test',
    subscriptionDate:'test'
  },
];