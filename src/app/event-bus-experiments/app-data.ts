import * as _ from 'lodash';
import { Lesson } from '../shared/model/lesson'
import { Observer, Subject, Observable, BehaviorSubject } from 'rxjs';

// export interface Observer {
//   next(data: any);
// }

// export interface Observable {
//   subscribe(obs: Observer)
//   unsubscribe(obs: Observer)
// }

// interface Subject extends Observer, Observable {}

// class SubjectImplementation implements Subject {
//   private observers: Observer[] = []

//   next(data: any){
//     this.observers.forEach(obs => obs.next(data))
//   }

//   subscribe(obs: Observer){
//     this.observers.push(obs)
//   }

//   unsubscribe(obs: Observer){
//     _.remove(this.observers, el => el === obs)
//   }  
// }

class DataStore {
  private lessons: Lesson[] = []
  private lessonsListSubject = new BehaviorSubject<Lesson[]>([])
  
  public lessonsList$: Observable<Lesson[]> = this.lessonsListSubject.asObservable();
 
  // public LessonsList$: Observable = {
  //   subscribe: obs => {
  //     this.lessonsListSubject.subscribe(obs)
  //     obs.next(this.lessons)
  //   },
  //   unsubscribe: obs => this.lessonsListSubject.unsubscribe(obs)  
  // } 

  // subscribe(obs: Observer) {
  //   this.lessonsListSubject.subscribe(obs)
  //   obs.next(this.lessons)
  // }

  // unsubscribe(obs: Observer) {
  //   this.lessonsListSubject.unsubscribe(obs)
  // }

  initializeLessonsList(newList: Lesson[]) {
    // this.lessonsListSubject.next(_.cloneDeep(newList))
    this.lessons = _.cloneDeep(newList)
    this.broadcast()
  }
  
  addLesson(newLesson: Lesson) {
    // const lessons = this.cloneLessons()
    // lessons.push(_.cloneDeep(newLesson))
    // this.lessonsListSubject.next(lessons)
    
    this.lessons.push(_.cloneDeep(newLesson))
    this.broadcast()
  }
  
  deleteLesson(deleted: Lesson){
    // const lessons = this.cloneLessons()
    // _.remove(lessons, lesson => lesson.id === deleted.id)
    // this.lessonsListSubject.next(lessons)
    _.remove(this.lessons, lesson => lesson.id === deleted.id)
    this.broadcast()
  }

  toggleLessonViewed(toggled: Lesson){
    // const lessons = this.cloneLessons()
    // const lesson = _.find(lessons, lesson => lesson.id === toggled.id)
    // lesson.completed = !lesson.completed
    // this.lessonsListSubject.next(lessons)

    const lesson = _.find(this.lessons, lesson => lesson.id === toggled.id)
    lesson.completed = !lesson.completed
    this.broadcast()
  }

  broadcast(){
    this.lessonsListSubject.next(_.cloneDeep(this.lessons))
  }

  // getData(){
  //   return this.lessons
  // }
  private cloneLessons(){
    return _.cloneDeep(this.lessonsListSubject.getValue())
  }
}

export const store = new DataStore()