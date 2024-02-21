import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { user } from 'src/app/authorization/login-page/login-page.component';
export interface sort{
  value:string,
  viewValue:string,
  selected:boolean
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit{
   selectedValue?: string;
   userInfo:user[]=[];
   name='';
   photo='';

    @Input() title:string = 'Title';
    @Output() sortBy = new EventEmitter<any>();

    sortParams:sort[]=[
      {
        value:'date',
        viewValue:'Дате',
        selected:true
      },
      {
        value:'name',
        viewValue:'Имени',
        selected:false
      },
    ]
    ngOnInit(): void {
      this.userData();
      this.selectedValue = this.sortParams.find((param:any)=> param.selected)?.value;
      this.onSortChange({target: {value: this.selectedValue}});
    }
    

    onSortChange(val:any){
      let sortVal = val.target.value;
      this.sortBy.emit(sortVal);
    }

    userData(){
      let userData = localStorage.getItem('currentUser');
      let userInfo = userData ? JSON.parse(userData) : {};
      this.name = userInfo.displayName;
      this.photo = userInfo.avatar;
    }
}
