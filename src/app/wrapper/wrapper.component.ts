import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';
import { filter } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [FormComponent,ListComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {
  tasks :any[]=[]
  handTasks(task: string){
    this.tasks.push({id:this.tasks.length ,name : task,complete:"false"})


  }
  handelCompleteTask(id:number){

      this.tasks[id].complete=false
      console.log(this.tasks[id])
  }
  handUndoTask(id :number){
    this.tasks[id].complete=true
    console.log(this.tasks[id])

  }
  handelDeleteTask(id:string)
{
  this.tasks=this.tasks.filter((tas:any)=> tas.id !==id)
}
}
