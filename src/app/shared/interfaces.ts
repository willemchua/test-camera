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

export interface Employee{
  maleEmployee:number;
  femaleEmployee:number;
  totalEmployee?:number;
}

export interface Search{
  query:string;
  maxOutput?:string;
}

export interface Chat{
  chat: string;
}
