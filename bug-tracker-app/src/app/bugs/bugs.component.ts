import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Bug } from "./models/bug.model";
import { BugOperationsService } from "./services/bugOperations.service";

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html',
    styleUrls : ['bugs.component.css']
})
export class BugsComponent{

    sortAttr : string = '';
    sortDesc : boolean = false;

    constructor(public bugOperations : BugOperationsService, private route: ActivatedRoute){
        this.route.params.subscribe(params=>{
            this.bugOperations.getAll(params['projectId'])
        })
    }
}