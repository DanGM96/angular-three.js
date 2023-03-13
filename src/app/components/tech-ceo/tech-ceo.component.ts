import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxThreeModule } from 'ngx-three';
import { Coordinates, Social } from 'src/app/helpers/types';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-tech-ceo',
  standalone: true,
  imports: [CommonModule, NgxThreeModule, TextComponent],
  templateUrl: './tech-ceo.component.html',
  styleUrls: ['./tech-ceo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechCeoComponent {
  public showText = true;

  @Input()
  public rotation: Coordinates = [0, 0, 0];

  @Input()
  public objectUrl!: string;

  @Input()
  public socials!: ReadonlyArray<Social>;

  public toggleText(): void {
    this.showText = !this.showText;
  }
}
