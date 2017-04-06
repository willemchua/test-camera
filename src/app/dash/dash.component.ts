import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  private d3: D3;
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service) { 
      this.d3 = d3Service.getD3();
      this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;

    if (this.parentNativeElement !== null) {
        let container = d3.select('.chart').append('svg').attr('width',200).attr('height',200);
        container.append('circle').attr('cx',50).attr('cy',50).attr('r', 30);
    }
  }

  draw(){
  }
}
