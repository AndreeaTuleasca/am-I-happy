import { EmotionName } from '../enums/emotion-name.enum';
import { EmotionColor } from '../enums/emotion-color.enum';

export class Emotion {
    id: number;
    name: EmotionName;
    color: EmotionColor;
    date: string;
    time: string;
    message: string;
}
