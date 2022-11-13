import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users = [
    {
      id:1,
      name:'Budi',
      age:20,
      address:'Jakarta',
    },
    {
      id:2,
      name:'Elin',
      age:20,
      address:'Bandung',
    }
  ]

  constructor() { }

  getid(id:number){
    const user = this.users.find((users)=>{
      return users.id === id;
    })
    return user
  }

  onSubmit(user:any){
    this.users.push(user)
  }
}
