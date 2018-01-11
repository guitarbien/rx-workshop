import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index-post',
  templateUrl: './index-post.component.html',
  styleUrls: ['./index-post.component.css']
})
export class IndexPostComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => console.log(params['id']));
  }
}
