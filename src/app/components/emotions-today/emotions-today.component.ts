import { Component, OnInit } from '@angular/core';
import { Emotion } from 'src/app/models/emotion';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmotionsService } from 'src/app/services/emotions.service';

@Component({
  selector: 'emotions-today',
  templateUrl: './emotions-today.component.html',
  styleUrls: ['./emotions-today.component.scss']
})
export class EmotionsTodayComponent implements OnInit {

  emotions$: Observable<Array<Emotion>>;
  constructor(private emotionsService: EmotionsService) { }

  ngOnInit() {
    this.emotions$ = this.emotionsService.getEmotions();
  }
}
