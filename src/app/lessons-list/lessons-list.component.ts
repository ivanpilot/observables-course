import { Component, OnInit } from '@angular/core';
// import * as _ from 'lodash';
import { Lesson } from '../shared/model/lesson';
import { store } from '../event-bus-experiments/app-data';
import { Observer } from 'rxjs';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer<Lesson[]> {
  lessons: Lesson[] = []
  
  ngOnInit() {
    // debugger
    // store.LessonsList$.subscribe(this)
    store.lessonsList$.subscribe(this)
  }

  next(data: Lesson[]){
    console.log('lesson-list component receiving data: ', data)
    this.lessons = data
  }

  error(err: any){
    console.error(err)
  }

  complete(){
    console.log('completed')
  }
  
  toggleLessonViewed(lesson: Lesson){
    console.log('toggling lesson ...');
    // lesson.completed = !lesson.completed;
    store.toggleLessonViewed(lesson)
  }

  delete(deleted: Lesson){
    store.deleteLesson(deleted)
  }
}
