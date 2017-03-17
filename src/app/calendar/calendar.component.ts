import { NgModule, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarPageComponent implements OnInit {
  sampleEvent = {title:'halo',description:'test',start:'2016-09-20'};
  constructor() { }

  ngOnInit() {
    // console.log(this.calendarOptions["events"][0].title);
    console.log(this.calendarOptions["events"]);
    this.calendarOptions["events"].push(this.sampleEvent);
    console.log(this.calendarOptions["events"]);
  }

  calendarOptions:Object = {
        height: 'parent',
        fixedWeekCount : false,
        defaultDate: '2016-09-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'Sick Leave',
            description:'sick',
            start: '2016-09-01'
          },
          {
            title: 'Paid leave',
            description:'paid',
            start: '2016-09-07',
            end: '2016-09-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            description:'holiday',
            start: '2016-09-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            description:'holiday',
            start: '2016-09-16T16:00:00'
          },
          
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            description:'url',
            start: '2016-09-28'
          }
        ],
        eventRender: function(event, element) {
                if(event.description == "sick") {
                    element.css('border-color', '#827717');
                    element.css('background-color', '#827717');
                }else if(event.description == "paid") {
                    element.css('border-color', '#FFEB3B');
                    element.css('background-color', '#FFEB3B');
                }else if(event.description == "holiday") {
                    element.css('border-color', '#BF360C');
                    element.css('background-color', '#BF360C');
                }
        }
      };

}
