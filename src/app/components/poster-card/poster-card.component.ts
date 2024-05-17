import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import VanillaTilt from "vanilla-tilt";

@Component({
  selector: 'app-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrls: ['./poster-card.component.scss']
})
export class PosterCardComponent implements OnInit {
  @Input() poster: any;
  @Output() onAddToWishlist: EventEmitter<any> = new EventEmitter<any>();;
  @Output() onAddToCart: EventEmitter<any> = new EventEmitter<any>();;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    VanillaTilt.init(
      this.el.nativeElement.querySelectorAll(".tilt-zone"), { max: 20, speed: 300, scale: 1.05 }
    );
  }
}
