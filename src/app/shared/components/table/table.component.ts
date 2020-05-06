import { Component, OnInit, Input } from '@angular/core';
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
  @Input() values: any;
 constructor(private tableService: TableService) { }
 ngOnInit() {
   this.tableService.getPosts(this.url).subscribe((data) => this.values = data);
}
}