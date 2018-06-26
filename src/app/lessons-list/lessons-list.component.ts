import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Lesson } from '../shared/model/lesson';
import { Observer, store } from '../event-bus-experiments/app-data'

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {
  lessons: Lesson[] = []

  // constructor() { 
  //   console.log('Lesson-list component is registering as an observer...')
  //   LessonsList$.subscribe(this)
  // }
  // ngDoCheck(){
  //   console.log('Is the lessons from STORE === lessons from LessonList?')
  //   console.log(this.lessons === store.getData())
  //   console.log('CHECKING LESSONS VALUE FROM THE STORE...')
  //   console.log(store.getData())
  //   console.log('CHECKING LESSONS VALUE FROM THE LESSONLIST...')
  //   console.log(this.lessons)
  // }
  
  ngOnInit() {
    // store.LessonsList$.subscribe(this)
    store.subscribe(this)
  }

  next(data: Lesson[]){
    console.log('lesson-list component receiving data: ', data)
    this.lessons = data
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
