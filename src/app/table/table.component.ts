import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {


  users: User[];

  cols: any[];
  ngOnInit() {
    this.users = [
      { name: 'abc',total:'10',complted:'8' },
      { name: 'xyz',total:'15',complted:'10' },
      { name: 'pqr',total:'20',complted:'15' }
      // { id: '2', name: 'tom',email:'tom@gmail.com' },
      // { id: '3', name: 'john',email:'john@gmail.com' },
      // { id: '4', name: 'Frank',email:'frank@gmail.com' },

  ];
    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'total', header: 'Total Response' },
        { field: 'complted', header: 'Completed Response' },
    ];
}
}

export interface User {
  
  name;
  total
  complted;
}
