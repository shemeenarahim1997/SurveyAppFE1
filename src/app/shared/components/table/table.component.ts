// import { Component, OnInit } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent implements OnInit {
//   users:any;
//   private url="http://localhost:8080/surveys";
 
//   constructor(private http: HttpClient) { }

//   ngOnInit(){
  
//     this.http.get(this.url)
//     .subscribe((data)=>this.users=data);
//   }
//   }




// import { Component, OnInit, Input } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent implements OnInit {

 
  // @Input() _title:string;
 
  // @Input () details:any;
  // private url="http://localhost:8080/surveys";

// users:any[];
// cols:any[];

// @Input() url:string;
// @Input () cols:Array<object>=[];
// @Input () details:any;

//   constructor(private http: HttpClient) { }

//   ngOnInit(){
  
//     this.http.get(this.url)
//     .subscribe((data)=>this.details=data);
//     console.log(this.details);
//     this.cols = [
//       { field: 'field1', header: 'header1' },
//       { field: 'field2', header: 'header2' },
//       {field:'field3',header:'header3'}
    
//   ];
//   }
// }

  









import { Component, OnInit,Input } from '@angular/core';
import {TableService} from '../../service/table.service';
import { TableidService } from '../../service/tableid.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() title:string
@Input() url:string;
@Input () cols;
@Input () values:any;
@Input() resourceId;
constructor(private service: TableService,private tsservice:TableidService) { }
 
 ngOnInit(){
   console.log(this.url);
   console.log(this.cols);
   console.log(this.values)

  
   
    this.service.getPosts(this.url).subscribe((data)=>this.values=data);

    this.tsservice.getPostId(this.url,this.resourceId).subscribe((data)=>this.values=data);

  }

  }