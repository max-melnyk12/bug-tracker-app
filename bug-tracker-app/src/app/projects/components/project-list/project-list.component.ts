import { Component, OnInit } from '@angular/core';
import { ProjectOperationsService } from '../../services/project-operations.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(public projectOperations: ProjectOperationsService) { }

  ngOnInit(): void {
  }

}
