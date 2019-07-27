(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-dashboard></app-dashboard>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-form/task-form.component */ "./src/app/task-form/task-form.component.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_Task_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/Task-service */ "./src/app/services/Task-service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/local_storage.service */ "./src/app/services/local_storage.service.ts");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dragdrop */ "./node_modules/primeng/dragdrop.js");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_dragdrop__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_8__["TaskFormComponent"]
                /*     OrderByPipe */
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_9__["PanelModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_17__["CardModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_16__["GrowlModule"],
                primeng_dragdrop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_19__["OrderModule"]
            ],
            providers: [_services_Task_service__WEBPACK_IMPORTED_MODULE_13__["TaskService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_14__["LocalStorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\nul li{\r\n    list-style-type: none;\r\n    color: white;\r\n}\r\n\r\n.ui-panel-content{\r\n    height: 450px;\r\n    overflow-y: scroll ;\r\n}\r\n\r\n.right{\r\n    float: right;\r\n}\r\n\r\n.left{\r\n    float: left;\r\n}\r\n\r\ni{\r\n    cursor: pointer;\r\n}\r\n\r\n.hide{\r\n    visibility: hidden;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toolbar>\n    <div class=\"ui-toolbar-group-left\" style=\"padding: 5px 0px;\">\n       <h3>Task Management</h3>\n        \n        <!-- <p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\" styleClass=\"ui-button-warning\"></p-splitButton> -->\n    </div>\n    \n    <div class=\"ui-toolbar-group-right\" style=\"padding: 20px 0px;\">\n        <!--<button pButton type=\"button\"><i class=\"pi pi-plus\"></i>&nbsp; New Task</button>-->\n        \n        \n<button pButton type=\"button\" label=\"New\" icon=\" pi pi-plus\" (click)=\"showDialog()\"></button>\n    </div>\n</p-toolbar>\n\n<!-- DASHBOARD -->\n<p-growl [(value)]=\"msgs\" ></p-growl>\n<!-- PENDING -->\n<p-panel [style]=\"{'margin-top':'3em'}\" class=\"ui-g-4\">\n    <p-header>\n        <div class=\"ui-helper-clearfix\">\n            <span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px;font-weight:bolder\">Pending</span>\n            \n        </div>\n    </p-header>\n    <div class=\"ui-panel-content\">\n    <ul  id=\"pending\" *ngFor=\"let i of pending|orderBy:taskOrder; let indx=index\">\n    \n    <li #task  style=\"background-color: orangered !important\" pDraggable=\"t1\" (onDragStart)=\"dragStart($event,i,i.id,'pending')\" (onDragEnd)=\"dragEnd($event)\">\n       <div class=\"left\" style=\"padding:5px \">\n            <i class=\"pi pi-chevron-circle-up\" style=\"font-size: 1.5em\" (click)=\"changePriority('increase',i)\" [class.hide]=\"(i.priority.id)==1\"></i><br>\n            <i class=\"pi pi-chevron-circle-down\" style=\"font-size: 1.5em\" (click)=\"changePriority('decrease',i)\" [class.hide]=\"(i.priority.id)==5\"></i>\n        </div> \n\n        <p-card >\n        \n             {{i.title}} <div class=\"right\"><i class=\"far fa-edit\" (click)=\"editTask($event,i)\"></i> &nbsp;&nbsp;&nbsp;<i class=\"far fa-trash-alt\" (click)=\"deleteTask($event,'pending',i)\"></i></div>\n        </p-card>\n        </li>\n    </ul>\n    </div>\n \n</p-panel>\n\n<!-- IN-PROGRESS -->\n<p-panel [style]=\"{'margin-top':'3em'}\" class=\"ui-g-4\">\n    <p-header>\n        <div class=\"ui-helper-clearfix\">\n            <span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px;font-weight:bolder\">In progress</span>\n            \n        </div>\n    </p-header>\n     <div class=\"ui-panel-content\" pDroppable=\"t1\" (onDrop)=\"drop($event,'inComplete')\">\n    <ul *ngFor=\"let i of inComplete; let indx=index\" id=\"inComplete\">\n    <li #task style=\"background-color: yellow !important\"  pDraggable=\"t1\" (onDragStart)=\"dragStart($event,i,i.id,'inComplete')\" (onDragEnd)=\"dragEnd($event)\">\n        <p-card >\n            {{i.title}}<div class=\"right\"><i  class=\"far fa-trash-alt\" (click)=\"deleteTask($event,'inComplete',i)\"></i></div>\n        </p-card>\n        </li>\n    </ul>\n    </div>\n    \n</p-panel>\n\n\n<!-- COMPLETED -->\n<p-panel [style]=\"{'margin-top':'3em'}\" class=\"ui-g-4\">\n    <p-header>\n        <div class=\"ui-helper-clearfix\">\n            <span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px;font-weight:bolder\">Completed</span>\n            \n        </div>\n    </p-header>\n        <div class=\"ui-panel-content\" pDroppable=\"t1\" (onDrop)=\"drop($event,'complete')\">\n    <ul *ngFor=\"let i of completed; let indx=index\" id=\"completed\">\n    <li #task style=\"background-color: green !important\">\n        <p-card >\n            {{i.title}}\n        </p-card>\n        </li>\n    </ul>\n    </div>\n   \n</p-panel>\n\n\n<!-- Modal Form -->\n\n<p-dialog header=\"Add/Edit Task\" [(visible)]=\"display_dialog\" (onHide)=\"clearForm()\"  [modal]=\"true\" [responsive]=\"true\" [width]=\"800\"  [minWidth]=\"200\" [minHeight]=\"300\" [minY]=\"120\" \n        [baseZIndex]=\"10000\">\n    \n        <app-task-form (newTask)=\"addToPendingList($event)\"  [editData]=\"editableData\" [editableIndex]=\"editIndex\"></app-task-form>\n</p-dialog>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Task-service */ "./src/app/services/Task-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(taskService) {
        this.taskService = taskService;
        this.pending = [];
        this.inComplete = [];
        this.completed = [];
        this.msgs = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.display_dialog = false;
        this.taskOrder = 'priority.id';
        this.pending = this.taskService.getTasks("pending");
        this.inComplete = this.taskService.getTasks("inComplete");
        this.completed = this.taskService.getTasks("complete");
    };
    DashboardComponent.prototype.showDialog = function () {
        this.display_dialog = !this.display_dialog;
    };
    DashboardComponent.prototype.addToPendingList = function (newTasks) {
        this.pending = newTasks;
        this.display_dialog = false;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'New Task', detail: 'Successfully Added' });
    };
    DashboardComponent.prototype.editTask = function (e, task) {
        console.log(task.priority);
        this.editableData = task;
        for (var i in this.pending) {
            console.log("traversing :::  ", (Object)(this.pending[i]).id);
            if ((Object)(this.pending[i]).id == task.id) {
                this.editIndex = parseInt(i);
                break;
            }
        }
        console.log("INDEX  ::", this.editIndex);
        this.display_dialog = true;
    };
    DashboardComponent.prototype.deleteTask = function (e, status, task) {
        console.log("Task to be deleted :::   ", task);
        var allTask = this.taskService.getTasks(status);
        var deleteIndex;
        if (status == "pending") {
            for (var i in this.pending) {
                console.log("traversing :::  ", (Object)(this.pending[i]).id);
                if ((Object)(this.pending[i]).id == task.id) {
                    deleteIndex = parseInt(i);
                    break;
                }
            }
        }
        else if (status == "inComplete") {
            var deleteIndex_1;
            for (var i in this.inComplete) {
                console.log("traversing :::  ", (Object)(this.inComplete[i]).id);
                if ((Object)(this.inComplete[i]).id == task.id) {
                    deleteIndex_1 = parseInt(i);
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
        for (var _i = 0, allTask_1 = allTask; _i < allTask_1.length; _i++) {
            var i = allTask_1[_i];
            this.taskService.saveNewTask(i, status);
        }
    };
    DashboardComponent.prototype.dragStart = function (event, task, id, status) {
        this.draggedTask = task;
        var allTask = this.taskService.getTasks(status);
        if (status == "pending") {
            for (var i in this.pending) {
                console.log(" drag Start traversing :::  ", (Object)(this.pending[i]).id);
                if ((Object)(this.pending[i]).id == task.id) {
                    this.draggedTaskIndex = parseInt(i);
                    break;
                }
            }
        }
        else if (status == "inComplete") {
            for (var i in this.inComplete) {
                console.log("traversing :::  ", (Object)(this.inComplete[i]).id);
                if ((Object)(this.inComplete[i]).id == task.id) {
                    this.draggedTaskIndex = parseInt(i);
                    break;
                }
            }
        }
        this.draggedTaskStatus = status;
        console.log("dragging started");
    };
    DashboardComponent.prototype.drop = function (event, status) {
        this.droppedTaskStatus = status;
        if (this.draggedTaskStatus == this.droppedTaskStatus) {
            return false;
        }
        if (this.draggedTaskStatus == "pending" && this.droppedTaskStatus == "complete") {
            return false;
        }
        if (this.draggedTask) {
            var dragAllTask = void 0;
            if (this.droppedTaskStatus == "inComplete") {
                dragAllTask = this.taskService.getTasks("pending");
            }
            if (this.droppedTaskStatus == "complete") {
                dragAllTask = this.taskService.getTasks("inComplete");
            }
            var dropAlltasks = void 0;
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
            for (var _i = 0, dragAllTask_1 = dragAllTask; _i < dragAllTask_1.length; _i++) {
                var i = dragAllTask_1[_i];
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
    };
    DashboardComponent.prototype.dragEnd = function (event) {
        this.draggedTask = null;
        this.draggedTaskStatus = null;
        this.droppedTaskStatus = null;
        this.draggedTaskIndex = null;
        console.log("finished dragging");
    };
    DashboardComponent.prototype.changePriority = function (change, task) {
        var allTask = this.taskService.getTasks("pending");
        if (change == "increase") {
            console.log("INCREASING");
            for (var i in this.pending) {
                if ((Object)(this.pending[i]).id == task.id) {
                    (Object)(this.pending[i]).priority.id--;
                    console.log("NEW PRIORITY ID :: ", (Object)(this.pending[i]).priority.id);
                    if ((Object)(this.pending[i]).priority.id == 1) {
                        (Object)(this.pending[i]).priority.name = "Very High";
                        console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority);
                        break;
                    }
                    else if ((Object)(this.pending[i]).priority.id == 2) {
                        (Object)(this.pending[i]).priority.name = "High";
                        console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority);
                        break;
                    }
                    else if ((Object)(this.pending[i]).priority.id == 3) {
                        (Object)(this.pending[i]).priority.name = "Medium";
                        console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority);
                        break;
                    }
                    else if ((Object)(this.pending[i]).priority.id == 4) {
                        (Object)(this.pending[i]).priority.name = "Low";
                        console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority);
                        break;
                    }
                }
            }
            this.taskService.clearAll("pending");
            for (var i in this.pending) {
                this.taskService.saveNewTask(this.pending[i], "pending");
            }
        }
        else if (change == 'decrease') {
            console.log(" DECREASING ");
            for (var i in this.pending) {
                if ((Object)(this.pending[i]).id == task.id) {
                    (Object)(this.pending[i]).priority.id++;
                    console.log("NEW PRIORITY ID :: ", (Object)(this.pending[i]).priority.id);
                    if ((Object)(this.pending[i]).priority.id == 2) {
                        (Object)(this.pending[i]).priority.name = "High";
                        console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority);
                        break;
                    }
                    else if ((Object)(this.pending[i]).priority.id == 3) {
                        (Object)(this.pending[i]).priority.name = "Medium";
                        console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority);
                        break;
                    }
                    else if ((Object)(this.pending[i]).priority.id == 4) {
                        (Object)(this.pending[i]).priority.name = "Low";
                        console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority);
                        break;
                    }
                    else if ((Object)(this.pending[i]).priority.id == 5) {
                        (Object)(this.pending[i]).priority.name = "Very Low";
                        console.log("NEW PRIORITY OBJECT :: ", (Object)(this.pending[i]).priority);
                        break;
                    }
                }
            }
            this.taskService.clearAll("pending");
            for (var i in this.pending) {
                this.taskService.saveNewTask(this.pending[i], "pending");
            }
        }
    };
    DashboardComponent.prototype.clearForm = function () {
        this.editableData = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])("task"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DashboardComponent.prototype, "task", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/services/Task-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/Task-service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local_storage.service */ "./src/app/services/local_storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService(ls) {
        this.ls = ls;
    }
    TaskService.prototype.saveNewTask = function (item, status) {
        var task = this.getTasks(status);
        task.push(item); // add item
        this.ls.storeJSON(status, task); // store in storage
    };
    TaskService.prototype.getTasks = function (status) {
        var task = this.ls.fetchJSON(status);
        return task && task.length ? task : [];
    };
    TaskService.prototype.clearAll = function (key) {
        this.ls.clear(key);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/local_storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local_storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.storeJSON = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    LocalStorageService.prototype.fetchJSON = function (key) {
        var data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    };
    LocalStorageService.prototype.clear = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/task-form/custom-required.ts":
/*!**********************************************!*\
  !*** ./src/app/task-form/custom-required.ts ***!
  \**********************************************/
/*! exports provided: Validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validate", function() { return Validate; });
var Validate = /** @class */ (function () {
    function Validate() {
    }
    Validate.CustomRequired = function (control) {
        var value = (String)(control.value).trim();
        if (value) {
            return null;
        }
        else {
            return { Required: true };
        }
    };
    return Validate;
}());



/***/ }),

