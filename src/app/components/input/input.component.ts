import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label!: string;
  @Input() formCtrlValue!: string;
  @Input() formGroup!: FormGroup;
  valueInput = '';

  @Output() nameSearch = new EventEmitter<string>();

  searchChar(){
    this.nameSearch.emit(this.valueInput);
  }

  // get cntrl(): FormControl{
  //   return this.formGroup.get(this.formCtrlValue) as FormControl;
  // }
}
