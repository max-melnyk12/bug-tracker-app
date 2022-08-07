import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugsModule } from './bugs/bugs.module';
import { ProjectEditComponent } from './projects/components/project-edit/project-edit.component';
import { ProjectsModule } from './projects/projects.module';


const routes : Routes = [
  {
    path:'edit',
    component:ProjectEditComponent
  },
  {
    path:'bugs/:projectId',
    component:BugsComponent
  },
  {
    path:'new',
    component:ProjectEditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    BugsModule,
    ReactiveFormsModule,
    ProjectsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
