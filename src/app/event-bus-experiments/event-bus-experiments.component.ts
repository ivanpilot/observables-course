import { Component, OnInit } from '@angular/core';
import { testLessons } from '../shared/model/test-lessons';
// import { Lesson } from '../shared/model/lesson';
import { store } from './app-data'

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('Broadcasting lessons to all observers')

    store.initializeLessonsList(testLessons.slice(0))

    setTimeout(() => {
      const newLesson = {
        id: Math.random(),
        description: 'New lesson arriving from back end'
      };
      store.addLesson(newLesson)
    }, 4000)
  }

  addLesson(lessonText: string){
    console.log('adding a new lesson: ', lessonText)
    
    const newLesson = {
      id: Math.random(),
      description: lessonText
    };
    store.addLesson(newLesson)
}
}
