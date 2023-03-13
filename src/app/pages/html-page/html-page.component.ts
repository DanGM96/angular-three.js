import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxThreeModule } from 'ngx-three';
import { Coordinates } from 'src/app/helpers/types';
import { AllThingsService } from 'src/app/services/all-things.service';

@Component({
  selector: 'app-html-page',
  standalone: true,
  imports: [CommonModule, NgxThreeModule],
  templateUrl: './html-page.component.html',
  styleUrls: ['./html-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlPageComponent {
  public rotation: Coordinates = [0, 0, 0];

  constructor(public readonly allThings: AllThingsService) {}

  public onRender(): void {
    this.rotation = this.allThings.rotate(this.rotation, [0, 0.01, 0.01]);
  }
}
