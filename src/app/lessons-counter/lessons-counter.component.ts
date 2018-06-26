import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { Observer, store } from '../event-bus-experiments/app-data'

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer {
  lessons: Lesson[] = []
  lessonsCounter: number = 0

  constructor() {
    console.log('Lesson-counter component is registering as an observer...')
    // store.LessonsList$.subscribe(this)
    store.subscribe(this)
  }

 
  next(data: Lesson[]){
    console.log('counter component receiving data...')
    this.lessonsCounter = data.length;
  }
}

