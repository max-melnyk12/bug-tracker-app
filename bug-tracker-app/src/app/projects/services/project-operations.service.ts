import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { ProjectApiService } from './project-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectOperationsService {

  public projects: Project[] = []

  constructor(private projectApi: ProjectApiService) { }

  getAll(){
    this.projectApi.getAll().subscribe(projects=>this.projects=projects)  
  }

  createNew(newProjectName : string, newDescription: string) {
    const newBugData : Project = {
        id : 0,
        name : newProjectName,
        commencementDate : new Date(),
        description: newDescription
    }
    this.projectApi
        .save(newBugData)
        .subscribe(newProject => {
            this.projects = [...this.projects, newProject];
        });
        
}

}
