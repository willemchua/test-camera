import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { YouTubeAPI } from './../../../state-management.service';

@Component({
  selector: 'app-subsubsubcomponent',
  template: `
    <p>
      subsubsubcomponent Works!
    </p>
    <input type = "text" #profileName (keyup) = 0>
    <button (click) = "updateProfileName(profileName.value)">Change Profile Name</button>
    <button (click) = "resetProfileName()">Reset Profile Name</button>
    <br>
    <button (click) = "increment()">Increment</button>
    <button (click) = "decrement()">Decrement</button>
    <button (click) = "reset()">Reset</button>

    <div class="youtube-video-lists" *ngFor="let video of results | async">
      <h3>{{video.snippet.title}}</h3>
      <p>{{video.snippet.description}}</p>
      <img src="{{video.snippet.thumbnails.default.url}}">
    </div>
  `,
  styles: []
})
export class SubsubsubcomponentComponent implements OnInit {
  results: Observable<any>;
  constructor(private store:Store<any>, private youtube:YouTubeAPI) {
    this.store.select('youtubeq').subscribe((q:string) => { 
      this.results = this.youtube.search(q);
     });
  }

  ngOnInit() {
  }

  increment(){
    this.store.dispatch({type:"INCREMENT"});
  }

  decrement(){
    this.store.dispatch({type:"DECREMENT"});
  }

  reset(){
    this.store.dispatch({type:"RESET"});
  }

  updateProfileName(profileName:string){
    this.store.dispatch({type:"UPDATE_PROFILE_NAME", payload:{
      newState: profileName
    }});
  }
  
  resetProfileName(){
    this.store.dispatch({type:"RESET_NAME"});
  }

}
