import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableService } from '../../service/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() title: string
  @Input() url: string;
  @Input() cols;
  @Input() isSelectable;
  @Input() btnText;
  values: any;
  @Output() select = new EventEmitter();
  selectedUsers=[];

  constructor(private service: TableService, private router: Router) { }

  ngOnInit() {
    this.service.getPosts(this.url).subscribe((data) => this.values = data);
  }

  onSelect(){
    this.select.emit(this.selectedUsers);
  }
  

}