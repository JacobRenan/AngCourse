import { Component, DoCheck, OnInit } from '@angular/core';
//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  constructor() { }

  public TaskList: Array<TaskList> = [ ];

  public deleteItem(event: number){
    this.TaskList.splice(event, 1);
  }

  public deleteAll(){
    const confirm= window.confirm("Você realmente deseja deletar tudo?")
    if(confirm){
      this.TaskList = [];
    }    
  }

  public setItem(event: string){
    this.TaskList.push({task: event, checked: false});
  }

  ngDoCheck(): void {
    this.TaskList.sort((first, last)=> Number(first.checked) - Number(last.checked))
  }

}
