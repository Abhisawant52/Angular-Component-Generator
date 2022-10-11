import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss'],
})
export class FormGeneratorComponent implements OnInit {
  Form: string = '';
  Fields: any;
  constructor(private appservice: AppService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.Form = this.route.snapshot.params['Form'];
    this.route.params.subscribe((params: Params) => {
      this.Form = params['Form'];
      this.getFormData();
    });
  }
  getFormData() {
    console.warn(this.Form);
    this.appservice.getForm1Data(this.Form).subscribe({
      next: (res: any) => {
        console.warn(res);
        this.Fields = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  //Form Submit
  @ViewChild('form') signupForm: HTMLFormElement;
  onSubmit() {
    console.log(this.signupForm);
  }
}
