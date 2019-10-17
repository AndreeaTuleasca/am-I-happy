import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { EmotionsService } from 'src/app/services/emotions.service';
import { throwError } from 'rxjs';
import { EmotionName } from 'src/app/enums/emotion-name.enum';
import * as moment from 'moment';

@Component({
  selector: 'app-emotion-add',
  templateUrl: './emotion-add.component.html',
  styleUrls: ['./emotion-add.component.scss']
})
export class EmotionAddComponent implements OnInit {

  emotionForm;
  names: Array<{label: EmotionName, value: string}>;
  dates: Array<string>;
  times: Array<string>;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private emotionService: EmotionsService
  ) {
    this.names = [
      {
        label: EmotionName.HAPPY,
        value: EmotionName.HAPPY.valueOf()
      },
      {
        label: EmotionName.SAD,
        value: EmotionName.SAD.valueOf()
      },
      {
        label: EmotionName.ANGRY,
        value: EmotionName.ANGRY.valueOf()
      }
      ];
    this.dates = this.getDates();
    this.times = this.getTimes();
  }

  ngOnInit() {
    this.emotionForm = this.formBuilder.group({
      name: this.names[0],
      date: this.dates[0],
      time: this.times[0],
      message: ''
    });
  }

  changeTime($event): void {
    const selectedIndex = $event.target.selectedIndex;
    this.emotionForm.controls['time'].setValue(this.times[selectedIndex]);
  }

  changeDate($event): void {
    const selectedIndex = $event.target.selectedIndex;
    this.emotionForm.controls['date'].setValue(this.dates[selectedIndex]);
  }

  changeName($event): void {
    const selectedIndex = $event.target.selectedIndex;
    this.emotionForm.controls['name'].setValue(this.names[selectedIndex]);
  }

  onSubmit(emotionData): void {
    this.emotionService.saveEmotion(emotionData).subscribe(
      () => this.router.navigate(['/emotions-today']),
      () => throwError('Could not save')
    )
  }

  private getDates(): Array<string> {
    const today = moment();
    let days = [];
    for(let i=0; i<10; i++) {
      days.push(today.subtract(1, 'days').format('DD/MM/YYYY'));
    }
    return days;
  }

  private getTimes(): Array<string> {
    const today = moment();
    let times = [];
    for(let i=0; i<24; i++) {
      times.push(today.subtract(1, 'hours').format('HH'));
    }
    return times;
  }

}
