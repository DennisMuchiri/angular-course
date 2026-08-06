import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
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

  onCourseViewed() {
    console.table('oooooh');
    this.courseSelected.emit(this.course);
  }
}
