import { Component,OnInit,TemplateRef } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
export interface taskList{
  date: Date,
  name: string,
  description: string,
  priority:string,
  member:string,
  image?:string,
  id:number
}
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.less']
})
export class CreateTaskComponent implements OnInit{
  listMembers:any[] = [];
  priorityValue:string = '';
  uniqueId = Date.now() + Math.random();
  selectedMember:any[] = [];
  avatar:string = 'no-image.png';
  priority: string[] = ['Высокий', 'Средний', 'Низкий'];
  

  constructor( private dialog: MatDialog, private AuthService:AuthService){
  }
  ngOnInit(): void {
    this.members();
  }

  openPopup(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  members(){
    let users = this.AuthService.getItem('users');
    this.listMembers = users;
  }
  
  onSubmit(val:any){
    let newTask = val.value;
    let jsonTasks = this.AuthService.getItem('tasks');
    let parsedJson;  
    if(jsonTasks.length > 0){
      parsedJson = JSON.parse(jsonTasks);
      parsedJson.push(newTask);
      this.AuthService.setItem('tasks',JSON.stringify(parsedJson));
    }else{
      this.AuthService.setItem('tasks',JSON.stringify(val.value));
    }
    window.location.reload();
  }
  
  onDraft(val:any){
    console.log(val);
  }

}
