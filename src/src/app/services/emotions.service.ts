import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Emotion } from '../models/emotion';
import { EmotionName } from '../enums/emotion-name.enum';
import { EmotionColor } from '../enums/emotion-color.enum';

@Injectable({
  providedIn: 'root'
})
export class EmotionsService {

  emotions = [
    {
      id: 1,
      name: EmotionName.ANGRY,
      color: EmotionColor.ANGRY,
      date: '16/10/2019',
      time: '16',
      message: 'Test'
    },
    {
      id: 2,
      name: EmotionName.HAPPY,
      color: EmotionColor.HAPPY,
      date: '16/10/2019',
      time: '16',
      message: 'Test'
    },
    {
      id: 3,
      name: EmotionName.SAD,
      color: EmotionColor.SAD,
      date: '16/10/2019',
      time: '16',
      message: 'Test'
    }
  ];

  constructor() { }

  private createEmotionObject(emotionDetails): Emotion {
    return {
      id: this.emotions.length,
      name: emotionDetails.name.label,
      color: EmotionColor[emotionDetails.name.value],
      date: emotionDetails.date,
      time: emotionDetails.time,
      message: emotionDetails.message
    }
  }

  getEmotionById(id: number): Observable<Emotion> {
    return of(this.emotions[id - 1]);
  }

  getEmotions(): Observable<Array<Emotion>> {
    return of(this.emotions);
  }

  saveEmotion(emotion): Observable<any> {
    this.emotions.push(this.createEmotionObject(emotion));
    return of(true);
  }
}
