import { Component, Input, OnInit } from '@angular/core';
import { Project } from './models/project.model';
import { ProjectOperationsService } from './services/project-operations.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public projectOperations : ProjectOperationsService) { 
    this.projectOperations.getAll()
  }

  ngOnInit(): void {
  }

}
