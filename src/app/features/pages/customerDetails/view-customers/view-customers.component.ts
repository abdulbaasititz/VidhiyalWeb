import {  OnInit,AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements AfterViewInit  {
  displayedColumns: string[] = ['memberID',
    'intialAmount',
    'paymentdate',
    'memberName',
    'fatherName',
    'mobileNumber',
    'email',
    'aadharnumber',
    'address',
    'city',
    'bankaccountNumber',
    'ifscCode'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {

memberID:string;
intialAmount:string;
paymentdate:string;
memberName:string;
fatherName:string;
mobileNumber:string;
email:string;
aadharnumber:string;
address:string;
city:string;
bankaccountNumber:string;
ifscCode:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {memberID:'test',
    intialAmount:'test',
    paymentdate:'test',
    memberName:'test',
    fatherName:'test',
    mobileNumber:'test',
    email:'test',
    aadharnumber:'test',
    address:'test',
    city:'test',
    bankaccountNumber:'test',
    ifscCode:'test'},
];
  