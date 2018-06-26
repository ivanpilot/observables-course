import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiment',
  templateUrl: './browser-event-experiment.component.html',
  styleUrls: ['./browser-event-experiment.component.css']
})
export class BrowserEventExperimentComponent implements OnInit {
  hoverSection: HTMLElement
  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover')
    this.hoverSection.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove(e: MouseEvent){
    console.log(e)
  }

  unsubscribe(){
    console.log('Called unsubscribe()')
    this.hoverSection.removeEventListener('mousemove', this.onMouseMove)
  }

}
