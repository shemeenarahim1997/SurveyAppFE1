import { Component, Self, Input} from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements ControlValueAccessor {
  @Input() label:string;
  @Input() placeholder:string;
  @Input() type:string;
  @Input() icon:string;
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
