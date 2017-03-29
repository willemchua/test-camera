import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../services/google-book.service';
import { Book } from '../shared/interfaces';
import { Store } from '@ngrx/store';
import { ISearch } from '../shared/page.interface';
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

  books:Book[];
  text: ISearch;
  constructor(private bookService: GoogleBookService, private store: Store<any>) {
    this.store.select('search').subscribe((x:ISearch) => this.text = x);
   }

  ngOnInit() {
    console.log(this.text);
  }

  doStuff(text, number){
    //console.log('Human Stupidity Checker doStuff');

    if(text)
      setTimeout(this.bookService.getData(text, number).subscribe(
        res => {
          console.log();
          this.books = res;
        }
      ),1000)
    else
      this.books = null;
  }

}
