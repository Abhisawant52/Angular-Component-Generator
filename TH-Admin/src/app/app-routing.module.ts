import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGeneratorComponent } from './form-generator/form-generator.component';

const routes: Routes = [{ path: ':Form', component: FormGeneratorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
