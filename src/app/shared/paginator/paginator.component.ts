import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {
  @Input() numberOfPages: number;
  @Output() pageChange = new EventEmitter();
  currentPage: number;
  blocksOfPages: any[] = [];
  block: number;
  pages: number;

  constructor() {}

  ngOnChanges() {
    this.currentPage = 0;
    this.block = 0;
    if (this.numberOfPages > 10) {
      let blocks = this.numberOfPages / 10;
      const mod = this.numberOfPages % 10;
      if (mod > 0) {
        blocks = Math.floor(blocks) + 1;
      }

      this.blocksOfPages = new Array(blocks);
      let pageCount = 1;
      for (let i = 0; i < blocks; i++) {
        if (((mod > 0) && (i !== blocks - 1)) || (mod === 0)) {
          this.blocksOfPages[i] = new Array(10);
          for (let j = 0; j < 10; j++) {
            this.blocksOfPages[i][j] = pageCount;
            pageCount++;
          }
        } else {
          this.blocksOfPages[i] = new Array(mod);
          for (let j = 0; j < mod; j++) {
            this.blocksOfPages[i][j] = pageCount;
            pageCount++;
          }
        }
      }

      this.pages = this.blocksOfPages[this.block];
    } else {
      this.pages = this.numberOfPages;
    }
  }

  onPaginatorClick(page) {
    this.currentPage = page - 1;
    this.pageChange.emit({page: this.currentPage + 1});
  }

  onNextClick() {
    if (this.currentPage !== (this.numberOfPages - 1)) {

      if (this.blocksOfPages.length > 0) {
        const limit = this.blocksOfPages[this.block][this.blocksOfPages[this.block].length - 1];
        if (this.currentPage + 1 === limit) {
          this.block++;
          this.pages = this.blocksOfPages[this.block];
        }
      }

      this.currentPage++;
      this.pageChange.emit({page: this.currentPage});
    }
  }

  onPreviousClick() {
    if (this.currentPage !== 0) {

      if (this.blocksOfPages.length > 0 && this.block > 0) {
        const limit = this.blocksOfPages[this.block][0] - 1;
        if (this.currentPage === limit) {
          this.block--;
          this.pages = this.blocksOfPages[this.block];
        }
      }

      this.currentPage--;
      this.pageChange.emit({page: this.currentPage});
    }
  }

  onNextBlockClick() {
    if (!this.disableNextBlock()) {
      this.block++;
      this.pages = this.blocksOfPages[this.block];

      this.currentPage = this.pages[0] - 1;
      this.pageChange.emit({page: this.currentPage});
    }
  }

  onPreviousBlockClick() {
    if (this.blocksOfPages.length > 0 && this.block > 0) {
      this.block--;
      this.pages = this.blocksOfPages[this.block];

      this.currentPage = this.pages[this.pages[this.block].length - 1];
      this.pageChange.emit({page: this.currentPage});
    }
  }

  disableNextBlock() {
    if (this.blocksOfPages.length === 0) {
      return true;
    } else {
      return this.block === this.blocksOfPages.length - 1;
    }
  }
}

