import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
datajson: Array<object>;
	
constructor(private Data:DataService) {
       this.datajson = [];
	  this.coursedata();
  }

	coursedata() {
    let path: string='./assets/course.json';
    this.Data.courseJson(path).subscribe(
       res => {
            this.datajson = res;
           console.log(res);
              },
       err => {
           console.log(err);
              }
    );
           }
	
  ngOnInit() {
  }

}
