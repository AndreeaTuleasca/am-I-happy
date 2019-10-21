import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { EmotionsService } from 'src/app/services/emotions.service';
import { Emotion } from '../../models/emotion';

@Component({
  selector: 'emotion-details',
  templateUrl: './emotion-details.component.html',
  styleUrls: ['./emotion-details.component.scss']
})
export class EmotionDetailsComponent implements OnInit {

  emotion: Emotion;

  constructor(private route: ActivatedRoute, private emotionService: EmotionsService) { }

  ngOnInit() {
    const emotion$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.emotionService.getEmotionById(Number(params.get('id')))
      }));
    
    emotion$.subscribe(emotion => this.emotion = emotion);
  }

}
