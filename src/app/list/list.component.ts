import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() listTasks:any=[]
@Output() sendDeleteTask=new EventEmitter();
@Output() sendCompleteTask=new EventEmitter();
@Output() sendUndoTask=new EventEmitter();

completeTaske(id: string){
this.sendCompleteTask.emit(id)
}
deleteTask(id :string){
  this.sendDeleteTask.emit(id)
  console.log("form childe"+id)
}
undoTask(id:string)
{
this.sendUndoTask.emit(id)
}
}
