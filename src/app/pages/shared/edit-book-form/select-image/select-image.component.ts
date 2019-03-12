import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ImagesService} from '../../../../services/images.service';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss']
})
export class SelectImageComponent implements OnInit {
  coverList: string[];
  currentImageURL: string;

  @Output()
  private selectCover: EventEmitter<string> = new EventEmitter ();

  @Output()
  private close: EventEmitter<void> = new EventEmitter ();

  constructor(private imageService: ImagesService) {
    this.currentImageURL = '';
  }

  ngOnInit() {
    this.coverList = this.imageService.getCovers();
  }

  changeCurrenImg(curImg: string): void {
    this.currentImageURL = curImg;
  }

  setSelectedCover() {
    this.selectCover.emit(this.currentImageURL);
    this.close.emit();
  }

  closeWindow() {
    this.close.emit();
  }

}
