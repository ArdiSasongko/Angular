import {EventEmitter} from '@angular/core';

export class itemService{
    item = [
        {title:"Batman",power:"Intelegent",img:"#"},
        {title:"Superman",power:"Strong",img:"#"},
        {title:"Iron Man",power:"Intelegent",img:"#"},
        {title:"SpiderMan",power:"Intelegent & Spider",img:"#"},
    ]

    onAdddisplay = new EventEmitter <{title:string,power:string,img:string}>();

    detail(items : {title:string,power:string,img:string}){
        this.onAdddisplay.emit(items)
    }
}