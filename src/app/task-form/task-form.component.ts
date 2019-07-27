import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validate } from './custom-required'
import { TaskService } from '../services/Task-service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnChanges {
 
  @Input() editData: any;
  @Input() editableIndex: any;
  taskForm: FormGroup;
  id:number;
  priorityList: Array<Object>;
  today: Date;
  minDate: Date;
  defaultDate: Date;
  date1: Date;
  pending: Array<Object> = [];
  inComplete: Array<Object> = [];
  completed: Array<Object> = [];
  editMode: boolean;
  @Output() newTask: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.today = new Date();
    this.minDate = new Date();
  }

  ngOnChanges(changes: any) {
    console.log("CHANGES ::: ",changes);
    if (changes.editData != null && changes.editData.currentValue != null) {
      console.log(this.editData);
      this.taskForm.patchValue({
        title: this.editData.title,
        description: this.editData.description,
        priority: this.editData.priority,
        id:this.editData.id,
        date:new Date(this.editData.date)
        
      })
      this.id=this.editData.id;
      this.editMode = true;
    }
    else if(changes.editData != null && changes.editData.currentValue == null && !changes.editData.firstChange){
      this.taskForm.reset();
      this.taskForm.patchValue({
        date:new Date()
      });
      this.setId();
    }


  }
  ngOnInit() {

    this.priorityList = [
      { id: '1', name: "Very High" },
      { id: '2', name: "High" },
      { id: '3', name: "Medium" },
      { id: '4', name: "Low" },
      { id: '5', name: "Very Low" }

    ]
    
    

    this.prepareForm();
    this.setId();

  }

  setId() {
    let pendingTasks=this.taskService.getTasks("pending");
    let max=0;
    if(pendingTasks.length){
      for(let i in pendingTasks){
        console.log("SET ID ::",  pendingTasks[i]);
        //let id=pendingTasks[i].id;
         if(max< pendingTasks[i].id) {
           max=pendingTasks[i].id;
         }
      }
      console.log("MAX ID :: ",max);
      this.id=max+1;
    }
    else{
      this.id=1;
      console.log(this.id);
    }
    this.taskForm.patchValue({
      id:this.id
    })
    
  }
  prepareForm() {
    this.taskForm = this.fb.group({
      title: [, [Validate.CustomRequired]],
      description: [],
      priority: [, [Validators.required]],
      date: [new Date(), [Validators.required]],
      id:[,[Validators.required]]
    })
  }

  saveFormData(e, taskForm) {
    
    console.log(taskForm.value);
    this.taskService.saveNewTask(taskForm.value, "pending");
    //this.pending.push(taskForm.value);
    if (this.editMode) {
      let allTasks = this.taskService.getTasks("pending");
      allTasks.splice(this.editableIndex, 1);
      this.taskService.clearAll("pending");
      for (let i of allTasks) {
        this.taskService.saveNewTask(i, "pending");
      }
      //this.taskService.saveNewTask(taskForm.value,"pending");
      this.editMode = false;
      //this.newTask.emit()
    }
    this.newTask.emit(this.taskService.getTasks("pending"));
    this.taskForm.reset();
    this.editableIndex=null;
    this.editData=null;
    this.setId();
    this.taskForm.patchValue({
      date:new Date()
    })
  }
}
