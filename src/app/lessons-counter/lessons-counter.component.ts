import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, ADD_NEW_LESSON, LESSONS_LIST_AVAILABLE } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit, Observer {

  lessonsCounter = 0
 
  constructor() {
    console.log('lesson list component is registered as observer ...')
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this)

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => this.lessonsCounter += 1
    })
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('Counter component received data ...')
    this.lessonsCounter = data.length
  }

}
