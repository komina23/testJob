import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { taskList } from './create-task/create-task.component';
import {MatPaginatorIntl, MatPaginator} from '@angular/material/paginator';
import {Subject} from 'rxjs';


@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = $localize`Первая страница`;
  itemsPerPageLabel = $localize``;
  lastPageLabel = $localize`Последняя страница`;

  nextPageLabel = 'Следующая страница';
  previousPageLabel = 'Предыдущая страница';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`1 из 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`${page + 1} из ${amountPages}`;
  }
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less'],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}]
})
export class TaskListComponent implements OnInit{
  taskList:any[]=[];
  taskId:number = 0;
  sortBy:string = '';
  users:any[]=[];

  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

  testTaskValues:taskList[] = [
    {
      date: new Date(),
      name: '1 Разработка обложки',
      description: 'Разработка обложки для нового ...',
      priority: 'Средний',
      member: '162534356df543',
      id:Date.now() + Math.random()
    },
    {
      date: new Date(),
      name: '2 Разработка внутреннего дизайна',
      description: 'Разработка внутреннего дизайна для нового сайта',
      priority: 'Низкий',
      member: '162534356df543',
      id:Date.now() + Math.random()
    },
  ];
  constructor(private dialog: MatDialog, private Service:AuthService){}

  ngOnInit(): void {
    if(this.Service.getItem('tasks').length === undefined){
      this.Service.setItem('tasks',JSON.stringify(this.testTaskValues));
    }
    this.onLoadTaskList();
    this.onLoadUser();
  }
  onLoadUser(){
    this.users = this.Service.getItem('users');
  }

  onSortBy(value:any){
      this.sortBy = value;
      if(this.sortBy == 'date'){
        this.sortByDate();
      }else{
        this.sortByName();
      }
  }
  onLoadTaskList(){
    this.taskList = JSON.parse(this.Service.getItem('tasks'));  
      this.paginator.pageSize = 10;
      this.paginator.length = this.taskList.length;
  }
  
  getTasksForCurrentPage() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    return this.taskList.slice(startIndex, endIndex);
  }

  sortByDate(){
    this.taskList = this.taskList.sort((a,b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }
  sortByName(){
    this.taskList = this.taskList.sort((a, b) => {
      return a.member.localeCompare(b.member);
    });
  }

  removeTask(id:number){
    let tasks = JSON.parse(this.Service.getItem('tasks'));
    let task = tasks.findIndex((item:any) => item.id === id);
    if (task !== -1) {
      tasks.splice(task, 1);
      localStorage.setItem('tasks', JSON.stringify(task));
    }
    window.location.reload();
  }


  onViewTask(id:number){
    this.taskId = id;
  }
}