/***/ "./src/app/task-form/task-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-form/task-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.input-group{\r\n    margin-bottom: 2.4em;\r\n}\r\n\r\ninput, .input-dropdown{\r\n    width:95%;\r\n    padding: 10px 7px\r\n}\r\n"

/***/ }),

/***/ "./src/app/task-form/task-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-form/task-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"taskForm\">\n<div class=\"ui-g-7\">\n<span style=\"font-size:0.9em;color:gray;padding:0px 5px\"> Task no.: <label>{{id}}</label></span> <br><br>\n  <div class=\"input-group\">\n    <span class=\"ui-float-label\">\n      <input id=\"float-input\" type=\"text\"  pInputText formControlName=\"title\"> \n      <label for=\"float-input\">Title</label>\n  </span>\n  </div>\n\n  <div class=\"input-group\">\n    <span class=\"ui-float-label\">\n      <input id=\"float-input\" type=\"text\"  pInputText  formControlName=\"description\"> \n      <label for=\"float-input\">Desciption</label>\n    </span>\n  </div>\n\n  <div class=\"input-group\">\n    <p-dropdown [options]=\"priorityList\" formControlName=\"priority\" placeholder=\"Select priority\" optionLabel=\"name\" [showClear]=\"true\" [style]=\"{'width':'95%', 'padding':'10px 7px'}\"></p-dropdown>\n\n  </div>\n\n  <button pButton type=\"button\" label=\"Save\" [disabled]=\"!taskForm.valid\" (click)=\"saveFormData($event,taskForm)\"></button>\n\n</div>\n\n<div class=\"ui-g-5\">\n   <p-calendar formControlName=\"date\" [inline]=\"true\" ></p-calendar>\n\n</div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/task-form/task-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-form/task-form.component.ts ***!
  \**************************************************/
