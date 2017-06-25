import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service'

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl:'user.component.html',
    providers: [] = [PostsService]
})
export class UserComponent  {
   name: string;
   email:string;
   address: IAddress;
   hobbies: string[];
   showHobbies: boolean;
   posts : IPost[];
   

   constructor(private PostsService: PostsService){
        console.log('Constructor Ran')
        this.name = 'Sunil Mehta';
        this.name = 'Angular';
        this.email = 'smehta@gmail.com';
        this.address = {
            street: '12 main st',
            city: 'Boston',
            state: 'MA'
        }
        this.showHobbies = false;

        this.hobbies = ['Music','Movies','Sports'];
        this.PostsService.getPosts().subscribe(posts => {
            console.log(posts)
            this.posts = posts;
        });
        

   }

   toggleHobbies(){
       if(this.showHobbies == true){
            this.showHobbies = false;
        }else{
            this.showHobbies = true;
        }

    

   }

    addHobby(hobby:any){
        this.hobbies.push(hobby);
    }

    deleteHobby(index: number){
        this.hobbies.splice(index,1);

    }
 }

 export interface IAddress{
        street: string
        city: string;
        state: string; 

 }

 export interface IPost{
     id: number;
     title: string;
     body: string;
 }
