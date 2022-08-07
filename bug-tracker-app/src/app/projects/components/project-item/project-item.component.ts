import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input()
  project: Project = {} as Project

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    console.log(this.project)
  }

  onEnterProject(){
    
    this.router.navigate(['bugs',this.project.id])
  }

}
