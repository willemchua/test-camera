export interface CounterInterface{
  counter:number;
}

export interface ProfileInterface{
  name:string;
}

export interface Book{
  id:number;
  volumeInfo:{
    title:string;
    author:string;
  }
}