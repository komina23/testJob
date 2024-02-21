import { Component, Input, OnChanges, SimpleChanges, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { taskList } from '../create-task/create-task.component';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.less']
})
export class ViewTaskComponent implements OnChanges{
  @Input() taskId:number = 0;
  task: any = {};
  priority: string[] = ['Высокий', 'Средний', 'Низкий'];
  @ViewChild('viewTaskPopup', { static: true }) viewTaskPopup!: TemplateRef<any>;
  constructor(private dialog: MatDialog, private AuthService:AuthService){}  

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskId'] && this.taskId!=0) {
      console.log(this.taskId);
      this.openPopup();
    }
  }
  openPopup() {
    this.onLoadTask();
    this.dialog.open(this.viewTaskPopup);
  }

  onLoadTask(){
    let tasks = JSON.parse(this.AuthService.getItem('tasks'));
    let task: taskList[] = tasks.find((item:any) => item.id === this.taskId);
    this.task = task;
    console.log(this.task)
  }
}
