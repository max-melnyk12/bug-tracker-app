import { Component, EventEmitter, Output } from "@angular/core";
import { Bug } from "../../models/bug.model";
import { BugOperationsService } from "../../services/bugOperations.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'app-bug-edit',
    templateUrl : 'bugEdit.component.html',
    styleUrls : ['bugEdit.component.css']
})
export class BugEditComponent{

    projectId: number = 0

    newBugForm = new FormGroup({
        newBugName : new FormControl('', [
            Validators.required,
            Validators.minLength(10)
        ]),
        newBugDesc : new FormControl('')
    })

    constructor(private bugOperations : BugOperationsService, private route: ActivatedRoute){
        this.route.params.subscribe(params=>{
            this.projectId = params['projectId']
        })
    }

    get newBugName(){
        return this.newBugForm.get('newBugName')
    }

    get newBugDesc(){
        return this.newBugForm.get('newBugDesc')
    }

    onAddNew(){
        if (this.newBugForm.valid){
            this.bugOperations.createNew(this.newBugForm.value.newBugName || '', this.projectId);
        }
    }

}