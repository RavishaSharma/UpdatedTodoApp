import { Component, OnInit } from '@angular/core';
import { TodosModel } from 'src/app/Models/TodosModel';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    todos! : TodosModel[];
    inputTodo:string = "";

  constructor() { 
    }

  ngOnInit(): void {
    this.todos=[
      {
        content: 'First Todo',
       completed: false
      },
      {
        content: 'Second Todo',
        completed: false
  
      }
    ]
  }

  toggle(id:number): void
  { 
  this.todos.map((v, i) => {
  if (i == id) v.completed = !v.completed;

  return v;
  })
}

deleteItem(id: number)
{
  this.todos = this.todos.filter((v,i) => i!=id);
}

addTodo () {
  this.todos.push({
    content: this.inputTodo,
    completed: false
  });

  this.inputTodo = "";
}
}
