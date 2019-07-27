import { Component, OnInit, ViewChildren, AfterViewInit, Directive, QueryList } from '@angular/core';
import { TaskService } from '../services/Task-service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  display_dialog: Boolean;
  pending: Array<Object> = [];
  inComplete: Array<Object> = [];
  completed: Array<Object> = [];
  draggedTask: any;
  draggedTaskStatus: any;
  droppedTaskStatus: any;
  draggedTaskIndex: number;
  msgs: Message[] = [];
  editIndex: number;
  editableData: Object;
  taskOrder;
  @ViewChildren("task") task: QueryList<any>;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.display_dialog = false;
    this.taskOrder = 'priority.id'
    this.pending = this.taskService.getTasks("pending");
    this.inComplete = this.taskService.getTasks("inComplete");
    this.completed = this.taskService.getTasks("complete");
  }

  showDialog() {
    this.display_dialog = !this.display_dialog;
  }

  addToPendingList(newTasks) {
    this.pending = newTasks;
    this.display_dialog = false;
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'New Task', detail: 'Successfully Added' });


  }

  editTask(e, task) {

    console.log(task.priority);
    this.editableData = task;
    for (let i in this.pending) {
      console.log("traversing :::  ", (Object)(this.pending[i]).id);
      if ((Object)(this.pending[i]).id == task.id) {
        this.editIndex = parseInt(i);
        break;
      }
    }
    console.log("INDEX  ::",this.editIndex);
    this.display_dialog = true;
  }

  deleteTask(e, status, task) {
    console.log("Task to be deleted :::   ", task);
    let allTask = this.taskService.getTasks(status);
    let deleteIndex: number;
    if (status == "pending") {
      for (let i in this.pending) {
        console.log("traversing :::  ", (Object)(this.pending[i]).id);
        if ((Object)(this.pending[i]).id == task.id) {
          deleteIndex = parseInt(i);
          break;
        }
      }
    }

    else if (status == "inComplete") {
      let deleteIndex: number;
      for (let i in this.inComplete) {
        console.log("traversing :::  ", (Object)(this.inComplete[i]).id);
        if ((Object)(this.inComplete[i]).id == task.id) {
          deleteIndex = parseInt(i);
          break;
        }
      }
    }

    allTask.splice(deleteIndex, 1);
    this.taskService.clearAll(status);
    if (status == "pending") {
      this.pending = allTask;
    }
    if (status == "inComplete") {
      this.inComplete = allTask;
    }
    for (let i of allTask) {
      this.taskService.saveNewTask(i, status);
    }

  }


  dragStart(event, task, id, status) {
    this.draggedTask = task;

    let allTask = this.taskService.getTasks(status);
    if (status == "pending") {
      for (let i in this.pending) {
        console.log(" drag Start traversing :::  ", (Object)(this.pending[i]).id);
        if ((Object)(this.pending[i]).id == task.id) {
          this.draggedTaskIndex = parseInt(i);
          break;
        }
      }
    }

    else if (status == "inComplete") {

      for (let i in this.inComplete) {
        console.log("traversing :::  ", (Object)(this.inComplete[i]).id);
        if ((Object)(this.inComplete[i]).id == task.id) {
          this.draggedTaskIndex = parseInt(i);
          break;
        }
      }
    }
    this.draggedTaskStatus = status;
    console.log("dragging started")
  }

  drop(event, status) {
    this.droppedTaskStatus = status;
    if (this.draggedTaskStatus == this.droppedTaskStatus) {
      return false;
    }
    if (this.draggedTaskStatus == "pending" && this.droppedTaskStatus == "complete") {
      return false;
    }
    if (this.draggedTask) {
      let dragAllTask;
      if (this.droppedTaskStatus == "inComplete") {
        dragAllTask = this.taskService.getTasks("pending");
      }
      if (this.droppedTaskStatus == "complete") {
        dragAllTask = this.taskService.getTasks("inComplete");
      }
      let dropAlltasks;
      if (this.droppedTaskStatus == "inComplete") {

        //dropAlltasks.push(this.pending[this.draggedTaskIndex]);
        this.taskService.saveNewTask(this.pending[this.draggedTaskIndex], this.droppedTaskStatus);
        dropAlltasks = this.taskService.getTasks("inComplete");
      }

      if (this.droppedTaskStatus == "complete") {

        // dropAlltasks.push(this.pending[this.draggedTaskIndex]);
        //this.taskService.clearAll(this.droppedTaskStatus);

        this.taskService.saveNewTask(this.inComplete[this.draggedTaskIndex], this.droppedTaskStatus);
        dropAlltasks = this.taskService.getTasks(this.droppedTaskStatus);

      }


      dragAllTask.splice(this.draggedTaskIndex, 1);
      this.taskService.clearAll(this.draggedTaskStatus);
      for (let i of dragAllTask) {
        this.taskService.saveNewTask(i, this.draggedTaskStatus);
      }
      console.log("dropped");
      if (status == "inComplete") {
        this.inComplete = dropAlltasks;
        this.pending = dragAllTask;
      }
      if (status == "complete") {
        this.completed = dropAlltasks;
        this.inComplete = dragAllTask;
      }

    }
  }

  dragEnd(event) {
    this.draggedTask = null;
    this.draggedTaskStatus = null;
    this.droppedTaskStatus = null;
    this.draggedTaskIndex = null;

    console.log("finished dragging");
  }

  changePriority(change, task) {

    let allTask = this.taskService.getTasks("pending");

    if (change == "increase") {
      console.log("INCREASING")
      for (let i in this.pending) {
        if ((Object)(this.pending[i]).id == task.id) {
          (Object)(this.pending[i]).priority.id--;
          console.log("NEW PRIORITY ID :: ", (Object)(this.pending[i]).priority.id)
          if ((Object)(this.pending[i]).priority.id == 1) {
            (Object)(this.pending[i]).priority.name = "Very High";
            console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority)
            break;
          }

          else if ((Object)(this.pending[i]).priority.id == 2) {
            (Object)(this.pending[i]).priority.name = "High";
            console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority)
            break;
          }

          else if ((Object)(this.pending[i]).priority.id == 3) {
            (Object)(this.pending[i]).priority.name = "Medium";
            console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority)
            break;
          }

          else if ((Object)(this.pending[i]).priority.id == 4) {
            (Object)(this.pending[i]).priority.name = "Low";
            console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority)
            break;
          }
        }
       
      }
      
      this.taskService.clearAll("pending");
      for(let i in this.pending){
        this.taskService.saveNewTask(this.pending[i],"pending");
      }
      

    }

    else if(change=='decrease'){
      console.log(" DECREASING ");
      for (let i in this.pending) {
        if ((Object)(this.pending[i]).id == task.id) {
          (Object)(this.pending[i]).priority.id++;
          console.log("NEW PRIORITY ID :: ", (Object)(this.pending[i]).priority.id)
          
          if ((Object)(this.pending[i]).priority.id == 2) {
            (Object)(this.pending[i]).priority.name = "High";
            console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority)
            break;
          }

          else if ((Object)(this.pending[i]).priority.id == 3) {
            (Object)(this.pending[i]).priority.name = "Medium";
            console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority)
            break;
          }

          else if ((Object)(this.pending[i]).priority.id == 4) {
            (Object)(this.pending[i]).priority.name = "Low";
            console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority)
            break;
          }

          else if ((Object)(this.pending[i]).priority.id == 5) {
            (Object)(this.pending[i]).priority.name = "Very Low";
            console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority)
            break;
          }
        }
       
      }
      
      this.taskService.clearAll("pending");
      for(let i in this.pending){
        this.taskService.saveNewTask(this.pending[i],"pending");
      }
      
    }
  }

  clearForm(){
    this.editableData=null;
  }

}
