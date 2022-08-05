import { TestBed } from '@angular/core/testing';

import { ProjectOperationsService } from './project-operations.service';

describe('ProjectOperationsService', () => {
  let service: ProjectOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
