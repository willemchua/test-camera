import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

// import * as PDFJS from 'pdfjs-dist';
// import * as fs from 'fs';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.css']
})
export class DocViewerComponent implements OnInit {

  pdfSrc: string = '../../assets/pdf-test.pdf';
  page: number = 1;
  width: number;
  height: number;

  @ViewChild('pdfViewer') private viewer: ElementRef;

  constructor() { }

  ngOnInit() {
    this.width = this.getWidth();
    this.height = this.getHeight();
  }

  private getWidth(): number {
    return this.viewer.nativeElement.offsetWidth-5;
  }

  private getHeight(): number {
    return this.viewer.nativeElement.offsetHeight;
  }

  @HostListener('window:resize') private onResize() {
    this.width = this.getWidth();
    this.height = this.getHeight();
  }

  private loadPDF() {

    PDFJS.workerSrc = 'pdf.worker.js';

    var loadingTask = PDFJS.getDocument(this.pdfSrc);
    loadingTask.then(function(pdf) {
      console.log('PDF loaded');
      
      // Fetch the first page
      var pageNumber = 6;
      pdf.getPage(pageNumber).then(function(page) {
        console.log('Page loaded');
        
        var scale = 1.5;
        var viewport = page.getViewport(scale);

        // Prepare canvas using PDF page dimensions
        var canvas = <HTMLCanvasElement> document.getElementById('the-canvas');
        var context = <CanvasRenderingContext2D> canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.then(function () {
          console.log('Page rendered');
        });
      });
    });
  }

}
