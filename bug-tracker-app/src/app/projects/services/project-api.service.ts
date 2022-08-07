import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {

  constructor(private http : HttpClient){

  }

  getAll() : Observable<Project[]> {
      return this.http
          .get<Project[]>('http://localhost:3000/projects')
  }

  save(projectData : Project) : Observable<Project> {
      if (projectData.id === 0){
          return this.http.post<Project>('http://localhost:3000/projects', projectData)
      } else {
          return this.http.put<Project>(`http://localhost:3000/projects/${projectData.id}`, projectData)
      }
  }

  remove(projectData : Project) : Observable<any> {
      return this.http.delete(`http://localhost:3000/projects/${projectData.id}`)
  }

  
}
