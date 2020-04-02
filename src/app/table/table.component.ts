import { Component, OnInit } from '@angular/core';
import { TableService } from 'primeng/table/table';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users:any;
  private url="http://localhost:8080/surveys";
constructor(private http: HttpClient) {
   
    
  }ngOnInit()
  {
    this.http.get(this.url)
    .subscribe((data)=>this.users=data);
 
  }




















// users: User[];
// cols: any[];
//   ngOnInit() {
//     this.users = [
//       { name: 'abc',total:'10',complted:'8' },
//       { name: 'xyz',total:'15',complted:'10' },
//       { name: 'pqr',total:'20',complted:'15' }
//     ];
//     this.cols = [
//         { field: 'name', header: 'Name' },
//         { field: 'total', header: 'Total Response' },
//         { field: 'complted', header: 'Completed Response' },
//     ];
// }
// }
// export interface User {
  
//   name;
//   total
//   complted;
}
