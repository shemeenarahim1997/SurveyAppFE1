import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {
  @Input() name:string;
  constructor() { }

  ngOnInit(): void {
  }

}