/*! exports provided: TaskFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function() { return TaskFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_required__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-required */ "./src/app/task-form/custom-required.ts");
/* harmony import */ var _services_Task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Task-service */ "./src/app/services/Task-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskFormComponent = /** @class */ (function () {
    function TaskFormComponent(fb, taskService) {
        this.fb = fb;
        this.taskService = taskService;
        this.pending = [];
        this.inComplete = [];
        this.completed = [];
        this.newTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.today = new Date();
        this.minDate = new Date();
    }
    TaskFormComponent.prototype.ngOnChanges = function (changes) {
        console.log("CHANGES ::: ", changes);
        if (changes.editData != null && changes.editData.currentValue != null) {
            console.log(this.editData);
            this.taskForm.patchValue({
                title: this.editData.title,
                description: this.editData.description,
                priority: this.editData.priority,
                id: this.editData.id,
                date: new Date(this.editData.date)
            });
            this.id = this.editData.id;
            this.editMode = true;
        }
        else if (changes.editData != null && changes.editData.currentValue == null && !changes.editData.firstChange) {
            this.taskForm.reset();
            this.taskForm.patchValue({
                date: new Date()
            });
            this.setId();
        }
    };
    TaskFormComponent.prototype.ngOnInit = function () {
        this.priorityList = [
            { id: '1', name: "Very High" },
            { id: '2', name: "High" },
            { id: '3', name: "Medium" },
            { id: '4', name: "Low" },
            { id: '5', name: "Very Low" }
        ];
        this.prepareForm();
        this.setId();
    };
    TaskFormComponent.prototype.setId = function () {
        var pendingTasks = this.taskService.getTasks("pending");
        var max = 0;
        if (pendingTasks.length) {
            for (var i in pendingTasks) {
                console.log("SET ID ::", pendingTasks[i]);
                //let id=pendingTasks[i].id;
                if (max < pendingTasks[i].id) {
                    max = pendingTasks[i].id;
                }
            }
            console.log("MAX ID :: ", max);
            this.id = max + 1;
        }
        else {
            this.id = 1;
            console.log(this.id);
        }
        this.taskForm.patchValue({
            id: this.id
        });
    };
    TaskFormComponent.prototype.prepareForm = function () {
        this.taskForm = this.fb.group({
            title: [, [_custom_required__WEBPACK_IMPORTED_MODULE_2__["Validate"].CustomRequired]],
            description: [],
            priority: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            id: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    TaskFormComponent.prototype.saveFormData = function (e, taskForm) {
        console.log(taskForm.value);
        this.taskService.saveNewTask(taskForm.value, "pending");
        //this.pending.push(taskForm.value);
        if (this.editMode) {
            var allTasks = this.taskService.getTasks("pending");
            allTasks.splice(this.editableIndex, 1);
            this.taskService.clearAll("pending");
            for (var _i = 0, allTasks_1 = allTasks; _i < allTasks_1.length; _i++) {
                var i = allTasks_1[_i];
                this.taskService.saveNewTask(i, "pending");
            }
            //this.taskService.saveNewTask(taskForm.value,"pending");
            this.editMode = false;
            //this.newTask.emit()
        }
        this.newTask.emit(this.taskService.getTasks("pending"));
        this.taskForm.reset();
        this.editableIndex = null;
        this.editData = null;
        this.setId();
        this.taskForm.patchValue({
            date: new Date()
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskFormComponent.prototype, "editData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskFormComponent.prototype, "editableIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TaskFormComponent.prototype, "newTask", void 0);
    TaskFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-form',
            template: __webpack_require__(/*! ./task-form.component.html */ "./src/app/task-form/task-form.component.html"),
            styles: [__webpack_require__(/*! ./task-form.component.css */ "./src/app/task-form/task-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_Task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]])
    ], TaskFormComponent);
    return TaskFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\intel\ng-task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map