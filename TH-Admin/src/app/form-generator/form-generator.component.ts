
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss'],
})
export class FormGeneratorComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}


  onSubmit(Form: HTMLFormElement) {
    console.error('Submit form');
    console.warn(Form);
  }
}
