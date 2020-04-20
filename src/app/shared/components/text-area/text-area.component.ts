import { Component, Self, Input} from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements ControlValueAccessor {
  @Input() label:string;
  @Input() placeholder:string;
  
  constructor(
    @Self() public ngControl: NgControl,
  ) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(obj: any) {  }

  registerOnChange(fn: any) { }

  registerOnTouched(fn: any) { }

  setDisabledState?(isDisabled: boolean) { }

}
