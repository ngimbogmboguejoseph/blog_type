import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at = new Date();
/*
  postTitle: string;
  postContent: string;
  postLoveIts: number;
  postCreated_at: Date;
*/
@Input() nbreJaime: number=0;
@Input() nbreJaimePas: number=0;

date = new Date();
//heure = this.date.getHours() - (this.date.getHours() >= 12 ? 12 : 0);
ampm = this.date.getHours() >= 12 ? 'PM' : 'AM';

  constructor() { }

  ngOnInit() {
  }

  jaime()
  {
      this.nbreJaime = this.nbreJaime+1; 
      this.postLoveIts = this.postLoveIts+1;    
  }
  
  jaimePas()
  {    
    this.nbreJaimePas = this.nbreJaimePas+1; 
    this.postLoveIts = this.postLoveIts-1;   
  }

}
