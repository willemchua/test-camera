import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../services/google-book.service';
import { Book } from '../shared/interfaces';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Search } from '../shared/interfaces';
import { State } from '../app.reducer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  providers: [GoogleBookService]
})
export class BookSearchComponent implements OnInit {
  text$: Observable<Search>;
  books$: Observable<Book[]>;
  
  constructor(private bookService: GoogleBookService, private store: Store<any>) {
  }

  ngOnInit() {
    this.store.select((obj:State) => obj.bookSearchState).subscribe((x:Search) => {
       //console.log(x);
      if(x.query !== "")
        this.books$ = this.bookService.getData(x).map(res => {
          console.log(res);
          return res});
      else
        this.books$ = Observable.of([]);
    });
  }

}
