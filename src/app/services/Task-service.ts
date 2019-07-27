import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local_storage.service";

@Injectable()
export class TaskService {
  constructor(private ls: LocalStorageService) {}

  saveNewTask(item,status) {
    let task = this.getTasks(status);

    task.push(item); // add item
    this.ls.storeJSON(status, task); // store in storage
  }

  getTasks(status) {
    let task = this.ls.fetchJSON(status);
    return task && task.length ? task : [];
  }
  clearAll(key){
    
    this.ls.clear(key);
 
  }
}
