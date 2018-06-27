import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { store } from '../event-bus-experiments/app-data';
import { Observer } from 'rxjs';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer<Lesson[]> {
  lessons: Lesson[] = []
  lessonsCounter: number = 0
  
  constructor() {
    console.log('Lesson-counter component is registering as an observer...')
    // store.LessonsList$.subscribe(this)
    // store.subscribe(this)
    store.lessonsList$.subscribe(this)
  }
  
  next(data: Lesson[]){
    console.log('counter component receiving data...')
    this.lessonsCounter = data.length;
  }
  
  error(err: any){
    console.error(err)
  }

  complete(){
    console.log('completed.')
  }
  
}

