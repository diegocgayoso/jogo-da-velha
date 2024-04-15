import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchCharacterService } from './../../services/search-character.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-player',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-player.component.html',
  styleUrl: './form-player.component.scss'
})
export class FormPlayerComponent {
  form!: FormGroup;
  constructor(private searchCharServ: SearchCharacterService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      namePlayer1Ctrl: [null, Validators.required]
    })
  }

  search(form: FormGroup) {
    const valueForm = form.get('namePlayer1Ctrl')?.value;
    console.log(valueForm);

    this.searchCharServ.searchCharacter(valueForm).subscribe(data => console.log(data.data.results)
    );
  }
}
