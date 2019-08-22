import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersService} from './services/users.service';
import {AuthService} from './services/auth.service';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule, NgxChartsModule, RouterModule],
  exports: [ReactiveFormsModule, FormsModule, NgxChartsModule, RouterModule, LoaderComponent],
  providers: [UsersService, AuthService],
  declarations: [LoaderComponent]
})
export class SharedModule {

}






