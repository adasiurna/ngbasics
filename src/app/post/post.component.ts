import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() postImg = ''
    @Output() imgSelected = new EventEmitter<string>()

    constructor() {
        console.log('constructor called', this.postImg)
    }

    ngOnInit() {
        console.log('ngOnInit called', this.postImg);
    }

    ngOnChanges() {
        console.log('ngOnChanges called', this.postImg);
    }

    ngDoCheck() {
        console.log('ngDoCheck called', this.postImg);
    }

    ngAfterContentInit() {
        console.log('AfterContentInit called', this.postImg);
    }

    ngAfterContentChecked() {
        console.log('AfterContentChecked called', this.postImg);
    }

    ngAfterViewInit() {
        console.log('AfterViewInit called', this.postImg);
    }

    ngAfterViewChecked() {
        console.log('AfterViewChecked called', this.postImg);
    }

    ngOnDestroy() {
        console.log('OnDestroy called', this.postImg);
    }
}
