import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectOperationsService } from '../../services/project-operations.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  
  newProjectForm = new FormGroup({
    newProjectName : new FormControl('', [
        Validators.required,
        Validators.minLength(10)
    ]),
    newProjectDesc : new FormControl('')
  })

  constructor(private projectOps: ProjectOperationsService) { }

  ngOnInit(): void {
  }

  get newProjectName(){
    return this.newProjectForm.get('newProjectName')
  }

  get newProjectDesc(){
    return this.newProjectForm.get('newProjectDesc')
  }

  onAddNew(){
    if (this.newProjectForm.valid){
      this.projectOps.createNew(this.newProjectForm.value.newProjectName || '', this.newProjectForm.value.newProjectDesc || '');
  }
  }

}
