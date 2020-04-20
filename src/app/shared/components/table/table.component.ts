import { Component, OnInit } from '@angular/core';
import {TableService} from '../../service/table.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users:any;
  constructor(private service: TableService) { }

  ngOnInit(){
    this.service.getPosts()
    .subscribe((data)=>this.users=data);
  }
  }








