import { Component, OnInit } from '@angular/core';
import { 
  globalEventBus,
  LESSONS_LIST_AVAILABLE,
  ADD_NEW_LESSON 
} from './event-bus';
import { testLessons } from '../shared/model/test-lessons';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {
  private lessons: Lesson[] = []
  // counter: number = 0

  constructor() {
  }


  // ngDoCheck() {
  //   // debugger
  //   this.counter += 1
  //   console.log('event bus has been triggered ' + this.counter + ' times so far.' )
  // }
  
  ngOnInit() {
    console.log('Broadcasting lessons to all observers')
    this.lessons = testLessons.slice(0)

    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons)
  
    setTimeout(() => {
      console.log('now inside setTimeout...')
      this.lessons.push({
        id: Math.random(),
        description: 'New lesson arriving from back end'
      });
      globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons)
    }, 4000)
  }

  addLesson(lessonText: string){
    console.log('adding a new lesson: ', lessonText)
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText)
  }
}
