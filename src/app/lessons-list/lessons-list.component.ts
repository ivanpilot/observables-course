import { Component, OnInit } from '@angular/core';
import { 
  globalEventBus,
  Observer,
  ADD_NEW_LESSON,
  LESSONS_LIST_AVAILABLE
} from '../event-bus-experiments/event-bus';
import * as _ from 'lodash';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {
  lessons: Lesson[] = []
  // counter: number = 0

  constructor() { 
    console.log('Lesson-list component is registering as an observer...')
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this)
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText
        })
      }
    })
  }
  
  // ngDoCheck() {
  //   // debugger
  //   this.counter += 1
  //   console.log('lesson-list has been triggered ' + this.counter + ' times so far.' )
  // }

  ngOnInit() {
  }

  notify(data: Lesson[]){
    console.log('inside lesson-list notify')
    console.log('lesson-list component receiving data: ', data)
    this.lessons = data.slice(0)
  }

  toggleLessonViewed(lesson: Lesson){
    console.log('toggling lesson ...');
    lesson.completed = !lesson.completed;
  }

  delete(deleted: Lesson){
    _.remove(this.lessons, lesson => lesson.id === deleted.id )
  }
}
