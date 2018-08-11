import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Restful tasks interactive";
  tasks = [];
  //task: any;
  shouldDisplayTasks: boolean;
  shouldDisplayTask: boolean;
  constructor(private _httpService: HttpService){}
  //ngOnInit will run when the component is initialized after the constructor method
  ngOnInit(){//this run and this object is built on initialization of angular, notice it is an instance of the class AppComponent
    this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks.push({"name": "DoAlgo", "desc": "Perform Algorithms", "message": "Do algorithms for one hour each day"});
      this.tasks.push({"name": "UsePM", "desc": "Use Postman", "message": "With Postman you can test your server routes and model schemas"});
      this.tasks.push({"name": "AnglForms", "desc": "Learn Angular Forms", "message": "Just post to server JSON and bodyparser will handle the rest"});
      this.tasks.push({"name": "drinkWater", "desc": "Drink Water", "message": "It is important to stay hydrated for success"});
    })
  }
  hideSection($event){
    $event.stopPropagation();
    this.shouldDisplayTasks = false;
  }
  showTasks(){
    this.shouldDisplayTasks = true;
  }
  showTask(task){
    this.shouldDisplayTask = true;
  }
}
