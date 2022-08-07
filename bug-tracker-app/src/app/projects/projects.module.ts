import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
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
  ],
  exports: [
    ProjectListComponent,
    ProjectEditComponent,
    ProjectItemComponent,
    ProjectsComponent
  ]
})
export class ProjectsModule { }
