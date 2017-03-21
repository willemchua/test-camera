import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menus:string[] = ["menu1", "menu2"];

  nama:string;
  menu1:boolean = false;
  menu2:boolean = false;
  selectedValue: string;


  valid(selectedValue:string){
      console.log(this.selectedValue);
    
  if(this.selectedValue == "menu1")
    {
      this.menu1 = true;
      this.menu2 = false;
    }
  else
    {
      this.menu2 = true;
      this.menu1 = false;
    }
  }
}
