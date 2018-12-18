import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';
import { IndexComponent } from './index/index.component';
import { ParentComponent } from './parent/parent.component';
import { StudentportalModule } from './studentportal/studentportal.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StudentportalModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('Hi I am module');
  }
 }
