import { Component } from '@angular/core'
import { OnInit } from '@angular/core'

@Component({
    moduleId: module.id,
    selector:'emp',
    templateUrl:'emp.component.html'
})

export class EmpComponent implements OnInit{
private EmpList: IEmployee[];
newEmp: IEmployee;    

constructor(){
    this.EmpList = [];
}

addEmployee(){
    this.EmpList.push({
        FirstName: this.newEmp.FirstName,
        LastName: this.newEmp.LastName,
        TeamId: this.newEmp.TeamId
    });
     
}

ngOnInit(): any {
    this.newEmp = {FirstName: '', LastName: '', TeamId: 0};
}

}

export interface IEmployee {
  //   EmpId: number;
     FirstName: string;
     LastName: string;
    
     TeamId: number;
}

