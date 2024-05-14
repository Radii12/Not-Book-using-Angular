import { Component, EventEmitter, Output ,Input} from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

@Output() sendTask = new EventEmitter();
  constructor(){}
addTask(task: string){
  // this.list.push({id:this.list.length ,name : task})
  // const filterdList=this.list.filter((tas:any)=> tas.id !==this.itemId)
  // console.log("her fkkr"+filterdList[1])
  this.sendTask.emit(task)
}

}
