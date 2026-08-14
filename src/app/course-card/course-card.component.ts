import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor() {
  }

  @Input({required: false})
  course: Course;

  @Input({required: true})
  index: number;

  @Input({required: true})
  cardIndex: number;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  isImageVisible (){
    return this.course && this.course?.iconUrl;
  }
  onCourseViewed() {
    console.table('oooooh');
    this.courseSelected.emit(this.course);
  }
  cardClasses(){
    if(this.course?.category=='BEGINNER'){
      return 'beginner';
      return ['beginner','course-card'];
    }
    return {'beginner':this.course?.category=='BEGINNER','course-card':true};
  }
}
