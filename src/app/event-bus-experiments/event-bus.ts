import * as _ from 'lodash';

export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE'
export const ADD_NEW_LESSON = 'ADD_NEW_LESSON'

export interface Observer {
  notify(data: any);
}

interface Subject {
  registerObserver(eventType: string, obs: Observer)
  unregisterObsverer(eventType: string, obs: Observer)
  notifyObservers(eventType: string, data: any)
}

class EventBus implements Subject {
  private observers: {[key: string]: Observer[]} = {}

  registerObserver(eventType: string, obs: Observer){
    // this.observers.push(obs)
    this.observersPerEventType(eventType).push(obs)
  }

  unregisterObsverer(eventType: string, obs: Observer){
    // _.remove(this.observers, e => e === obs)
    _.remove(this.observersPerEventType(eventType), e => e === obs)
  }

  notifyObservers(eventType: string, data: any){
    this.observersPerEventType(eventType).forEach(obs => obs.notify(data))
  }

  private observersPerEventType(eventType: string): Observer[]{
    const observersPerType = this.observers[eventType]
    if(!observersPerType){
      this.observers[eventType] = []
    }
    return this.observers[eventType]
  }
  
}

// No other instance can be created from this file. only the one we defined below! 
export const globalEventBus = new EventBus();