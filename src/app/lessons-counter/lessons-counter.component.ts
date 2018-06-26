import { Component, OnInit } from '@angular/core';
import { 
  globalEventBus,
  Observer,
  ADD_NEW_LESSON,
  LESSONS_LIST_AVAILABLE
} from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit, Observer {
  lessonsCounter = 0
  lessons: Lesson[] = []

  constructor() {
    console.log('Lesson-counter component is registering as an observer...')

    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this)
    // globalEventBus.registerObserver(ADD_NEW_LESSON, this)
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => this.lessonsCounter += 1
    })
  }

  
  ngOnInit() {
  }

  notify(data: Lesson[]){
    // debugger
    console.log('counter component receiving data...')
    this.lessonsCounter = data.length; 

  }
}

