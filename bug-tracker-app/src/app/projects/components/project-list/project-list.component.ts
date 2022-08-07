import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectOperationsService } from '../../services/project-operations.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(public projectOperations: ProjectOperationsService, private router: Router) { }

  ngOnInit(): void {
  }

  onAddProject(){
    this.router.navigate(['new'])
  }

}
