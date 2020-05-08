import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
users:any;
 url:string;
 columns:any;
 _title="SURVEY LIST"
constructor() { }
ngOnInit(){
   console.log("vieww");
    this.columns = [
      { field: 'survey_name', header: 'SURVEY_NAME' },
      { field: 'survey_owner', header: 'SURVEY_OWNER' },
   ];
 }
 

  }
