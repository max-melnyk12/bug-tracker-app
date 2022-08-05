import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectsComponent } from './projects.component';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectEditComponent,
    ProjectItemComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
